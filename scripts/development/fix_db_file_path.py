# -*- coding: utf-8 -*-
import os

ROOT = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))
target_db_file = os.path.join(ROOT, 'data', 'geonet_sentinel_data.json')

adapter_files = [
    os.path.join(ROOT, 'scripts', 'database', 'database-adapter.js'),
    os.path.join(ROOT, 'apps', 'api', 'src', 'database', 'database-adapter.js')
]

for af in adapter_files:
    with open(af, 'r', encoding='utf-8') as fp:
        code = fp.read()
    code = code.replace(
        "this.dbFile = path.resolve(__dirname, '../../data/geonet_sentinel_data.json');",
        "this.dbFile = path.resolve(process.env.DB_FILE || path.join(process.cwd(), 'data/geonet_sentinel_data.json'));"
    )
    with open(af, 'w', encoding='utf-8') as fp:
        fp.write(code)
    print('Updated dbFile in:', os.path.relpath(af, ROOT))

print('DB file path synchronization complete.')
