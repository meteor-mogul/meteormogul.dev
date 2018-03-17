// Create a Vue component for the toolbar

// First, import symbols from packages.
import { drawerMixin } from './mixins.js';

var mmToolbar =
{
  name: 'mm-toolbar',
  template: '#mm-toolbar-template',
  mixins: [drawerMixin],
  data: () => ({
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
    })
};

export { mmToolbar };
