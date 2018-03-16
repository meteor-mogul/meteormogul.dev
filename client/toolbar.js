// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from './mixins.js';

var mmToolbar =
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',
  mixins: [drawerMixin]
};

export { mmToolbar };
