import { apiDocs, mmListDemos, mmListRepos, mmMenuMaker } from './imports.js';

var mmMenus =
{
  learn:
  {
    name: 'learn',
    title: 'Learn',
    subhead: 'Documentation',
    items: apiDocs.getList(),
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

const mmMenuLearn = new mmMenuMaker('learn','Learn','Documentation',apiDocs.getList(),'router');
const mmMenuPlay = new mmMenuMaker('play','Play','heroku demos',mmListDemos,'_blank');
const mmMenuCreate = new mmMenuMaker('create','Create','GitHub repos',mmListRepos,'_blank');

export { mmMenus, mmMenuLearn, mmMenuPlay, mmMenuCreate };
