// First, import symbols from packages.
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
// MM
import { Vue } from './imports.js';
import { drawerMixin } from './mixins.js';
// UI
import { mmNavdrawer } from './ui/navdrawer.js';
import { mmToolbar } from './ui/toolbar.js';
import { mmContent } from './ui/content.js';
import { mmFooter } from './ui/footer.js';

Meteor.startup(() => {
  // code to run on client at startup
  Session.set('visibleDrawer', false);
});

// Create the Vue instance
var mmVue =
new Vue({

    template: '#mm-app-template',

    components: {
      'mm-navdrawer': mmNavdrawer,
      'mm-toolbar': mmToolbar,
      'mm-content': mmContent,
      'mm-footer': mmFooter
    },

    // Get common data and methods
    mixins: [drawerMixin]

  // We're getting fancy with the $mount API.
  // See https://vuejs.org/v2/api/#vm-mount
}).$mount('#app');
