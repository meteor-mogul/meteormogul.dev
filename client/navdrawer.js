// Create a Vue component for the navigation drawer

// First, import symbols from packages.
import { drawerMixin } from './mixins.js';
import { Session } from 'meteor/session';
import { mmQuickStart } from './quickstart.js';

var mmNavdrawer =
{
  name: 'mm-navdrawer',
  template: '#mm-navdrawer-template',
  mixins: [drawerMixin],
  components: {
    'mm-quickstart': mmQuickStart
  },
  data: () => ({
      drawer: false,
      documentation: [
        { title: 'Orientation', href: '/orientation' },
        { title: 'Survival Guide', href: '/survivalguide' },
        { title: 'Toolkit', href: '/toolkit' },
        { title: 'Formulary', href: '/formulary' }
      ],
      demos: [
        { title: 'Hello, world!', href: 'https://meteor-mogul-hello-world.herokuapp.com/'},
        { title: 'Meteor Mogul Vue Intro', href: 'https://meteor-mogul-vue-intro.herokuapp.com/'}
      ],
      repos: [
        { title: 'Hello, world!', href: 'https://github.com/meteor-mogul/mogul-helloworld'},
        { title: 'Meteor Mogul Vue Intro', href: 'https://github.com/meteor-mogul/vue-intro'}
      ]
    }),
    methods: {
      // Capture a true or false event on the navigation drawer itself,
      // set Session var so that other components know the state.
      recordDrawer: function (drawerValue) {
        // console.log("Input received.  drawerValue: " + drawerValue );
        Session.set('visibleDrawer', drawerValue);
      }
    }
};

export { mmNavdrawer };
