// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin, markedMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';
// markdown text for Survival Guide
import { mdText } from './survivalguide.md.js';

var mmContentSurvivalGuide =
{
  name:
  'mm-content-survivalguide',

  template:
  '#mm-content-survivalguide-template',

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

MMDEBUG && console.log("mmContentSurvivalGuide defined in survivalguide.js:",
mmContentSurvivalGuide);

export { mmContentSurvivalGuide };
