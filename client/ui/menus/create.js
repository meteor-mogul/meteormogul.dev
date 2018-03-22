// Create a Vue component for the repositories menu
import { drawerMixin, samecaseMixin } from '../../mixins.js';
// List of repositories on GitHub
import { mmListRepos } from '../../data/lists/repos.js';

var mmMenuCreate =
{
  name:
  'mm-menu-create',

  template:
  '#mm-menu-create-template',

  mixins:
  [
    drawerMixin, samecaseMixin
  ],

  data:
  function () {
    return {
      repos: mmListRepos
    };
  }
};

export { mmMenuCreate };
