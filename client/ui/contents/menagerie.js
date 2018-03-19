// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmContentHeading } from './heading.js';

var mmContentMenagerie =
{
  name:
  'mm-content-menagerie',

  template:
  '#mm-content-menagerie-template',

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

MMDEBUG && console.log("mmContentMenagerie defined in menagerie.js:",
mmContentMenagerie);

export { mmContentMenagerie };
