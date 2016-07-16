'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

_Rx2.default.Observable.interval(1000).merge(_Rx2.default.Observable.interval(1000)).take(10).subscribe((0, _util.createSubscriber)('merge1'));

_Rx2.default.Observable.merge(_Rx2.default.Observable.interval(1000).map(function (s) {
  return s + ' seconds';
}), _Rx2.default.Observable.interval(500).map(function (s) {
  return s + ' seconds';
})).take(10).subscribe((0, _util.createSubscriber)('merge2'));

_Rx2.default.Observable.interval(500).take(3).concat(_Rx2.default.Observable.range(10, 3)).subscribe((0, _util.createSubscriber)('concat'));

_Rx2.default.Observable.concat(_Rx2.default.Observable.interval(1000).map(function (s) {
  return s + ' seconds';
}).take(3), _Rx2.default.Observable.interval(500).map(function (s) {
  return s + ' half seconds';
}).take(3)).subscribe((0, _util.createSubscriber)('concat1'));