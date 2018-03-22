// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../../mixins.js';
import { mmQuickStart } from '../../quickstart.js';
import { mmContentHeading } from '../heading.js';
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
