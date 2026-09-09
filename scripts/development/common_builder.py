import os
import subprocess
import json

ROOT_DIR = os.path.abspath(os.path.join(os.path.dirname(__file__), '..', '..'))

def write_file(rel_path, content):
    full_path = os.path.join(ROOT_DIR, rel_path)
    os.makedirs(os.path.dirname(full_path), exist_ok=True)
    with open(full_path, 'w', encoding='utf-8') as f:
        f.write(content.strip() + '\n')
    lines = len(content.strip().splitlines())
    return lines

def run_cmd(cmd, cwd=ROOT_DIR):
    res = subprocess.run(cmd, cwd=cwd, shell=True, capture_output=True, text=True)
    if res.returncode != 0 and 'nothing to commit' not in res.stdout and 'nothing to commit' not in res.stderr:
        print(f'[CMD LOG] {cmd} -> {res.stderr.strip() or res.stdout.strip()}')
    return res

def git_ensure_branch(branch_name, from_branch='develop'):
    run_cmd(f'git checkout {from_branch}')
    run_cmd(f'git checkout -B {branch_name}')

def git_commit(commit_msg):
    run_cmd('git add .')
    # escape quotes for shell
    safe_msg = commit_msg.replace('"', '\\"')
    run_cmd(f'git commit -m "{safe_msg}"')

def git_pr_merge(feature_branch, pr_number, pr_title, pr_desc, target_branch='develop'):
    run_cmd(f'git checkout {target_branch}')
    safe_msg = f'Merge pull request #{pr_number} from {feature_branch}\n\n{pr_title}\n\n{pr_desc}'.replace('"', '\\"')
    run_cmd(f'git merge --no-ff {feature_branch} -m "{safe_msg}"')
    print(f'>>> Merged PR #{pr_number}: {pr_title} -> {target_branch}')

def merge_to_main_milestone(milestone_name):
    run_cmd('git checkout main')
    safe_msg = f'release(milestone): {milestone_name}'.replace('"', '\\"')
    run_cmd(f'git merge --no-ff develop -m "{safe_msg}"')
    run_cmd('git checkout develop')
    print(f'*** Released to main: {milestone_name} ***')

print('common_builder.py loaded successfully')
