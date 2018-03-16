import { Session } from 'meteor/session';

var mmMixin = {

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
  }

}

export { mmMixin };
