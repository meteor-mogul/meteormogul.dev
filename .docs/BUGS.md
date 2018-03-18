# Bugs in meteormogul.dev and Where to Find Them

For all the gory details about bugs and other nasties, see the [GitHub Issue tracker](https://github.com/meteor-mogul/meteormogul.dev/issues).

Filter by `label:bug`.

## Particularly Pestiferous, Pestilential and Pernicious Pests

Last update: March 17, 2018

### Development Mode versus Production

I don't understand Meteor's build system well enough to figure out how to convince it to produce a static single-page application, so I've hacked around it with `wget`.

I just run a development version of my meteor app, copy the files that are necessary to make it work, and delete files that are not.

We'll see if I can get away with this approach, or whether I need to do a deep dive into the internals of Meteor's build mechanisms to produce a static SPA bundle that will actually work.
