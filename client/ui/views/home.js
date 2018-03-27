// Define content home vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin,
  mmQuickStart,
  apiDocs
} from './imports.js';

var mmContentHome =
{
  name:
  'mm-content-home',

  template:
  '#mm-content-home-template',

  mixins:
  [
    drawerMixin,
    samecaseMixin
  ],

  components:
  {
    'mm-quickstart': mmQuickStart
  },

  data:
  function () {
    return {
      rows:
      [
        {
          name: 'first',
          row:
          [
            apiDocs['orientation'],
            apiDocs['survivalguide'],
            apiDocs['toolkit']
          ]
        },
        {
          name: 'second',
          row:
          [
            apiDocs['formulary'],
            apiDocs['bestiary'],
            {
              title: "Menagerie",
              tooltip: "Demo Sites",
              href: "/menagerie.html"
            }
          ]
        },
        {
          name: 'third',
          row:
          [
            apiDocs['bazaar'],
            apiDocs['forum'],
            apiDocs['observatory']
          ]
        }
      ]
    };
  }

};

MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);

export { mmContentHome };
