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

  // Do NOT do this!  It will lead to circular imports and symbols will
  // not be available when you expect them.
  router:
  mmRouter

}
```

### camelCase vs. kebab-case

The Vue.js docs explain the [camelCase vs. kebab-case issue](https://vuejs.org/v2/guide/components.html#camelCase-vs-kebab-case).

Basically, use camelCase in your `.js` and `{{ interpolations }}` and kebab-case in naming your `.html` attributes for child component props.

This will NOT work:

```html
<script type="text/x-template" id="mm-content-heading-template">
  <h1>{{ content-title }}</h1>
</script>
```

Vue will try to subtract the `title` prop from the `content` prop for the interpolation.

But this will:

```html
<script type="text/x-template" id="mm-content-heading-template">
  <h1>{{ contentTitle }}</h1>
</script>
```

If the above is in a child component, you should not call it like this because HTML attributes are case-insensitive:

```html
<child-component contentTitle="Content Title Text"></child-component>
```

But you can call it like so:

```html
<child-component content-title="Content Title Text"></child-component>
```

Vue.js automatically translates between camelCase and kebab-case for you.
