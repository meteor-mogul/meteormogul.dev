# api folder for access to data

Define api to access data and provide helpful methods for things like navigation.

By having an api layer that controls data access, you can swap out data source more easily if you decide to use a database, for example.

## Nouns = Objects

Nouns are api objects that provide access to data structures.

## Verbs = Methods

Verbs are helper functions that provide methods for using nouns.

### Lister

Provides a previous / next link to navigate through the list of articles.
