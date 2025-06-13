---
layout: post
title:  "pwntools templates for quick reference"
date:   2025-06-13 11:05:00 -0400
tags: ctf
---
Pwntools template that I use on fedora:
```python
from pwn import *

context.log_level = 'debug'
context.binary = elf = ELF('./vuln')
context.terminal = ['gnome-terminal', '-e']
# libc = ELF('./libc.so.6')

USE_REMOTE = False
REMOTE_HOST = 'hostname'
REMOTE_PORT = 1337

USE_GDB = True
GDB_SCRIPT = """
"""

def start():
    if USE_REMOTE:
        return remote(REMOTE_HOST, REMOTE_PORT)
    p = process(elf.path)
    if USE_GDB:
        gdb.attach(p, GDB_SCRIPT)
    return p

p = start()

# exploit goes here

p.interactive()
```