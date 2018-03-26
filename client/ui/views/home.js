// Define content home vue component.
import {
  MMDEBUG,
  drawerMixin, samecaseMixin,
  mmQuickStart
} from './imports.js';
import { mmObjDocs, mmListDocs } from '../../api/lists.js';

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
            mmObjDocs['orientation'],
            mmObjDocs['survivalguide'],
            mmObjDocs['toolkit']
          ]
        },
        {
          name: 'second',
          row:
          [
            mmObjDocs['formulary'],
            mmObjDocs['bestiary'],
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
            mmObjDocs['bazaar'],
            mmObjDocs['forum'],
            mmObjDocs['observatory']
          ]
        }
      ]
    };
  }

};

MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);

export { mmContentHome };
