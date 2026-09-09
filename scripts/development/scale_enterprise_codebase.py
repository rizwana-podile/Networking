# -*- coding: utf-8 -*-
import os, json, sys

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def w(path, lines):
    p = os.path.join(ROOT, path)
    os.makedirs(os.path.dirname(p), exist_ok=True)
    with open(p, 'w', encoding='utf-8') as fp:
        fp.write('\n'.join(lines) + '\n')
    return len(lines)

print("Starting enterprise codebase expansion...")
