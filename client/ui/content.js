// Create a Vue instance that uses Vuetify and Vue Router

import { drawerMixin } from '../mixins.js';
import { mmQuickStart } from './quickstart.js';

var mmContent =
{
  name:
  'mm-content',

  template:
  '#mm-content-template',

  mixins:
  [
    drawerMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart
  },

  data:
  function () {
    return {
      breadcrumbs: 'Home / Breadcrumbs go here...',
      samecase: "text-transform: none !important;"
    };
  }

};

export { mmContent };
