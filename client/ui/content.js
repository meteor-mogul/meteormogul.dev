import { drawerMixin, samecaseMixin, mmQuickStart, mmBreadCrumbs } from './imports.js';

var mmContent =
{
  name:
  'mm-content',

  template:
  '#mm-content-template',

  mixins:
  [
    drawerMixin,
    samecaseMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart,  // client/ui/widgets/quickstart
    'mm-breadcrumbs': mmBreadCrumbs // client/ui/widgets/breadcrumbs
  },

};

export { mmContent };
