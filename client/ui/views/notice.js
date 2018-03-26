// Define notice vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin, markedMixin,
  mmQuickStart,
  mmContentHeading
} from './imports.js';
import { mdText } from '../../data/notices/credits.md.js';

//MMDEBUG = true;

var mmCredits = {
    name:
    'mm-content-credits',

    template:
    '#mm-content-notice-template',

    components:
    {
      'mm-quickstart': mmQuickStart,
      'mm-content-heading': mmContentHeading
    },

    data:
    function () {
      return {
        title: 'Credits and Kudos',
        mdText
      };
    },

    mixins:
    [
      drawerMixin,
      samecaseMixin,
      markedMixin
    ]
}

MMDEBUG && console.log("mmCredits defined in credits.js:",
mmCredits);

export { mmCredits };
