'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// //interval
// Rx.Observable.interval(500)
//   .take(5)
//   .subscribe(createSubscriber("interval"));
//
// //timer
// Rx.Observable.timer(1000)
//   .subscribe(createSubscriber("timer"));
//
//
// //timer with interval
// Rx.Observable.timer(1000, 500)
//     .take(3)
//     .subscribe(createSubscriber("timer"));

_Rx2.default.Observable.of('Hello, World').subscribe((0, _util.createSubscriber)('of'));

_Rx2.default.Observable.from([23, 24]).subscribe((0, _util.createSubscriber)('from'));

_Rx2.default.Observable.from([23, 24]).map(function (s) {
  return s * 5;
}).subscribe((0, _util.createSubscriber)('from'));

// Rx.Observable.throw(new Error("Hey"))
//   .subscribe(createSubscriber('Error'));

_Rx2.default.Observable.empty().subscribe((0, _util.createSubscriber)('empty'));

var sideEffect = 0;
var defer$ = _Rx2.default.Observable.defer(function () {
  sideEffect++;
  return _Rx2.default.Observable.of(sideEffect);
});

defer$.subscribe((0, _util.createSubscriber)('defer.one'));
defer$.subscribe((0, _util.createSubscriber)('defer.two'));
defer$.subscribe((0, _util.createSubscriber)('defer.three'));

_Rx2.default.Observable.never().subscribe((0, _util.createSubscriber)("never"));

_Rx2.default.Observable.range(10, 30).subscribe((0, _util.createSubscriber)("range"));