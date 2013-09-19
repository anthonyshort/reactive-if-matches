var classes = require('classes');

/**
 * Takes a query and a callback, whenever the query
 * is matched or unmatched it will fire the listener
 * function passing through the MediaQueryList
 * @param  {String} query
 * @param  {Function} listener fn(mq)
 * @return {MediaQueryList}
 */

function match(query, listener) {
  var mq = window.matchMedia('('+query+')');
  mq.addListener(listener);
  listener(mq);
  return mq;
}

/**
 * Export a reactive hook
 * @param  {Reactive} reactive
 * @return {void}
 */

exports.reactive = function(reactive) {
  reactive.bind('if-matches', function(el, query) {
    match(query, function(mq){
      if(mq.matches) {
        classes(el).add('show').remove('hide');
      }
      else {
        classes(el).add('hide').remove('show');
      }
    });
  });
};

/**
 * @type {Function}
 */

module.exports = match;
