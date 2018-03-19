import { Session } from 'meteor/session';
import { Showdown } from 'meteor/markdown';

// Define data and methods in one place, used by multiple Vue components
var drawerMixin =
{

  data:
  function () {
    return {
      visibleDrawer: false
    };
  },

  meteor:
  {
    visibleDrawer:
    {
      update() {
        return Session.get('visibleDrawer');
      }
    }
  },

  methods:
  {
    toggleDrawer:
    function () {
      Session.set('visibleDrawer', !Session.get('visibleDrawer'));
    },

    showDrawer:
    function () {
      Session.set('visibleDrawer', true);
    },

    hideDrawer:
    function () {
      Session.set('visibleDrawer', false);
    }
  }

};

// By default button text is all UPPERCASE in Vuetify, but I want to
// control the case of my button text.
// This mixin allows me to do :style="samecase" so the buttons will
// not have any text transforms applied to them.
var samecaseMixin =
{

  data:
  function () {
    return {
      samecase: "text-transform: none !important;"
    };
  }

};

// Parse markdown
const converter = new Showdown.converter();
var markedMixin =
{
  methods:
  {
    marked:
    function (text) {
      return converter.makeHTML(text);
    }
  }
};

export { drawerMixin, samecaseMixin, markedMixin };
