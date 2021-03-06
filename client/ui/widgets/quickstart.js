// Create a Vue component for the QuickStart expansion panel

// First, import symbols from packages.
import { drawerMixin } from './imports.js';

var mmQuickStart =
{
  name: 'mm-quickstart',
  template: '#mm-quickstart-template',
  mixins:
  [
    drawerMixin
  ]
};

export { mmQuickStart };
