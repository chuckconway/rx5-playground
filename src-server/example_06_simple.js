import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

Rx.Observable.range(1, 10)
  .do(a=> console.log(`From do ${a}`)) //This does not effect the observable sequence
  .map(a => a * a)
  .subscribe(createSubscriber('simple'));

  Rx.Observable.range(1, 10)
    .finally(() => console.log(`From finally`)) //This executes after the range is completed.
    .map(a => a * 2)
    .subscribe(createSubscriber('finally'));

    Rx.Observable.range(1, 10)
      .filter(a => a < 5) //just like 'where' in linq
      .subscribe(createSubscriber('finally'));

  Rx.Observable.interval(1000)
    .startWith(-1)
    .subscribe(createSubscriber('interval'));
