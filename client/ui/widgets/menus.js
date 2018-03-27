import { apiDocs, apiDemos, apiRepos, mmMenuMaker } from './imports.js';

// Menu Pattern 1: Use child components and props.
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
    items: apiDemos.getList(),
    target: '_blank'
  },
  create:
  {
    name: 'create',
    title: 'Create',
    subhead: 'GitHub repos',
    items: apiRepos.getList(),
    target: '_blank'
  }
};

// Menu Pattern 2: Use a constructor to create different components.
const mmMenuLearn =
new mmMenuMaker('learn','Learn','Documentation',apiDocs.getList(),'router');
const mmMenuPlay =
new mmMenuMaker('play','Play','heroku demos',apiDemos.getList(),'_blank');
const mmMenuCreate =
new mmMenuMaker('create','Create','GitHub repos',apiRepos.getList(),'_blank');

// Export symbols for both patterns so both options are available.
export { mmMenus, mmMenuLearn, mmMenuPlay, mmMenuCreate };
