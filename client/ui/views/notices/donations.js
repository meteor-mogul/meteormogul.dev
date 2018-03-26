// Define content home vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin, markedMixin,
  mmQuickStart,
  mmContentHeading
} from './imports.js';
import { mdText } from '../../../data/notices/donations.md.js';

//MMDEBUG = true;

var mmDonations = {
    name:
    'mm-content-donations',

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
        title: 'Donations',
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

MMDEBUG && console.log("mmDonations defined in donations.js:",
mmDonations);

export { mmDonations };
