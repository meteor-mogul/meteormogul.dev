// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';

var mmContentToolKit =
{
  name:
  'mm-content-toolkit',

  template:
  '#mm-content-toolkit-template',

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

MMDEBUG && console.log("mmContentToolKit defined in toolkit.js:",
mmContentToolKit);

export { mmContentToolKit };
