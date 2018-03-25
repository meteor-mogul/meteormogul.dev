// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from './imports.js';

var mmFooter =
{
  name: 'mm-footer',
  template: '#mm-footer-template',
  mixins: [
    drawerMixin
  ],
};

export { mmFooter };
