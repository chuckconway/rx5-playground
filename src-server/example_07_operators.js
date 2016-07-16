import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

Rx.Observable.interval(1000)
.merge(Rx.Observable.interval(1000))
.take(10)
.subscribe(createSubscriber('merge1'));


Rx.Observable.merge(
  Rx.Observable.interval(1000).map(s => `${s} seconds`),
  Rx.Observable.interval(500).map(s=> `${s} seconds`)
).take(10)
.subscribe(createSubscriber('merge2'));


Rx.Observable.interval(500)
  .take(3)
  .concat(Rx.Observable.range(10, 3))
  .subscribe(createSubscriber('concat'));


Rx.Observable.concat(
  Rx.Observable.interval(1000).map(s => `${s} seconds`).take(3),
  Rx.Observable.interval(500).map(s=> `${s} half seconds`).take(3)
)
.subscribe(createSubscriber('concat1'));
