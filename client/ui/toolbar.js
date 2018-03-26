// Create a Vue component for the toolbar

// First, import symbols from packages.
import {
  drawerMixin, mmMenu, mmMenus,
  mmMenuLearn, mmMenuPlay, mmMenuCreate
} from './imports.js';

var MMDEBUG = false;
MMDEBUG && console.log('mmMenus: ', mmMenus);

var mmToolbar =
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',

  components:
  {
    'mm-menu': mmMenu,
    'mm-menu-learn': mmMenuLearn,
    'mm-menu-play': mmMenuPlay,
    'mm-menu-create': mmMenuCreate
  },

  mixins:
  [
    drawerMixin
  ],

  data:
  function() {
    return {
      menus: mmMenus
    };
  }
};

export { mmToolbar };
