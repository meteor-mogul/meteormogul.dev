// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from '../mixins.js';
import { mmMenuLearn } from './menus/learn.js';
import { mmMenuPlay } from './menus/play.js';
import { mmMenuCreate } from './menus/create.js';

var mmToolbar =
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',
  mixins: [drawerMixin],
  components: {
    'mm-menu-learn': mmMenuLearn,
    'mm-menu-play': mmMenuPlay,
    'mm-menu-create': mmMenuCreate
  },
  data: () => ({
      demos: [
        { title: 'Hello, world!', href: 'https://meteor-mogul-hello-world.herokuapp.com/'},
        { title: 'Meteor Mogul Vue Intro', href: 'https://meteor-mogul-vue-intro.herokuapp.com/'}
      ],
      repos: [
        { title: 'Hello, world!', href: 'https://github.com/meteor-mogul/mogul-helloworld'},
        { title: 'Meteor Mogul Vue Intro', href: 'https://github.com/meteor-mogul/vue-intro'}
      ]
    })
};

export { mmToolbar };
