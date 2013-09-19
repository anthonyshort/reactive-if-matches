# reactive-if-matches

[![Build Status](https://secure.travis-ci.org/anthonyshort/media-query-listener.png?branch=master)](https://travis-ci.org/anthonyshort/media-query-listener)

# Installation

    component install anthonyshort/media-query-listener

# API

```js
  var listener = require('media-query-listener');
  reactive.use(listener);
```

Adds the binding:

```html
  <div if-matches="(max-width: 960px)"></div>
```

It will toggle a `show` and `hide` class.

# License

[MIT License](http://en.wikipedia.org/wiki/MIT_License)