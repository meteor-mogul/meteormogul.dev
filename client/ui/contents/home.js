// Define content home vue component.
import { MMDEBUG } from '../../imports.js';
import { drawerMixin, samecaseMixin } from '../../mixins.js';
import { mmQuickStart } from '../quickstart.js';

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
            {
              title: "Orientation",
              tooltip: "Getting Started",
              href: "/orientation"
            },
            {
              title: "Survival Guide",
              tooltip: "Concepts and Strategies",
              href: "/survivalguide"
            },
            {
              title: "Toolkit",
              tooltip: "Your Development Environment",
              href: "/toolkit"
            }
          ]
        },
        {
          name: 'second',
          row:
          [
            {
              title: "Formulary",
              tooltip: "How To Do Stuff",
              href: "/formulary"
            },
            {
              title: "Bestiary",
              tooltip: "Bugs and Where to Find Them",
              href: "/bestiary"
            },
            {
              title: "Menagerie",
              tooltip: "Demo Sites",
              href: "/menagerie"
            }
          ]
        },
        {
          name: 'third',
          row:
          [
            {
              title: "Bazaar",
              tooltip: "Shameless Commerce Division",
              href: "/bazaar"
            },
            {
              title: "Forum",
              tooltip: "Where to Ask Questions and Share Answers",
              href: "/forum"
            },
            {
              title: "Observatory",
              tooltip: "Related Projects and Resources",
              href: "/observatory"
            }
          ]
        }
      ]
    };
  }

};

MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);

export { mmContentHome };
