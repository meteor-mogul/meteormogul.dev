// Create a Vue instance that uses Vuetify and Vue Router

import { drawerMixin, samecaseMixin } from '../mixins.js';
import { mmQuickStart } from './quickstart.js';

var mmContent =
{
  name:
  'mm-content',

  template:
  '#mm-content-template',

  mixins:
  [
    drawerMixin,
    samecaseMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart
  },

  data:
  function () {
    return {
      breadcrumbs: 'Home / Breadcrumbs go here...',
    };
  }

};

export { mmContent };
