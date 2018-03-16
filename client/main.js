// Create a Vue instance that uses Vuetify and Vue Router

// First, import symbols from packages.
import { Meteor } from 'meteor/meteor';
import { Session } from 'meteor/session';
import { Vue } from './imports.js';
import { drawerMixin } from './mixins.js';
import { mmNavdrawer } from './navdrawer.js';
import { mmToolbar } from './toolbar.js';

Meteor.startup(() => {
  // code to run on client at startup
  Session.set('visibleDrawer', false);
});

// Create the Vue instance
mmVue = new Vue({
    template: '#app-template',
    components: {
      'mm-toolbar': mmToolbar,
      'mm-navdrawer': mmNavdrawer
    },
    data: function() {
      return {
        message: 'Getting started...'
      };
    },
    // Get common data and methods
    mixins: [drawerMixin]
  // We're getting fancy with the $mount API.
  // See https://vuejs.org/v2/api/#vm-mount
}).$mount('#app');
