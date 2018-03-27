# data folder for data objects

For a regular Meteor Mogul app this would be a MongoDB database.

But for a static SPA we don't use a database.  Instead, we just define our data objects in files in this folder.

We can write long-form content (articles and notices) using markdown.

NOTE: to access this data use objects and methods defined in the api folder.

## Articles

These are long pieces about a particular topic.  Each has a route.  For example, Orientation is an article.

## Notices

These are shorter documents that cover standard website topics.  Each has a route.  For example, Credits and Help Wanted are notices.

Pretty much the same as Articles, but without the intention of having a "previous / next" navigation between them.

## Lists

Data for menus and navdrawer.
