import { mkdir, readdir, readFile, rm, writeFile, cp } from 'node:fs/promises';
import { resolve, join } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const target = resolve(root, process.argv[2] || 'dist');

async function concatParts(sourceDir, outputName) {
  const dir = resolve(root, sourceDir);
  const names = (await readdir(dir)).filter((name) => name.endsWith('.part')).sort();
  if (!names.length) throw new Error(`No source parts found in ${sourceDir}`);
  const chunks = await Promise.all(names.map((name) => readFile(join(dir, name))));
  await writeFile(join(target, outputName), Buffer.concat(chunks));
}

await rm(target, { recursive: true, force: true });
await mkdir(target, { recursive: true });

for (const name of ['index.html', 'service-worker.js', 'manifest.webmanifest']) {
  await cp(resolve(root, name), join(target, name));
}
await cp(resolve(root, 'assets'), join(target, 'assets'), { recursive: true });
await concatParts('src/core', 'game-core.js');
await concatParts('src/game', 'game.js');
await concatParts('src/styles', 'styles.css');

console.log(`Built Moneygame1 V2 → ${target}`);
