# reactive-if-matches

[![Build Status](https://secure.travis-ci.org/anthonyshort/reactive-if-matches.png?branch=master)](https://travis-ci.org/anthonyshort/reactive-if-matches)

## Installation

    component install anthonyshort/reactive-if-matches

## API

```js
  var matches = require('reactive-if-matches');
  reactive.use(matches);
```

Adds the binding:

```html
  <div if-matches="(max-width: 960px)"></div>
```

It will toggle a `show` and `hide` class.

## License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)