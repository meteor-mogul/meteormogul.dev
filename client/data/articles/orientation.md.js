// This file must end in .js so it can be imported.
// But you can set Atom grammar to syntax highlight as markdown.
export const mdText = `
Meteor Mogul is a hobby project for learning [Meteor][meteor], [VueJS][vue] and [Vuetify](https://vuetifyjs.com/en/) to create personal apps for friends and family and demo apps for potential employers and investors.

## Getting Started

### Quick Start

\`\`\`
$ git clone https://github.com/meteor-mogul/mogul-helloworld.git/
 $ cd mogul-helloworld
 $ meteor npm install
 $ meteor
\`\`\`

### Slow Start

To start playing with Meteor Mogul, you'll need:

1. A computer connected to the Internet.
2. An [evergreen web browser][evergreen].
3. A programming editor.
4. [\`meteor\`][meteor]
5. [\`git\`][git]

For my recommendations on your development environment, see [Toolkit](/#/toolkit.html).

Once you have your tools, practice a little bit to know how to use them.  Then the following instructions will make sense.

To run Meteor Mogul apps on your own local development machine:

\`\`\`
$ git clone https://github.com/meteor-mogul/<repo>.git <target-dir>
 $ cd <target-dir>
 $ meteor npm install
 $ meteor
\`\`\`

Here's what each command does:

- \`git clone\` checks out and downloads a local copy of my code.
- \`cd <target-dir>\` changes directory so you can use the Meteor app.
- \`meteor npm install\` downloads a local copy of all the [npm packages][npm] the app requires.
- \`meteor\` builds and runs the app, which will start listening for HTTP requests on localhost port 3000 (http://localhost:3000/).

Once you've done all the above, then you have all the code dependencies downloaded locally and built for your platform.  After that, you don't have to worry if your Internet connection goes down; you have everything you need to keep playing with the code locally.

#### Notes

1.  The \`$\` notation means to run the commands in a shell.
2.  The \`<>\` convention means replace that tag with your own string.

For example, to get the Meteor Mogul [Hello, world!](https://github.com/meteor-mogul/mogul-helloworld) app up and running (that's good one to start with, since it's the simplest and designed to just make sure you have your development environment set up correctly), in a shell you could do:

\`\`\`
$ git clone https://github.com/meteor-mogul/mogul-helloworld.git awesome-sauce
 $ cd awesome-sauce
 $ meteor npm install
 $ meteor
\`\`\`

If you forget the \`meteor npm install\` you'll probably see error messages letting you know that you need to install the [@babel/runtime](https://www.npmjs.com/package/@babel/runtime) node package.  The \`meteor npm install\` just has to happen once, but it's okay to run it multiple times.

Meteor includes its own version of \`npm\`, a [package manager for JavaScript][npm]: \`meteor npm\` works just the same as \`npm\`.  So by installing Meteor you get convenient access to the entire \`npm\` library of JavaScript code.

If you can't clone my code and at least get it to run, try reading the GitHub and Meteor documentation and get their examples working first.  Then come back to Meteor Mogul.

## About Meteor Mogul

The first thing you should know is that Meteor Mogul builds on more robust projects that are integrating VueJS with Meteor.  In particular, take a look at [vue+meteor](https://github.com/meteor-vue/vue-meteor).

Meteor Mogul is one of my many hobbies; I often have to step away from coding for months at a time.  To help my future self pick up where I left off, I'm commenting the heck out of my code and writing prolific documentation to solidify what I'm learning.

### Documentation

- Orientation: Getting Started
- [Survival Guide](/#/survivalguide.html): Concepts and Strategies
- [Toolkit](/#/toolkit.html): Development Environment
- [Formulary](/#/formulary.html): How to Do Stuff
- [Bestiary](/#/bestiary.html): Bugs and Where to Find Them

### Demos

I deploy demonstrations to [heroku](https://www.heroku.com/), and keep a list of them in the [Menagerie](/#/menagerie.html).

For example,

- [Hello, world!](https://meteor-mogul-hello-world.herokuapp.com/)
- [Meteor Mogul Vue Intro](https://meteor-mogul-vue-intro.herokuapp.com/)

### Code Repos

Check out GitHub for a [list of Meteor Mogul code repos](https://github.com/meteor-mogul).

### Ecosystem

- [Bazaar](/#/bazaar.html): Shameless Commerce Division
- [Forum](/#/forum.html): Where to Ask Questions and Share Answers
- [Observatory](/#/observatory.html): Related Projects and Resources

### Meteor Mogul Roadmap

Once I have wrapped my mind around how other people are integrating VueJS with Meteor, and have some reasonable hope that I'm on the right track, I'll bump the status to beta, post an announcement somewhere, and invite random strangers to give me feedback and ideas.

### Forking Meteor Mogul

If you're interested in developing your own apps, you'll want to set up your own [GitHub](https://github.com/) account, then fork my repos.  Then you can do whatever you want with them.  All of my Meteor Mogul code is MIT licensed, which means that you can have it but you can't sue me if it doesn't work for you.  It's free, with no strings (and no promises or warranties) attached.

I hope Meteor Mogul saves you some time if you're interested in seeing what it's like to develop apps with VueJS and Meteor together.

Now, [go get some Meteor Mogul code](https://github.com/meteor-mogul)!

Have fun!

*\-Fred*

P.S. Why the name "Meteor Mogul"?   What I had in mind was getting over the bumps (in [downhill skiing](https://en.wikipedia.org/wiki/Mogul_skiing), "moguls" are bumps in the snow) that challenge new developers, and also reaching the goal of becoming a better Meteor developer (in the sense of a "[mogul](https://www.google.com/search?q=Dictionary#dobs=mogul)" as a powerful person).

[vue]: https://vuejs.org/
[meteor]: https://www.meteor.com/
[evergreen]: https://www.techopedia.com/definition/31094/evergreen-browser
[npm]: https://www.npmjs.com/
[git]: https://git-scm.com/
`;
