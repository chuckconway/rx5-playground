'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.interval(1000).take(3).map(function (a) {
  return a * a;
}).subscribe((0, _util.createSubscriber)('map'));

function arrayMap(array, projection) {
  var returnArray = [];

  var _iteratorNormalCompletion = true;
  var _didIteratorError = false;
  var _iteratorError = undefined;

  try {
    for (var _iterator = array[Symbol.iterator](), _step; !(_iteratorNormalCompletion = (_step = _iterator.next()).done); _iteratorNormalCompletion = true) {
      var item = _step.value;

      returnArray.push(projection(item));
    }
  } catch (err) {
    _didIteratorError = true;
    _iteratorError = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion && _iterator.return) {
        _iterator.return();
      }
    } finally {
      if (_didIteratorError) {
        throw _iteratorError;
      }
    }
  }

  returnArray;
}

//arrayMap([1,2,3], a => a * a);

function arrayMergeMap(array, projection) {
  var returnArray = [];

  var _iteratorNormalCompletion2 = true;
  var _didIteratorError2 = false;
  var _iteratorError2 = undefined;

  try {
    for (var _iterator2 = array[Symbol.iterator](), _step2; !(_iteratorNormalCompletion2 = (_step2 = _iterator2.next()).done); _iteratorNormalCompletion2 = true) {
      var item = _step2.value;

      var projectedArray = projection(item);

      var _iteratorNormalCompletion3 = true;
      var _didIteratorError3 = false;
      var _iteratorError3 = undefined;

      try {
        for (var _iterator3 = projectedArray[Symbol.iterator](), _step3; !(_iteratorNormalCompletion3 = (_step3 = _iterator3.next()).done); _iteratorNormalCompletion3 = true) {
          var projected = _step3.value;

          returnArray.push(projected);
        }
      } catch (err) {
        _didIteratorError3 = true;
        _iteratorError3 = err;
      } finally {
        try {
          if (!_iteratorNormalCompletion3 && _iterator3.return) {
            _iterator3.return();
          }
        } finally {
          if (_didIteratorError3) {
            throw _iteratorError3;
          }
        }
      }
    }
  } catch (err) {
    _didIteratorError2 = true;
    _iteratorError2 = err;
  } finally {
    try {
      if (!_iteratorNormalCompletion2 && _iterator2.return) {
        _iterator2.return();
      }
    } finally {
      if (_didIteratorError2) {
        throw _iteratorError2;
      }
    }
  }

  return returnArray;
}

var album = [{ title: 'album 1', tracks: [{ id: 1, title: 'Track 1' }, { id: 1, title: 'Track 2' }] }, { title: 'album 2', tracks: [{ id: 1, title: 'Track 1' }, { id: 1, title: 'Track 2' }] }, { title: 'album 3', tracks: [{ id: 1, title: 'Track 1' }, { id: 1, title: 'Track 2' }] }];

var right = arrayMergeMap(album, function (a) {
  return a.tracks;
});
var wrong = arrayMap(album, function (a) {
  return a.tracks;
});

console.log(wrong);
console.log(right);

_Rx2.default.Observable.range(1, 3).mergeMap(function (i) {
  return _Rx2.default.Observable.timer(i * 1000).map(function () {
    return 'After ' + i + ' Seconds';
  });
}).subscribe((0, _util.createSubscriber)('mergeMap'));

_Rx2.default.Observable.fromPromise(getTracks()).mergeMap(function (tracks) {
  return _Rx2.default.Observable.from(tracks);
}).subscribe((0, _util.createSubscriber)('tracks'));

function getTracks() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve(['Track 1', 'Track 2', 'Track 3']);
    }, 1000);
  });
}

function query(value) {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('This is the Value');
    }, 1000);
  });
}

_Rx2.default.Observable.of('My query').do(function () {
  return console.log('querying');
}).mergeMap(function (a) {
  return query(a);
}).do(function () {
  return console.log('After querying');
}).subscribe((0, _util.createSubscriber)('query'));