# -*- coding: utf-8 -*-
import os, glob

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
files = glob.glob(os.path.join(ROOT, 'apps/api/src/modules/**/*.js'), recursive=True)

for f in files:
    with open(f, 'r', encoding='utf-8') as fp:
        lines = fp.readlines()
    new_lines = []
    for line in lines:
        if 'database-adapter' in line and 'require(' in line:
            new_lines.append("const db = require('../../database/database-adapter');\n")
        else:
            new_lines.append(line)
    new_content = ''.join(new_lines)
    with open(f, 'w', encoding='utf-8') as fp:
        fp.write(new_content)

print('Successfully cleaned all database-adapter requires.')
