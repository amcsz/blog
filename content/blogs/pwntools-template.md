---
title: Pwntools template for linux
slug: pwntools-template
description: My pwntools template.
cardImage: "https://amcsz.me/pwntools.png"
tags: ["code", "html"]
readTime: 5
featured: true
timestamp: 2025-06-29T10:38:00-05:00
---
This is a pwntools template I use for pwn challs. I use GNOME on fedora 42, but you can edit the settings to make it work on your machine. Supports remote + gdb.
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