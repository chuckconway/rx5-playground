import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';
import fs from 'fs';

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

const apiCall$ = new Rx.AsyncSubject();
apiCall$.next(1);

apiCall$.subscribe(createSubscriber("one"));

apiCall$.next(2);

setTimeout(() => {
    apiCall$.subscribe(createSubscriber("one"));
}, 2000);
