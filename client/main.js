// First, import symbols from packages.
import { MMDEBUG, Meteor, Session, Vue } from './imports.js';
import { drawerMixin, samecaseMixin, mmRouter } from './imports-mm.js';
import { mmNavdrawer, mmToolbar, mmContent, mmFooter } from './imports-ui.js';

// MMDEBUG = true;
MMDEBUG && console.log('mmToolbar: ', mmToolbar);

Meteor.startup(() => {
  // code to run on client at startup

  // Hide navdrawer
  Session.set('visibleDrawer', false);

  // Create the Vue instance
  var mmVue =
  new Vue({

      // Template id="mm-app-template"
      // See main.html
      // Could be defined in any .html file, but Meteor Mogul convention is
      // to pair template .html and component .js files, e.g.
      //  template definition in main.html
      //  component definition in main.js
      template:
      '#mm-app-template',

      // The following components are defined in client/ui
      // Each one also has a .html and .js pair of files for
      // template and component definitions respectively
      components:
      {
        'mm-navdrawer': mmNavdrawer, // client/ui/navdrawer
        'mm-toolbar': mmToolbar,     // client/ui/toolbar
        'mm-content': mmContent,     // client/ui/content
        'mm-footer': mmFooter        // client/ui/footer
      },

      // Get common data and methods
      mixins:
      [
        drawerMixin, samecaseMixin
      ],

      // Inject router
      router:
      mmRouter

    // Get fancy with the $mount API.
    // See https://vuejs.org/v2/api/#vm-mount
  }).$mount('#app');

});
