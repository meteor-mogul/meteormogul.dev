// Define content home vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin, markedMixin,
  mmQuickStart,
  mmContentHeading
} from './imports.js';
import { mdText } from '../../../data/notices/help.md.js';

//MMDEBUG = true;

var mmHelp = {
    name:
    'mm-content-help',

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
        title: 'Help Wanted',
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

MMDEBUG && console.log("mmHelp defined in help.js:",
mmHelp);

export { mmHelp };
