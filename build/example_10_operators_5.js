'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.range(1, 110)
//   .bufferCount(25)
//   .subscribe(createSubscriber('items'));

// Rx.Observable.interval(500)
//   .bufferTime(2000)
//   .subscribe(createSubscriber('bufferTime'));

// Rx.Observable.interval(500)
//   .buffer(Rx.Observable.interval(2000))
//   .subscribe(createSubscriber('interval'));

// const stopSubject$ = new Rx.Subject();
// Rx.Observable.interval(500)
//   .buffer(stopSubject$)
//   .subscribe(createSubscriber('buffer'));
//
//   setTimeout(() => {
//       stopSubject$.next();
//   }, 3000);

// Rx.Observable.range(1, 10)
//   .toArray()
//   .subscribe(createSubscriber('range'));
//
//   const simple$ = new Rx.Observable(observer => {
//     observer.next(1);
//     observer.next(2);
//     observer.next(3);
//     observer.next(4);
//     observer.complete()
//   });
//
// simple$.first()
//     .subscribe(createSubscriber('first'));
//
// simple$.last()
//       .subscribe(createSubscriber('last'));
//
// simple$.single()
//       .subscribe(createSubscriber('single'));
//
// simple$.take(3)
//       .subscribe(createSubscriber('take'));
//
// simple$.skip(2)
//       .subscribe(createSubscriber('skip'));

// Rx.Observable.interval(500)
//   .skipWhile(i => i < 4)
//   .takeWhile(i => i < 10)
//   .subscribe(createSubscriber('skipWhile'));

_Rx2.default.Observable.interval(500).skipUntil(_Rx2.default.Observable.timer(2000)).takeUntil(_Rx2.default.Observable.timer(4000)).subscribe((0, _util.createSubscriber)('skipUntil'));