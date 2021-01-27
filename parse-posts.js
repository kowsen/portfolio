import * as fs from 'fs';

const DIRECTORY = './posts';

export function parsePosts() {
  const files = fs
    .readdirSync(DIRECTORY)
    .filter((file) => file.indexOf('.md') !== -1);
  return files.map((file) => parsePost(file));
}

function parsePost(path) {
  const data = fs.readFileSync(`${DIRECTORY}/${path}`, 'utf8');
  const lines = data.split('\n');
  return {
    id: path.replace('.md', ''),
    title: stripLine(lines[0]),
    date: stripLine(lines[1]),
    author: stripLine(lines[2]),
  };
}

function stripLine(line) {
  return line.replace('<!---', '').replace('-->', '').trim();
}
