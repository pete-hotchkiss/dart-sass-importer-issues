### Dart Sass issue
Based on issue [#1260 - importer functions not executing for @import, @use etc](https://github.com/sass/dart-sass/issues/1260) this repos is an example of how `sass` behaves differently to `node-sass` in an unexpected way.

Clone the repos and then in each of the `node-sass` and `sass` folders run (which ever of `npm` or `yarn` is your poison)

```
npm i
yarn install
```

In each of these folders run the `example.js` script - eg .

```
yarn example
```

**Observe** how for `node-sass` the importer function is run for each of the 2 `.scss` files.

```
url entry stdin
url a /Users/working-path/node-sass/entry.scss
url b /Users/working-path/node-sass/a.scss
```

_but_ in the `sass` implementation the importer function only runs once
```
url entry stdin
```
