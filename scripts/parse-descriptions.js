import * as fs from 'fs';

const DESCRIPTIONS = './data/descriptions.txt';

export function parseDescriptions() {
  const data = fs.readFileSync(DESCRIPTIONS, 'utf8');
  return data.split('\n');
}
