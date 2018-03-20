// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';
// markdown text for orientation
import { mdText } from './orientation.md.js';

//MMDEBUG = true;

var mmContentOrientation =
{
  name:
  'mm-content-orientation',

  template:
  '#mm-content-orientation-template',

  data:
  function () {
    return {
      mdText
    };
  },

  mixins:
  [
    drawerMixin,
    samecaseMixin,
    markedMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },

};

MMDEBUG && console.log("mmContentOrientation defined in orientation.js:",
mmContentOrientation);

export { mmContentOrientation };
