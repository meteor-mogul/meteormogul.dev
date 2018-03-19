// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';

var mmContentObservatory =
{
  name:
  'mm-content-observatory',

  template:
  '#mm-content-observatory-template',

  mixins:
  [
    drawerMixin,
    samecaseMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart,
    'mm-content-heading': mmContentHeading
  },

};

MMDEBUG && console.log("mmContentObservatory defined in observatory.js:",
mmContentObservatory);

export { mmContentObservatory };
