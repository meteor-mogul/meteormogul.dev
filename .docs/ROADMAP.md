# Roadmap for meteormogul.dev

For specific near-term to-do items, see the [GitHub Issue tracker](https://github.com/meteor-mogul/meteormogul.dev/issues).

Filter by `label:enhancement`.

## Future Plans

Last update: March 26, 2018

I really should figure out how to go from dynamic to static, i.e., build a fully-dynamic web site with a MongoDB back end, so that I can add new content and edit existing content, and then make it static with mogul-ssg once I'm ready to publish.

### Basic structure and function of app

1. All access to data structures through api.
1. Three types of views: 1) home page, 2) articles, 3) notices
1. Pass article and notice components as arrays.
1. Programmatically construct paths to types of components.
1. Use path to component for router-link to.  E.g. footer should know that it contains links to three notices and should know how to look up path of each of these notices.
1. Fix data/lists/docs.js and api/lists.js, then get ui/views/home.js working with api access to data.  Access to docs object and list should be through api not directly to data.

### ux

1.  Hide footer on small viewports.
1.  Home page view that works for small viewports.

### Registering new Components

Once I have new structure and app function working, this is how it should go to add new content:

1. Create new data object under data.
2. Register new data object in api.
3. App should pick up on new data object and build a route to it.
4. Figure out views.

Need to figure out how to change <HEAD> of html document.  Once we get routing working, we'll be able to fake separate HTML files and we'll want <HEAD> keywords, etc. to change based on route.

### Figure out Meteor build system

Current plan is to publish site to Netlify using development bundle.  Figure out how Meteor build system works.  Then I should be able to use Meteor to build a static bundle that can simply be pushed to GitHub for publication to Netlify.
