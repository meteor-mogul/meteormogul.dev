# Overview of meteormogul.dev

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
