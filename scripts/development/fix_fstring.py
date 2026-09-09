# -*- coding: utf-8 -*-
with open("scripts/development/generate_500k_loc.py", "r", encoding="utf-8") as f:
    text = f.read()

# Fix f-strings with unescaped curly braces
fixed = text.replace("async () => {", "async () => {{").replace("  });", "  }});").replace("f\"export interface {mod_title.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')}Config {\",", "f\"export interface {mod_title.replace(' ', '').replace('-', '').replace('(', '').replace(')', '')}Config {{\",").replace("f\"export interface {mod_name.title().replace('_', '')}RecordV{i} {\",", "f\"export interface {mod_name.title().replace('_', '')}RecordV{i} {{\",").replace("f\"export interface {algo_name.title().replace('_', '')}Options {\",", "f\"export interface {algo_name.title().replace('_', '')}Options {{\",").replace("f\"export class {algo_name.title().replace('_', '')}EngineV{v} {\",", "f\"export class {algo_name.title().replace('_', '')}EngineV{v} {{\",").replace("f\"  constructor(options: Partial<{algo_name.title().replace('_', '')}Options> = {}) {\",", "f\"  constructor(options: Partial<{algo_name.title().replace('_', '')}Options> = {{}}) {{\",").replace("f\"  public executeIterationStep{v}(inputVector: number[]): { state: number[]; confidenceScore: number; variance: number } {\",", "f\"  public executeIterationStep{v}(inputVector: number[]): {{ state: number[]; confidenceScore: number; variance: number }} {{\",").replace("f\"  public computeBatch{v}(dataset: number[][]): { processedCount: number; meanConfidence: number } {\",", "f\"  public computeBatch{v}(dataset: number[][]): {{ processedCount: number; meanConfidence: number }} {{\",")

with open("scripts/development/generate_500k_loc.py", "w", encoding="utf-8") as f:
    f.write(fixed)

print("generate_500k_loc.py f-strings fixed.")
