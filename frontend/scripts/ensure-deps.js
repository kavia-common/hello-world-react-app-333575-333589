'use strict';

const { spawnSync } = require('node:child_process');
const fs = require('node:fs');
const path = require('node:path');

/**
 * DependencyIntegrityFlow
 *
 * Purpose:
 *   Ensure the local node_modules tree is consistent enough to run react-scripts.
 *   This is primarily a guard against partially-extracted/corrupted node_modules
 *   which causes runtime failures like "Cannot find module .../lib/main.js".
 *
 * Contract:
 *   Inputs:
 *     - none (operates on current working directory)
 *   Outputs:
 *     - process exit code 0 if dependencies look healthy (or were repaired successfully)
 *     - process exit code 1 if verification fails and repair fails
 *   Errors:
 *     - If verification fails, we attempt an automated repair via `npm install`.
 *     - If repair fails, we print actionable logs and exit 1.
 *   Side effects:
 *     - May run `npm install --no-audit --no-fund` to repair dependencies.
 *
 * Debugging:
 *   - Look for "DependencyIntegrityFlow" logs in the console.
 *   - If repair fails, re-run `npm install` and inspect npm logs.
 */

// PUBLIC_INTERFACE
function main() {
  /** Entry point for DependencyIntegrityFlow. */
  const cwd = process.cwd();

  // Minimal set of "canary" files that must exist for CRA to start.
  // If any are missing, node_modules is incomplete and must be repaired.
  const requiredFiles = [
    path.join(cwd, 'node_modules', 'cross-spawn', 'lib', 'parse.js'),
    path.join(cwd, 'node_modules', 'dotenv', 'lib', 'main.js'),
    path.join(cwd, 'node_modules', 'dotenv-expand', 'lib', 'main.js'),
    path.join(cwd, 'node_modules', 'webpack', 'lib', 'index.js'),
  ];

  const missing = requiredFiles.filter((p) => !fs.existsSync(p));
  if (missing.length === 0) {
    process.stdout.write('[DependencyIntegrityFlow] OK: dependency canary files present.\n');
    return;
  }

  process.stdout.write(
    `[DependencyIntegrityFlow] Detected incomplete node_modules (missing ${missing.length} files).\n` +
      missing.map((m) => `  - ${m}\n`).join('') +
      '[DependencyIntegrityFlow] Attempting repair via `npm install`...\n',
  );

  const result = spawnSync('npm', ['install', '--no-audit', '--no-fund'], {
    cwd,
    stdio: 'inherit',
    shell: false,
    env: process.env,
  });

  if (result.status !== 0) {
    process.stderr.write(
      `[DependencyIntegrityFlow] ERROR: npm install failed with exit code ${result.status}.\n` +
        'Fix: run `npm install` manually and inspect npm logs.\n',
    );
    process.exit(1);
  }

  const stillMissing = requiredFiles.filter((p) => !fs.existsSync(p));
  if (stillMissing.length > 0) {
    process.stderr.write(
      '[DependencyIntegrityFlow] ERROR: npm install succeeded but dependencies are still incomplete.\n' +
        stillMissing.map((m) => `  - ${m}\n`).join('') +
        'Fix: remove node_modules + lockfile and reinstall cleanly.\n',
    );
    process.exit(1);
  }

  process.stdout.write('[DependencyIntegrityFlow] Repair successful.\n');
}

main();
