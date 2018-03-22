// Define content home vue component.
import { MMDEBUG } from '../../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../../mixins.js';
import { mmQuickStart } from '../../quickstart.js';
import { mmContentHeading } from '../heading.js';
import { mdText } from '../../../data/notices/credits.md.js';

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
