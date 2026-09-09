# -*- coding: utf-8 -*-
import os, glob

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

# 1. Create apps/api/src/database/database-adapter.js
src_adapter = os.path.join(ROOT, 'scripts/database/database-adapter.js')
dst_adapter = os.path.join(ROOT, 'apps/api/src/database/database-adapter.js')
os.makedirs(os.path.dirname(dst_adapter), exist_ok=True)
with open(src_adapter, 'r', encoding='utf-8') as f:
    content = f.read()
with open(dst_adapter, 'w', encoding='utf-8') as f:
    f.write(content)
print('Copied database-adapter.js to apps/api/src/database/database-adapter.js')

# 2. Update all references in apps/api/src/modules/
files = glob.glob(os.path.join(ROOT, 'apps/api/src/**/*.js'), recursive=True)
for fpath in files:
    with open(fpath, 'r', encoding='utf-8') as f:
        text = f.read()
    updated = text.replace(
        "require('../../../../scripts/database/database-adapter')",
        "require(require('path').resolve(__dirname, '../../../../scripts/database/database-adapter'))"
    ).replace(
        "require('../../database/database-adapter')",
        "require(require('path').resolve(__dirname, '../../../../scripts/database/database-adapter'))"
    )
    if updated != text:
        with open(fpath, 'w', encoding='utf-8') as f:
            f.write(updated)
        print('Updated require in:', os.path.relpath(fpath, ROOT))

print('DB paths fixed.')
