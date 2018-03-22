// First, import symbols from packages.
import { MMDEBUG, Meteor, Session, Vue } from './imports.js';
import { drawerMixin, samecaseMixin, mmRouter } from './imports-mm.js';
import { mmNavdrawer, mmToolbar, mmContent, mmFooter } from './imports-ui.js';

Meteor.startup(() => {
  // code to run on client at startup
  Session.set('visibleDrawer', false);
});

// Create the Vue instance
var mmVue =
new Vue({

    template:
    '#mm-app-template',

    components:
    {
      'mm-navdrawer': mmNavdrawer,
      'mm-toolbar': mmToolbar,
      'mm-content': mmContent,
      'mm-footer': mmFooter
    },

    // Get common data and methods
    mixins:
    [
      drawerMixin, samecaseMixin
    ],

    // Inject router
    router:
    mmRouter

  // We're getting fancy with the $mount API.
  // See https://vuejs.org/v2/api/#vm-mount
}).$mount('#app');
