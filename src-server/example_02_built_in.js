import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';


// //interval
Rx.Observable.interval(500)
  .take(5)
  .subscribe(createSubscriber("interval"));
//
// //timer
Rx.Observable.timer(1000)
  .subscribe(createSubscriber("timer"));
//
//
// //timer with interval
Rx.Observable.timer(1000, 500)
    .take(3)
    .subscribe(createSubscriber("timer"));

Rx.Observable.of('Hello, World')
  .subscribe(createSubscriber('of'));

Rx.Observable.from([23, 24])
  .subscribe(createSubscriber('from'));


  Rx.Observable.from([23, 24])
    .map(s=>s * 5)
    .subscribe(createSubscriber('from'));

// Rx.Observable.throw(new Error("Hey"))
//   .subscribe(createSubscriber('Error'));

Rx.Observable.empty()
  .subscribe(createSubscriber('empty'));

let sideEffect = 0;
const defer$ = Rx.Observable.defer(()=> {
  sideEffect++;
  return Rx.Observable.of(sideEffect);
});

defer$.subscribe(createSubscriber('defer.one'));
defer$.subscribe(createSubscriber('defer.two'));
defer$.subscribe(createSubscriber('defer.three'));

Rx.Observable.never()
  .subscribe(createSubscriber("never"));

Rx.Observable.range(10, 30)
  .subscribe(createSubscriber("range"));
