// This file must end in .js so it can be imported.
// But you can set Atom grammar to syntax highlight as markdown.
export const mdText = `
Meteor Mogul is a hobby project for learning [Meteor][meteor], [VueJS][vue] and [Vuetify](https://vuetifyjs.com/en/) to create personal apps for friends and family and demo apps for potential employers and investors.

## Quick Start

If you're in a hurry, just clone my code from GitHub and dive right in:

\`\`\`
$ git clone https://github.com/meteor-mogul/mogul-helloworld.git/
 $ cd mogul-helloworld
 $ meteor npm install
 $ meteor
\`\`\`

Of course, you'll need [\`git\`][git] and [\`meteor\`][meteor] installed for the above commands to work.

## Why Meteor Mogul?

Meteor Mogul is a platform that makes it easier to write personal and demo web apps that work on modern [evergreen browsers][evergreen].  My goal is to write as many practical example apps as I can.  If this helps other people write their own apps, that would be great.  The more of us sharing ideas and code, the better!

Meteor is a full-stack JavaScript framework that provides build scripts, a packaging system that helps you leverage a huge amount of code written by other people, and a super-simple persistence layer so your apps can save data without you having to worry about configuring a database.

One of the parts of a full-stack framework is the view framework.  This allows you to code your user interface.  You can use any JavaScript view framework with Meteor, but the four major ones are

1. [Blaze](http://blazejs.org/)
2. [React](https://reactjs.org/)
3. [Angular](https://angular.io/)
4. [VueJS][vue]

VueJS is easy to learn and has momentum going for it -- the perfect match for Meteor.  VueJS enhances the Meteor developer experience with a view layer that is extremely intuitive and easy to use, while also being cleverly designed to allow you to tackle more sophisticated projects as your skill grows.

The final piece to building web apps is a component framework.  This provides user interface widgets and styles that work within the view framework.  Vuetify is a component framework for Vue that has a great set of features for people learning to develop web apps.

By the way, if you'd like to read my take on other full-stack JavaScript frameworks, view frameworks, component frameworks, and constellations of related open source software, see the [Observatory](/#/observatory.html).

## Current Status of Meteor Mogul: Alpha

This is very much a work in progress as I figure out how Meteor, VueJS and Vuetify all work.

For example, I am in the middle of writing an account management system using Vue and Vuetify:

- [Meteor Mogul Accounts](https://github.com/meteor-mogul/accounts-vuetify)

But I think I have enough experience (i.e., I've made enough bone-headed mistakes) that I'm publishing what I've learned in case it may get more people to start playing around with Meteor, VueJS and Vuetify.

## Getting Started

To start playing with Meteor Mogul, here's what I recommend:

1. A development machine running either MacOS or linux (way better than trying to develop on Windows), connected to the Internet.
2. An [evergreen web browser][evergreen]. I recommend [Google Chrome](https://www.google.com/chrome/browser/) (although I really tried hard to like [Mozilla Firefox](https://www.mozilla.org/)).
3. A programming editor. I recommend [Atom](https://atom.io/).
4. [\`meteor\`][meteor]
5. [\`git\`][git]

I also recommend that you try out [GitHub Desktop](https://desktop.github.com/). It helps me manage commits without having to remember \`git\` shell commands.

Once you have all the above, you'll need to practice a little bit to know how to use them.  Then the following instructions will make sense.

Here's how to run Meteor Mogul apps on your own local development machine:

\`\`\`
$ git clone https://github.com/meteor-mogul/<repo>.git <target-dir>
 $ cd <target-dir>
 $ meteor npm install
 $ meteor
\`\`\`

Once you've done the \`git clone\` you have a local copy of my code.  Once you've done the \`meteor npm install\` you've got a local copy of all the [npm packages][npm] you need.  Once you've done the \`meteor\` and see the app running, then you have all the code dependencies downloaded locally and built for your platform.  Then you don't have to worry if your Internet connection goes down; you have everything you need to keep playing with the code locally.

If you're interested in developing your own apps, you'll want to set up your own [GitHub](https://github.com/) account, then fork my repos.  Then you can do whatever you want with them.  All of my Meteor Mogul code is MIT licensed, which means that you can have it but you can't sue me if it doesn't work for you.  It's free, with no strings (and no promises or warranties) attached.

If the above doesn't make sense to you, try reading the GitHub and Meteor documentation and get their examples working first.  Then come back to Meteor Mogul.

A couple notes:

1.  The \`$\` notation means to run the commands in a shell.
2.  The \`<target-dir>\` convention means replace that with your own string.

For example, to get the Meteor Mogul [Hello, world!](https://github.com/meteor-mogul/mogul-helloworld) app up and running (that's good one to start with, since it's the simplest and designed to just make sure you have your development environment set up correctly), in a shell you could do:

\`\`\`
$ git clone https://github.com/meteor-mogul/mogul-helloworld.git awesome-sauce
 $ cd awesome-sauce
 $ meteor npm install
 $ meteor
\`\`\`

If you forget the \`meteor npm install\` you'll probably see error messages letting you know that you need to install the [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) node package.  The \`meteor npm install\` just has to happen once, but it's okay to run it multiple times.  That installs required \`npm\` packages in your local node_modules folder so Meteor can use them when it's building your app.  Meteor installs \`npm\`, a [package manager for JavaScript][npm], for you: \`meteor npm\` works just the same as \`npm\`.  So by installing Meteor you get convenient access to the entire \`npm\` library of JavaScript code.

By default, \`meteor\` (the final command above) will launch a web application server listening to port 3000. You can play with your sample app by pointing a browser at [http://localhost:3000](http://localhost:3000).

## Meteor Mogul Under the Hood

The main thing Meteor Mogul does is:

- provides the full version (that can compile templates) of the VueJS distribution
- as a Meteor package ([meteormogul:vue-dist](https://atmospherejs.com/meteormogul/vue-dist))
- on [Atmosphere](https://atmospherejs.com/meteormogul) (which is the public directory of packages written for Meteor),
- using the [static-html](https://atmospherejs.com/meteor/static-html) package to parse \`.html\` files, and
- removes the Blaze package.

So then when you write your \`.html\` files, vue.js deals with them instead of Blaze trying to compile them into Blaze templates.

Another thing Meteor Mogul provides is the [vue-meteor-tracker](https://github.com/meteor-vue/vue-meteor-tracker) mixin for Vue so your Vue components can see [Tracker](https://docs.meteor.com/api/tracker.html) reactivity.  This comes in handy for writing Vue components that can use Meteor [Accounts](https://docs.meteor.com/api/accounts.html), [Collections](https://docs.meteor.com/api/collections.html) and [Session](https://docs.meteor.com/api/session.html).

Meteor Mogul also provides access to a rich set of user interface widgets thanks to [Vuetify](https://github.com/meteor-mogul/mogul-vuetify-dist) and [Material Design icon fonts for Meteor](https://github.com/meteor-mogul/mogul-material-design-icons-fonts).

## Using the NPM version of vue.js in Meteor

You can also use \`meteor npm\` to get the latest version of vue.js.

In the Meteor universe of code, there are two main package managers and distribution sites:

1. Atmosphere manages and distributes packages written specifically for Meteor.
2. npm manages and distributes all sorts of JavaScript packages.  It started out as a repository for Node.js packages.

I decided to package up the VueJS distribution on Atmosphere for two reasons: 1) I find Atmosphere's package system to be very convenient, and 2) it was a good learning experience to dig into the Vue code to figure out how to provide \`Vue\` as an Atmosphere package.

Much as I like Atmosphere, the people running Meteor have warned that it may be going away and everyone should prepare to use \`npm\`.

So, if you want to play around with the \`npm\` version of VueJS, here's how to get the full build that includes template compilation:

\`\`\`
$ meteor npm install vue
\`\`\`

Then in your \`.js\` files, \`import Vue from 'vue/dist/vue.js';\`.  If you just do \`import Vue from 'vue';\` you'll get the runtime version, which doesn't allow you to compile templates.

## Other Projects Integrating Meteor and VueJS

There are [other projects](https://github.com/meteor-vue) which are aiming for a more robust integration of VueJS with Meteor.  Those other projects allow you to write both Blaze and VueJS templates.

The ambition of Meteor Mogul is more modest: it's here just to help you quickly get writing apps that use VueJS as the front-end and can use MongoDB and the other things on the back end that Meteor provides.  My design philosophy is to remove any unnecessary pieces or dependencies, which is why for Meteor Mogul apps I package up the vue.js distribution as an Atmosphere package and remove extra packages that aren't necessary.

## Meteor Mogul Roadmap

Once I have wrapped my mind around how other people are integrating VueJS with Meteor, and have some reasonable hope that I'm on the right track, I'll bump the status to beta, post an announcement somewhere, and invite random strangers to give me feedback and ideas.

I hope Meteor Mogul saves you some time if you're interested in seeing what it's like to develop apps with VueJS and Meteor together.

Now, go [get the Meteor Mogul code](https://github.com/meteor-mogul)!

Have fun!  

*\-Fred*

P.S. Why the name "Meteor Mogul"?   What I had in mind was getting over the bumps (in [downhill skiing](https://en.wikipedia.org/wiki/Mogul_skiing), "moguls" are bumps in the snow) that challenge new developers, and also reaching the goal of becoming a better Meteor developer (in the sense of a "[mogul](https://www.google.com/search?q=Dictionary#dobs=mogul)" as a powerful person).

[vue]: https://vuejs.org/
[meteor]: https://www.meteor.com/
[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/
`;
