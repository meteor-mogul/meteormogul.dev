// This file must end in .js so it can be imported.
// But you can set Atom grammar to syntax highlight as markdown.
export const mdText = `
I'm writing this survival guide to share what I wish somebody had told me when I started playing around with Meteor.

# Meteor Mogul Core Concepts

 Since Meteor Mogul is a hobby project, which means I often have to step away for months at a time, here are my design guidelines:

1. Comment code clearly and profusely.
2. Write prolific documentation.
3. Keep it simple; remove any unnecessary pieces or dependencies.
4. Write old-fashioned JavaScript; avoid syntactic sugar that confuses me.

## Other Projects Integrating Meteor and VueJS

[Other projects like vue+meteor](https://github.com/meteor-vue/vue-meteor) aim for a robust "first-class" integration of VueJS with Meteor.

The ambition of Meteor Mogul is more modest: it's here just to help you quickly get writing apps that use VueJS for the front-end and things that Meteor provides like MongoDB on the back end.

## Why Meteor Mogul?

Meteor Mogul is a platform that makes it easier to write personal and demo web apps that work on modern [evergreen browsers][evergreen].  My goal is to write as many practical example apps as I can.  If this helps other people write their own apps, that would be great.  The more of us sharing ideas and code, the better!

Meteor is a full-stack JavaScript framework that provides build scripts, a packaging system that helps you leverage a huge amount of code written by other people, and a super-simple persistence layer so your apps can save data without you having to worry about configuring a database.

One of the parts of a full-stack framework is the view framework for your user interface.  You can use any JavaScript view framework with Meteor, but the four major ones are

1. [Blaze](http://blazejs.org/)
2. [React](https://reactjs.org/)
3. [Angular](https://angular.io/)
4. [VueJS][vue]

VueJS is easy to learn and has momentum going for it -- the perfect match for Meteor.  VueJS enhances the Meteor developer experience with a view layer that is extremely intuitive and easy to use, while also being cleverly designed to allow you to tackle more sophisticated projects as your skill grows.

The final piece to building web apps is a component framework.  This provides user interface widgets and styles that work within the view framework.  Vuetify is a component framework for Vue that has a great set of features for people learning to develop web apps.

By the way, if you'd like to learn about other full-stack JavaScript frameworks, view frameworks, component frameworks, and constellations of related open source software, see the [Observatory](/#/observatory.html).

## Current Status of Meteor Mogul: Alpha

This is very much a work in progress as I figure out how Meteor, VueJS and Vuetify all work.

For example, I am in the middle of writing an account management system using Vue and Vuetify:

- [Meteor Mogul Accounts](https://github.com/meteor-mogul/accounts-vuetify)

But I think I have enough experience (i.e., I've made enough bone-headed mistakes) that I'm publishing what I've learned in case it may get more people to start playing around with Meteor, VueJS and Vuetify.

## Meteor Mogul Under the Hood

The main thing Meteor Mogul does is:

- provides the full version (that can compile templates) of the VueJS distribution
- as a Meteor package ([meteormogul:vue-dist](https://atmospherejs.com/meteormogul/vue-dist))
- on [Atmosphere](https://atmospherejs.com/meteormogul) (which is the public directory of packages written for Meteor),
- using the [static-html](https://atmospherejs.com/meteor/static-html) package to parse \`.html\` files, and
- removes the Blaze package.

So then when you write your \`.html\` files, vue.js deals with them instead of Blaze trying to compile them into Blaze templates.

Another thing Meteor Mogul provide access to is the [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker) mixin for Vue so your Vue components can see [Tracker](https://docs.meteor.com/api/tracker.html) reactivity.  This comes in handy for writing Vue components that can use Meteor [Accounts](https://docs.meteor.com/api/accounts.html), [Collections](https://docs.meteor.com/api/collections.html) and [Session](https://docs.meteor.com/api/session.html).

Meteor Mogul also provides access to a rich set of user interface widgets thanks to [Vuetify](https://github.com/meteor-mogul/mogul-vuetify-dist) and [Material Design icon fonts for Meteor](https://github.com/meteor-mogul/mogul-material-design-icons-fonts).

## Using the NPM version of vue.js in Meteor

You can also use \`meteor npm\` to get the latest version of vue.js.

In the Meteor universe of code, there are two main package managers and distribution sites:

1. Atmosphere: packages written specifically for Meteor.
2. npm: all sorts of JavaScript packages (the name reflects its origins as a repository for Node.js packages).

I decided to package up the VueJS distribution on Atmosphere for two reasons:

1. I find Atmosphere's package system to be very convenient, and
2. It was a good learning experience to dig into the Vue code to figure out how to provide \`Vue\` as an Atmosphere package.

Much as I like Atmosphere, the people running Meteor have warned that it may be going away and everyone should start using \`npm\` now.

So, if you want to follow that advice play around with the \`npm\` version of VueJS, here's how to get the full build that includes template compilation:

\`\`\`
$ meteor npm install vue
\`\`\`

Then in your \`.js\` files, \`import Vue from 'vue/dist/vue.js';\`.  If you just do \`import Vue from 'vue';\` you'll get the runtime version, which doesn't allow you to compile templates.

As for me, I'm going to keep packaging up VueJS for Atmosphere until they shut it down.

# Meteor and Other Concepts

## Single Page App

The first thing to understand is what Meteor is trying to do for you.  Basically, Meteor's goal in life is to produce a bundle of JavaScript code that runs a single page app.

Meteor believes that its code will be running in two kinds of places:

1.  On a server inside a Node.js instance.
2.  On a browser inside a JavaScript engine.

For the browser code to work, Meteor will package up a single \`.html\` file, along with a bunch of JavaScript, CSS and other assets.  The server code will listen for connections and deliver this bundle to browser clients that request it.

Once the code is running on the browser, then it can open up a channel back to the server and send and receive messages using Meteor's Distributed Data Protocol (DDP).

This is a different view of the world than a traditional web server, which sticks to HTTP.  The HTTP model is for a browser to request a document and the server to send it.  Then a browser might request (GET) another document or send some information back as a POST that the server will mull over.

## Routing

There are two ways to think about routing.  One is client side and the other is server side.

Client-side routing is just setting the state of the client.  In response to a change in state, the client makes some change to its user interface.  By giving a particular state a route, you make it easy to put the client in that state and you can navigate through a set of states.

Server-side routing is what a traditional web server does in response to a request from a client.  But instead of serving a static file that is stored on the server's filesystem, a Meteor app running in a Node.js instance on the server will decide what it wants to send to the client in response to each route requested.

With server-side routing, it can appear to the browser client that the Meteor app is just like any other server, sending different pages in response to requests.  But the Meteor app can also keep open a connection and send and receive responses via DDP.

Vue has two kinds of client-side routing: "hash mode" and "history mode".  Hash mode sticks a # in the URL, which means the browser knows not to do a page reload and simply moves to a different state on the page it already has.

History mode uses history.pushState to avoid a page reload, but it's sort of a hybrid into server-side routing since the server needs to be prepared to handle URLs for different pages.

[vue]: https://vuejs.org/
[meteor]: https://www.meteor.com/
[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/
`;
