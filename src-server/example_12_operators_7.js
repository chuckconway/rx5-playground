import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';


// function arrayZip(array1, array2, selector){
//   const count = Math.min(array1.length, array2.length);
//   const results = [];
//
//   for (let i = 0; i < count; i++) {
//     const  combined = selector(array1[i], array2[i]);
//     results.push(combined);
//   }
//
//   return results;
// }
//
// const array1 = [32, 2, 52, 43, 54];
// const array2 = [2, 3, 4, 3,2, 34, 2, 4,34,];
// const results = arrayZip(array1, array2, (left, right) => left * right);
//
// console.log(results);

// Rx.Observable.range(1, 10)
//   .zip(Rx.Observable.interval(500), (left, right) => `item: ${left}, at ${right * 500}`)
//   .subscribe(createSubscriber('zip'));


// Rx.Observable.interval(1000)
//   .withLatestFrom(Rx.Observable.interval(500))
//   .subscribe(createSubscriber('latest'));


  // Rx.Observable.interval(1000)
  //   .combineLatest(Rx.Observable.interval(500))
  //   .subscribe(createSubscriber('latest'));

const currentUser$ = new Rx.BehaviorSubject({isLoggedIn:false});

Rx.Observable.interval(1000)
  .combineLatest(currentUser$)
  .filter(([i, user]) => user.isLoggedIn)
  .subscribe(createSubscriber('withLatestFrom'));

  setTimeout(() => {
    currentUser$.next({isLoggedIn:true});
  });

  
