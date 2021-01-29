import * as fs from 'fs';

const PROJECTS = './data/projects.txt';

export function parseProjects() {
  const data = fs.readFileSync(PROJECTS, 'utf8');
  const projects = data.split('---\n');

  return projects.map(project => {
    const lines = project.split('\n');
    return {
      name: lines[0],
      description: lines[1],
      link: lines[2],
      img: lines[3],
    };
  });
}
