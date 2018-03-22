// Create a Vue component for the navigation drawer

// First, import symbols from packages.
import { Session } from 'meteor/session';
// MM
import { drawerMixin } from '../mixins.js';
// UI
import { mmQuickStart } from './quickstart.js';
import { mmListDocs } from '../data/lists/docs.js';
import { mmListDemos } from '../data/lists/demos.js';
import { mmListRepos } from '../data/lists/repos.js';

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
    'mm-quickstart': mmQuickStart
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
