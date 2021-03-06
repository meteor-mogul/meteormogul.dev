import { MMDEBUG, Session, Showdown } from './imports.js';

//MMDEBUG = true;

// Define data and methods in one place, used by multiple Vue components
var drawerMixin =
{

  data:
  function () {
    return {
      visibleDrawer: false
    };
  },

  // Tap into Meteor reactivity by using Session to update visibleDrawer
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
      MMDEBUG && console.log("Text:", text);
      MMDEBUG && console.log("Showdown converter:", converter);
      MMDEBUG && console.log("Showdown converter.makeHtml:", converter.makeHtml);
      return converter.makeHtml(text);
    }
  }
};

export { drawerMixin, samecaseMixin, markedMixin };
