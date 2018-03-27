// Define Vue component for a Meteor Mogul menu
//  title: title of menu for button text, etc.
//  subhead: display information about menu on dropdown list, etc.
//  items: items in menu
//  target: _blank for external links (<a href="">),
//          router for internal links (<routerlink to="">),
//          null for no link (<span>)
import { drawerMixin, samecaseMixin } from './imports.js';

// Two ways you can do menus.
// Menu Pattern 1: Define one component and pass props to each instance.
var mmMenu =
{
  name:
  'mm-menu',

  template:
  '#mm-menu-template',

  mixins:
  [
    drawerMixin, samecaseMixin
  ],

  props:
  [
      'title',
      'subhead',
      'items',
      'target'
  ]
};

// Menu Pattern 2: Use a constructor to create different components.
function mmMenuMaker(menu, title, subhead, items, target) {
  this.name =
  'mm-menu-' + menu;

  this.template =
  '#mm-menu-template';

  this.mixins =
  [
    drawerMixin, samecaseMixin
  ];

  this.data =
  function () {
    return {
      title,
      subhead,
      items,
      target
    };
  };
}

export { mmMenu, mmMenuMaker };
