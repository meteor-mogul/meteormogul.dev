// Create a Vue component for the navigation drawer

// First, import symbols from packages.
import {
  Session, drawerMixin, mmQuickStart,
  mmListDocs, mmListDemos, mmListRepos
 } from './imports.js';

var mmNavdrawer =
{
  name:
  'mm-navdrawer',

  template:
  '#mm-navdrawer-template',

  mixins:
  [
    drawerMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart // client/ui/widgets/quickstart
  },

  data:
  function () {
    return {
      docs: mmListDocs,
      demos: mmListDemos,
      repos: mmListRepos
    };
  },

  methods:
  {
    // Capture a true or false event on the navigation drawer itself,
    // set Session var so that other components know the state.
    recordDrawer:
    function (drawerValue) {
      // console.log("Input received.  drawerValue: " + drawerValue );
      Session.set('visibleDrawer', drawerValue);
    }
  }
};

export { mmNavdrawer };
