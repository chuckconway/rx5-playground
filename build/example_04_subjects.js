'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Subject();

simple$.subscribe((0, _util.createSubscriber)('simple$'));

simple$.next('hello');
simple$.next('world');
simple$.complete();

var interval$ = _Rx2.default.Observable.interval(1000).take(5);
var intervalSubject$ = new _Rx2.default.Subject();

interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe((0, _util.createSubscriber)('sub1'));
intervalSubject$.subscribe((0, _util.createSubscriber)('sub2'));
intervalSubject$.subscribe((0, _util.createSubscriber)('sub3'));

setTimeout(function () {
    intervalSubject$.subscribe((0, _util.createSubscriber)('look at me!'));
}, 3000);

// const currentUser$ = new Rx.Subject();
// const isloggedIn$  = currentUser$.map(u => u.isloggedIn);
//
// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));
//
// currentUser$.next({isLoggedIn:false});
//
// setTimeout(() => {
//     currentUser$.next({isLoggedIn:true, name:'chuck'});
// }, 2000);

var currentUser$ = new _Rx2.default.BehaviorSubject({ isloggedIn: false });
var isloggedIn$ = currentUser$.map(function (u) {
    return u.isloggedIn;
});

isLoggedIn$.subscribe((0, _util.createSubscriber)("isLoggedIn"));

currentUser$.next({ isLoggedIn: false });

setTimeout(function () {
    currentUser$.next({ isLoggedIn: true, name: 'chuck' });
}, 2000);

var replay$ = new _Rx2.default.ReplaySubject(3);
replay$.next(1);
replay$.next(2);

replay$.subscribe((0, _util.createSubscriber)("one"));

replay$.next(3);
replay$.next(4);
replay$.next(5);

replay$.subscribe((0, _util.createSubscriber)("two"));

var apiCall$ = new _Rx2.default.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe((0, _util.createSubscriber)("one"));

apiCall$.next(2);

setTimeout(function () {
    apiCall$.subscribe((0, _util.createSubscriber)("one"));
}, 2000);