import { readFileSync, readdirSync, writeFileSync } from 'node:fs';

// DSH loads a single browser module. Ship the paths with it for offline use.
const art = new URL('../assets/art/', import.meta.url);
// Present the protagonists and Windows games first in the grouped selector.
const files = readdirSync(art).filter(file => file.endsWith('.json')).sort();
const characters = [...files.filter(file => file.startsWith('windows-')),
  ...files.filter(file => !file.startsWith('windows-'))]
  .flatMap(file => JSON.parse(readFileSync(new URL(file, art), 'utf8')));
const ids = new Set();
const paths = new Set();
const motions = new Set(['float', 'swing', 'spin', 'pulse']);
for (const { id, name, group, color, motif, path, motion } of characters) {
  if (!id || ids.has(id) || !name || !group || !motif || !/^#[\da-f]{6}$/i.test(color) ||
      !motions.has(motion) || !/^M[MLHVCSQTAZ\d\s+.,-]+$/i.test(path) || paths.has(path)) {
    throw new Error(`Invalid or duplicate character entry: ${id} (${name})`);
  }
  ids.add(id);
  paths.add(path);
}
if (!characters.length) throw new Error('The character roster is empty');

const file = new URL('../lib/client.js', import.meta.url);
const client = readFileSync(file, 'utf8').replaceAll('\r\n', '\n');
const block = /    \/\/ BEGIN GENERATED PORTRAITS[\s\S]*?    \/\/ END GENERATED PORTRAITS/;
if (!block.test(client)) throw new Error('Missing character data markers in lib/client.js');
const data = characters.map(character => '      ' + JSON.stringify(character)).join(',\n');
const output = client.replace(block, () => [
  '    // BEGIN GENERATED PORTRAITS',
  '    const CHARACTERS = [', data, '    ];',
  '    // END GENERATED PORTRAITS',
].join('\n'));
if (process.argv.includes('--check')) {
  if (output !== client) throw new Error('Embedded art is stale. Run npm run build.');
} else if (output !== client) {
  writeFileSync(file, output);
}
console.log(`${characters.length} character emblems verified`);
