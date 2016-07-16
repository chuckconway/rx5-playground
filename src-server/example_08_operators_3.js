import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';

Rx.Observable.interval(1000)
  .take(3)
  .map(a => a * a)
  .subscribe(createSubscriber('map'));


  function arrayMap(array, projection){
    const returnArray = [];

    for (let item of array) {
      returnArray.push(projection(item));
    }

    returnArray;
  }

  //arrayMap([1,2,3], a => a * a);

  function arrayMergeMap(array, projection){
    const returnArray = [];

    for (let item of array) {
      const projectedArray = projection(item);

      for (let projected of projectedArray) {
         returnArray.push(projected);
      }
    }

    return returnArray;
  }

const album = [
    {title:'album 1', tracks:[{id:1, title:'Track 1'}, {id:1, title:'Track 2'}]},
    {title:'album 2', tracks:[{id:1, title:'Track 1'}, {id:1, title:'Track 2'}]},
    {title:'album 3', tracks:[{id:1, title:'Track 1'}, {id:1, title:'Track 2'}]}
];

const right = arrayMergeMap(album, a => a.tracks);
const wrong = arrayMap(album, a => a.tracks);

console.log(wrong);
console.log(right);

Rx.Observable.range(1, 3)
  .mergeMap(i => Rx.Observable.timer(i * 1000).map(() => `After ${i} Seconds`))
  .subscribe(createSubscriber('mergeMap'));

Rx.Observable.fromPromise(getTracks())
  .mergeMap(tracks => Rx.Observable.from(tracks))
  .subscribe(createSubscriber('tracks'));

function getTracks() {
    return new Promise((resolve, reject) => {
      setTimeout(() => {
          resolve(['Track 1', 'Track 2', 'Track 3']);
      }, 1000);
    });
}


function query(value){
  return new Promise((resolve, reject) => {
    setTimeout(() => {
        resolve('This is the Value');
    }, 1000);
  });
}

Rx.Observable.of('My query')
  .do(() => console.log('querying'))
  .mergeMap(a => query(a))
  .do(() => console.log('After querying'))
  .subscribe(createSubscriber('query'));
