import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';


// Rx.Observable.concat(
//   Rx.Observable.of(42),
//   Rx.Observable.throw(new Error('blad')),
//   Rx.Observable.of(10)
// )
// .subscribe(createSubscriber('concat'))

Rx.Observable.fromPromise(getApi())
.catch(error => Rx.Observable.of(error))
  .subscribe(createSubscriber('getApi'));

function getApi(){
  console.log('Getting Api');

  return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve('hello');
      }, 1000);
  });
}
