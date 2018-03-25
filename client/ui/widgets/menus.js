import { mmListDocs, mmListDemos, mmListRepos } from './imports.js';

var mmMenus =
{
  learn:
  {
    name: 'learn',
    title: 'Learn',
    subhead: 'Documentation',
    items: mmListDocs,
    target: 'router'
  },
  play:
  {
    name: 'play',
    title: 'Play',
    subhead: 'heroku demos',
    items: mmListDemos,
    target: '_blank'
  },
  create:
  {
    name: 'create',
    title: 'Create',
    subhead: 'GitHub repos',
    items: mmListRepos,
    target: '_blank'
  }
};

export { mmMenus };
