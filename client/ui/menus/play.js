// Create a Vue component for the documentation menu

// First, import symbols from packages.
import { drawerMixin } from '../../mixins.js';
import { mmListDemos } from '../../api/lists/demos.js';

var mmMenuPlay =
{
  name: 'mm-menu-play',
  template: '#mm-menu-play-template',
  mixins: [drawerMixin],
  data: () => ({
      demos: mmListDemos
    })
};

export { mmMenuPlay };
