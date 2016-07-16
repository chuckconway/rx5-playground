'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.interval(1000)
// .merge(Rx.Observable.interval(1000))
// .take(10)
// .subscribe(createSubscriber('merge1'));

// Rx.Observable.merge(
//   Rx.Observable.interval(1000).map(s => `${s} seconds`),
//   Rx.Observable.interval(500).map(s=> `${s} seconds`)
// ).take(10)
// .subscribe(createSubscriber('merge2'));

// Rx.Observable.interval(500)
//   .take(3)
//   .concat(Rx.Observable.range(10, 3))
//   .subscribe(createSubscriber('concat'));

_Rx2.default.Observable.concat(_Rx2.default.Observable.interval(1000).map(function (s) {
  return s + ' seconds';
}).take(3), _Rx2.default.Observable.interval(500).map(function (s) {
  return s + ' half seconds';
}).take(3)).subscribe((0, _util.createSubscriber)('concat1'));