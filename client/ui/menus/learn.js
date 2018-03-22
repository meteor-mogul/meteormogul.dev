// Create a Vue component for the documentation menu
import { drawerMixin, samecaseMixin } from '../../mixins.js';
// List of documentation on this web site
import { mmListDocs } from '../../data/lists/docs.js';

var mmMenuLearn =
{
  name:
  'mm-menu-learn',

  template:
  '#mm-menu-learn-template',

  mixins:
  [
    drawerMixin, samecaseMixin
  ],

  data:
  function () {
    return {
      docs: mmListDocs
    };
  }
};

export { mmMenuLearn };
