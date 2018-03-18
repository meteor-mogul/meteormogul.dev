# Bugs in meteormogul.dev and Where to Find Them

For all the gory details about bugs and other nasties, see the [GitHub Issue tracker](https://github.com/meteor-mogul/meteormogul.dev/issues).

Filter by `label:bug` for all bugs.

## Particularly Pestiferous, Pestilential and Pernicious Pests

Last update: March 18, 2018

Filter by `label:P5` for particularly pestiferous, pestilential and pernicious pests.

### Development Mode versus Production

I don't understand Meteor's build system well enough to figure out how to convince it to produce a static single-page application, so I've hacked around it with `wget`.

I just run a development version of my meteor app, copy the files that are necessary to make it work, and delete files that are not.

We'll see if I can get away with this approach, or whether I need to do a deep dive into the internals of Meteor's build mechanisms to produce a static SPA bundle that will actually work.

### Circular Import Dependencies

You need to be careful with import statements in `.js` files.  If you get into a circular import situation, the import will silently fail and no error is thrown.

One way to check is to `console.log` the variable immediately after you import it.  If Meteor reports it as `undefined` then look for circular imports.

For example, the following mixin was a bad idea because I actually want to import components in `routes.js`.  If the mixin imports from `routes.js` and the component imports from `mixins.js` and then `routes.js` imports the component, we're in a circular dependency and things will fail silently.

```
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

  // Do NOT do this!  It will lead to circular imports and symbols will
  // not be available when you expect them.
  router:
  mmRouter

}
```
