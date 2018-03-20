// This file must end in .js so it can be imported.
// But you can set Atom grammar to syntax highlight as markdown.
export const mdText = `
I'm writing this survival guide to share what I wish somebody had told me when I started playing around with Meteor.

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
