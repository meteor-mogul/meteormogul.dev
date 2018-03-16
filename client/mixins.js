import { Session } from 'meteor/session';
import { mmRouter } from './routes.js';

// Define data and methods in one place, used by multiple Vue components
var drawerMixin = {

  data: function() {
    return {
      visibleDrawer: false
    };
  },
  meteor: {
    visibleDrawer: {
      update () {
        return Session.get('visibleDrawer');
      }
    }
  },
  methods: {
    toggleDrawer: function () {
      Session.set('visibleDrawer', !Session.get('visibleDrawer'));
    },
    showDrawer: function () {
      Session.set('visibleDrawer', true);
    },
    hideDrawer: function () {
      Session.set('visibleDrawer', false);
    }
  },
  router: mmRouter

}

export { drawerMixin };
