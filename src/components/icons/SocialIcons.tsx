import { createLucideIcon, type IconNode } from 'lucide-react';

const githubIcon: IconNode = [
  [
    'path',
    {
      d: 'M9 19c-4 1.5-4-2-5-2.5M15 22v-3.5c0-1 .1-1.4-.5-2 2.8-.3 5.5-1.4 5.5-6A4.6 4.6 0 0 0 18.8 7c.1-.4.5-1.8-.2-3.5 0 0-1-.3-3.4 1.3A11.6 11.6 0 0 0 9 4.8C6.6 3.2 5.6 3.5 5.6 3.5 4.9 5.2 5.3 6.6 5.4 7A4.6 4.6 0 0 0 4 10.5c0 4.6 2.7 5.7 5.5 6-.6.6-.6 1.2-.5 2V22',
    },
  ],
];

const linkedinIcon: IconNode = [
  ['path', { d: 'M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-4 0v7h-4v-7a6 6 0 0 1 6-6z' }],
  ['rect', { width: '4', height: '12', x: '2', y: '9' }],
  ['circle', { cx: '4', cy: '4', r: '2' }],
];

export const Github = createLucideIcon('Github', githubIcon);
export const Linkedin = createLucideIcon('Linkedin', linkedinIcon);
