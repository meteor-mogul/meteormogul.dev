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
    // Two ways you can do menus.
    // 1. Define one component and pass props to each instance.
    'mm-menu': mmMenu,             // client/ui/widgets/menu
    // 2. Use a constructor to create different components.
    'mm-menu-learn': mmMenuLearn,  // client/ui/widgets/menus
    'mm-menu-play': mmMenuPlay,    // client/ui/widgets/menus
    'mm-menu-create': mmMenuCreate // client/ui/widgets/menus
  },

  mixins:
  [
    drawerMixin
  ],

  data:
  function() {
    return {
      // Use this array to create multiple menus using the same component
      // definition, with each one getting different prop values.
      // Don't need this if you use second pattern above (constructor to
      // create different components).
      menus: mmMenus
    };
  }
};

export { mmToolbar };
