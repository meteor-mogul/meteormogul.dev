// Create a Vue component for the documentation menu

// First, import symbols from packages.
import { drawerMixin } from '../../mixins.js';
import { mmListRepos } from '../../api/lists/repos.js';

var mmMenuCreate =
{
  name: 'mm-menu-create',
  template: '#mm-menu-create-template',
  mixins: [drawerMixin],
  data: () => ({
      repos: mmListRepos
    })
};

export { mmMenuCreate };
