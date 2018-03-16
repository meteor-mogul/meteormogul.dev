// Create a Vue component for the navigation drawer

// First, import symbols from packages.
import { drawerMixin } from './mixins.js';

var mmNavdrawer =
{
  name: 'mm-navdrawer',
  template: '#mm-navdrawer-template',
  mixins: [drawerMixin],
  data: () => ({
      documentation: [
        { title: 'Orientation', href: '/happy' },
        { title: 'Survival Guide', href: '/sad' },
        { title: 'Toolkit', href: '/happy' },
        { title: 'Formulary', href: '/' }
      ],
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

export { mmNavdrawer };
