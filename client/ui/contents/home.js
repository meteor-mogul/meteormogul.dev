// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';
import { mmObjDocs, mmListDocs } from '../../api/lists/docs.js';

var mmContentHome =
{
  name:
  'mm-content-home',

  template:
  '#mm-content-home-template',

  path:
  '/index.html',

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
