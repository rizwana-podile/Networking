# Generator for packages: types, config, utils, validation, api-client, ui
import os
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def write_code(rel_path, content):
    full_path = os.path.join(ROOT_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    lines = len(content.splitlines())
    print(f'  [Package File] {rel_path} ({lines} lines)')
    return lines

def generate():
    total_lines = 0
    print('Generating @geonet packages...')
    
    # 1. @geonet/types
    write_code('packages/types/package.json', json.dumps({
        'name': '@geonet/types',
        'version': '1.0.0',
        'main': 'dist/index.js',
        'types': 'dist/index.d.ts',
        'scripts': { 'build': 'tsc', 'typecheck': 'tsc --noEmit' },
        'devDependencies': { 'typescript': '^5.4.0' }
    }, indent=2))

    write_code('packages/types/tsconfig.json', json.dumps({
        'extends': '../../tsconfig.base.json',
        'compilerOptions': { 'outDir': './dist', 'rootDir': './src' },
        'include': ['src/**/*']
    }, indent=2))

    # We will expand all files here
    print('Types package config ready')

if __name__ == '__main__':
    generate()
