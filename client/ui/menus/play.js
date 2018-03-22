// Create a Vue component for the demonstrations menu
import { drawerMixin, samecaseMixin } from '../../mixins.js';
// List of demonstrations on heroku
import { mmListDemos } from '../../data/lists/demos.js';

var mmMenuPlay =
{
  name:
  'mm-menu-play',

  template:
  '#mm-menu-play-template',

  mixins:
  [
    drawerMixin, samecaseMixin
  ],

  data:
  function () {
    return {
      demos: mmListDemos
    };
  }
};

export { mmMenuPlay };
