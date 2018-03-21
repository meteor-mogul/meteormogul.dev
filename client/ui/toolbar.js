// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from '../mixins.js';
import { mmMenuLearn } from './menus/learn.js';
import { mmMenuPlay } from './menus/play.js';
import { mmMenuCreate } from './menus/create.js';

var mmToolbar =
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',

  mixins:
  [
    drawerMixin
  ],

  components:
  {
    'mm-menu-learn': mmMenuLearn,
    'mm-menu-play': mmMenuPlay,
    'mm-menu-create': mmMenuCreate
  }
};

export { mmToolbar };
