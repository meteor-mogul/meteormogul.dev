// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from '../mixins.js';

var mmFooter =
{
  name: 'mm-footer',
  template: '#mm-footer-template',
  mixins: [
    drawerMixin
  ],
};

export { mmFooter };
