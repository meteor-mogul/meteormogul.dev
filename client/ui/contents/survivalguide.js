// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';

var mmContentSurvivalGuide =
{
  name:
  'mm-content-survivalguide',

  template:
  '#mm-content-survivalguide-template',

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

MMDEBUG && console.log("mmContentSurvivalGuide defined in survivalguide.js:",
mmContentSurvivalGuide);

export { mmContentSurvivalGuide };
