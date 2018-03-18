// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';

var mmContentOrientation =
{
  name:
  'mm-content-orientation',

  template:
  '#mm-content-orientation-template',

  mixins:
  [
    drawerMixin,
    samecaseMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart
  },

};

MMDEBUG && console.log("mmContentOrientation defined in orientation.js:",
mmContentOrientation);

export { mmContentOrientation };
