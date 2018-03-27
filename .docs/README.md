# Documentation

BUGS = Bugs in meteormogul.dev and Where to Find Them  
CONTRIBUTING = How to contribute code or money  
MISSION = Purpose of this repo  
OVERVIEW = Design decisions and implementation  
REFERENCES = Links to resources  
ROADMAP = Short and long-term to do list  

## How to generate static site from this repo

Use only client-side code so no connection to the server needs to be maintained.

Publication steps:

1.  Build web site as Meteor Mogul application, saving updates in this repo.
2.  Use the `mogul-ssg.sh` script to create a static bundle of the app.
3.  Push static SPA bundle to GitHub to publish on Netlify.

## How to add content to this repo

The website uses Vuetify's app structure:

- navdrawer = side navigation
- toolbar = top navigation
- content = main content area, where router views are rendered
- footer = bottom navigation and notice links

There are three main kinds of content:

1. Home page
2. Articles
3. Notices

If you want to add another type of content, create a new view for it under client/ui/views.

There are also lists for menus.

Data for the different kinds of content is in client/data.

### Adding a new article

To insert article into article lister (previous/next list of articles) and give it a route:

1. Create a file for the article markdown in client/data/articles.
2. Import markdown in client/data/articles.js.
3. Add article to articlesData in client/data/articles.js.
4. Add article to articlesList in client/data/articles.js.

To add it to a menu (e.g., documentation menu):

1. Add article to docsData in client/data/lists/docs.js.
1. Add article to docsList in client/data/lists/docs.js.

To add it to the home page:

1. Edit rows data in client/ui/views/home.js
