import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';


function arrayReduce(array, accumulator, startValue){
  let value = startValue;

  for (let item of array) {
    value = accumulator(value, item)
  }

  return value;
}

//Rx.Observable.

const values = [748, 214, 2342, 234, 234, 234, 234];
const sum = arrayReduce(values, (acc, i) => acc + i, 0);

console.log(sum);


const max = arrayReduce(
    values,
    function(acc, value){
      if(value > acc){
        return value;
      }

      return acc;
    },
    -1
)

console.log(max);

const max1 = arrayReduce(values, Math.max, -1);
console.log(max1);


Rx.Observable.range(1, 10)
  .reduce((acc, value) => acc + value)
  .subscribe(createSubscriber('reduce'));


  Rx.Observable.range(1, 10)
    .map(i => i * i)
    .scan(([last, _], current) => [current, last], [])
    .subscribe(createSubscriber('scan'));
