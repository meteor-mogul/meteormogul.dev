// Create a Vue component for the documentation menu

// First, import symbols from packages.
import { drawerMixin } from '../../mixins.js';
import { mmListDocs } from '../../api/lists/docs.js';

var mmMenuLearn =
{
  name: 'mm-menu-learn',
  template: '#mm-menu-learn-template',
  mixins: [drawerMixin],
  data: () => ({
      docs: mmListDocs
    })
};

export { mmMenuLearn };
