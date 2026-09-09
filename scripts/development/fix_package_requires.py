# -*- coding: utf-8 -*-
import os, glob

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
files = glob.glob(os.path.join(ROOT, 'apps/api/src/**/*.js'), recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        content = fp.read()
    updated = content.replace(
        "require('../../../../packages/",
        "require('../../../../../packages/"
    )
    if updated != content:
        with open(f, 'w', encoding='utf-8') as fp:
            fp.write(updated)
        print('Fixed package require in:', os.path.relpath(f, ROOT))

print('Package requires check complete.')
