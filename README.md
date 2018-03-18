# meteormogul.dev
Development version of Meteor Mogul web site.

## What

This is where I build the Meteor Mogul web site content.  It is a regular Meteor Mogul single-page application with client-side routing.

## Why

This is a proof of concept, showing that you can use Meteor Mogul to build static web sites that are published to hosts like Netlify.

## How

Use only client-side code so no connection to the server needs to be maintained.

Publication steps:

1.  Build web site as Meteor Mogul application, saving updates in this repo.
2.  Use the `mogul-ssg.sh` script to create a static bundle of the app.
3.  Push static SPA bundle to GitHub to publish on Netlify.

## More

See .docs folder.
