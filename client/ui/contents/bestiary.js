// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';

var mmContentBestiary =
{
  name:
  'mm-content-bestiary',

  template:
  '#mm-content-bestiary-template',

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

MMDEBUG && console.log("mmContentBestiary defined in bestiary.js:",
mmContentBestiary);

export { mmContentBestiary };
