// Create a Vue component for the QuickStart expansion panel

// First, import symbols from packages.
import { drawerMixin } from './imports.js';

var mmBreadCrumbs =
{
  name: 'mm-breadcrumbs',
  template: '#mm-breadcrumbs-template',
  mixins:
  [
    drawerMixin
  ]
};

export { mmBreadCrumbs };
