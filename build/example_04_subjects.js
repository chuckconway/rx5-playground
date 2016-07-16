'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// const simple$ = new Rx.Subject();
//
// simple$.subscribe(createSubscriber('simple$'));
//
// simple$.next('hello');
// simple$.next('world');
// simple$.complete();
//
//
// const interval$ = Rx.Observable.interval(1000).take(5);
// const intervalSubject$ = new Rx.Subject();
//
// interval$.subscribe(intervalSubject$)
//
// intervalSubject$.subscribe(createSubscriber('sub1'));
// intervalSubject$.subscribe(createSubscriber('sub2'));
// intervalSubject$.subscribe(createSubscriber('sub3'));
//
//
// setTimeout(()=> {
//     intervalSubject$.subscribe(createSubscriber('look at me!'));
// }, 3000)

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

// const currentUser$ = new Rx.BehaviorSubject({isloggedIn:false});
// const isloggedIn$  = currentUser$.map(u => u.isloggedIn);
//
// isLoggedIn$.subscribe(createSubscriber("isLoggedIn"));
//
// currentUser$.next({isLoggedIn:false});
//
// setTimeout(() => {
//     currentUser$.next({isLoggedIn:true, name:'chuck'});
// }, 2000);

// const replay$ = new Rx.ReplaySubject(3);
// replay$.next(1);
// replay$.next(2);
//
// replay$.subscribe(createSubscriber("one"));
//
// replay$.next(3);
// replay$.next(4);
// replay$.next(5);
//
// replay$.subscribe(createSubscriber("two"));

var apiCall$ = new _Rx2.default.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe((0, _util.createSubscriber)("one"));

apiCall$.next(2);

setTimeout(function () {
    apiCall$.subscribe((0, _util.createSubscriber)("one"));
}, 2000);