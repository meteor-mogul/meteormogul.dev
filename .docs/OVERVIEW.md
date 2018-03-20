# Overview of meteormogul.dev

Last update: March 18, 2018

This is an app for publishing a web site that will eventually be available at www.meteormogul.com.

As a proof of concept, the website will be published as a static single-page app (static SPA) on Netlify.

A static SPA is a bundle that consists of

- one HTML file (the "single page")
- JavaScript files
- CSS files
- other assets (fonts, images, etc.)

Once the bundle has been delivered to the client, no further action by the server is necessary (that's why this approach is called "static").

Once running in the browser client, the app can provide routing and all sorts of other goodies, but doesn't need to maintain a connection to the server.

This app uses
- Meteor for the full-stack JS framework and build system,
- VueJS for the view layer,
- Vuetify for the front-end components,
- Material Design Icon Fonts for icons, and
- vue meteor tracker to allow Vue components to see Meteor reactivity.
- Meteor's markdown package so I can write content in Markdown

## Application Structure

I'm not exactly following the [Meteor Guide fo Application Structure](https://guide.meteor.com/structure.html).

Here's what's in each folder:

```
.docs/                    # documentation
.meteor/                  # meteor files (packages, versions, etc.)
client/                   # code that runs on client only
  ui/                     # vue components
    contents/             # contents (orientation, etc.)
    menus/                # menus (learn, play, create)
  api/                    # domain logic and data structures
    lists/                # lists (docs, demos, repos)
public/                   # other assets besides .html, .css, and .js files
  img/                    # image files
server/                   # code that runs on server only
```

## Debugging

First, get [Vue.js devtools](https://github.com/vuejs/vue-devtools).

I find Chrome to be the most dependable browser to use for development; there is a Vue.js devtools extension for Chrome.  Once you add it, you'll see it at the very right of the developer tools tabs (Elements, Console, Sources, ..., Vue).

In addition to all the help you get from this and all the regular JavaScript debugging built into Chrome, I still find it is helpful to add console logging from time to time.

So I set `MMDEBUG` in `client/debug.js`.  The `imports.js` file imports this symbol from `debug.js` and re-exports it, so all other code can just import the symbol from `imports.js`.  When `true`, `MMDEBUG` turns on the console logging debug statements I've sprinkled through the code in places that have caused me heartache.  E.g.,

```js
MMDEBUG && console.log("mmContentHome defined in home.js:", mmContentHome);
```

## Vue Components

Each Vue instance and component is defined by one `.html` file that contains its template, inside `<script type="text/x-template" id="name">`, and one `.js` file that contains its code.

Some Vue components also have a `.md.js` file that contains markdown text.

The main Vue app is defined in `client/main.js`.

Rather than registering components globablly with `Vue.component()`, I use local registration by giving each instance and component a `components` attribute.

For example, here is the definition of the main Vue instance, locally registering components for navigation drawer, toolbar, content and footer:

```js
// Create the Vue instance
var mmVue = new Vue({

    template:
    '#mm-app-template',

    components:
    {
      'mm-navdrawer': mmNavdrawer,
      'mm-toolbar': mmToolbar,
      'mm-content': mmContent,
      'mm-footer': mmFooter
    },

    // Get common data and methods
    mixins:
    [
      drawerMixin
    ]

  // We're getting fancy with the $mount API.
  // See https://vuejs.org/v2/api/#vm-mount
}).$mount('#app');
```

### Mixins

Common code that multiple vue components need is defined as [mixins](https://vuejs.org/v2/guide/mixins.html).

For example, to allow multiple components to show or hide the navigation drawer, here is the drawerMixin from `mixins.js`:

```js
// Define data and methods in one place, used by multiple Vue components
var drawerMixin =
{

  data:
  function() {
    return {
      visibleDrawer: false
    };
  },

  meteor:
  {
    visibleDrawer: {
      update () {
        return Session.get('visibleDrawer');
      }
    }
  },

  methods:
  {
    toggleDrawer: function () {
      Session.set('visibleDrawer', !Session.get('visibleDrawer'));
    },
    showDrawer: function () {
      Session.set('visibleDrawer', true);
    },
    hideDrawer: function () {
      Session.set('visibleDrawer', false);
    }
  },

}
```

NOTE: While it is tempting to use that mixin to also injects the router, so every component that gets the drawerMixin can also do routing, this leads to circular imports and a P5 Bug.  See "Circular Import Dependencies" in BUGS.

### Markdown

It gets tedious to write in HTML.  So I'm using the Meteor `markdown` package, which exports `Showdown`, a JavaScript version of Markdown, so my app can parse markdown strings.

I've added a `markedMixin` which provides a `marked` method.  Pass a string with markdown text to this method and it will return raw HTML.  Use `v-html` in a Vue component to display the markdown text.  E.g.,

```html
<v-card-text v-html="marked(mdText)"></v-card-text>
```

```js
import { markedMixin } from '../../mixins.js';
import { Showdown } from 'meteor/markdown';
// markdown text for orientation
import { mdText } from './orientation.md.js';

const converter = new Showdown.converter();

var mmContentOrientation =
{
  name:
  'mm-content-orientation',

  template:
  '#mm-content-orientation-template',

  data:
  function () {
    return {
      mdText
    };
  },

  mixins:
  [
    markedMixin
  ],

};
```

I split out the markdown text into a separate file with a `.md.js` extension.  The `.js` allows this file to be imported.  You can tell Atom to syntax highlight these files as `GitHub Markdown`.

## Routing

Routing is done with [hash mode](https://router.vuejs.org/en/essentials/history-mode.html) because I can't figure out how to get `wget` to follow routes when the app is in `history mode`.
