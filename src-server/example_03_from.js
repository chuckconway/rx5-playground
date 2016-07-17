import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';
import fs from 'fs';

//old
// fs.readdir('./src-server', (err, items) = > {
//
//   if(err){
//     console.error(err);
//   } else {
//     console.log(items);
//   }
// });


//From, mergeMap, Map
const readdir$ = Rx.Observable.bindNodeCallback(fs.readdir);

readdir$('./src-server')
  .mergeMap(files => Rx.Observable.from(files))
  .map(file => `Manipulated ${file}`)
  .subscribe(createSubscriber('readdir'));

//Promise
function getItem(){
  return new Promise((resolve, reject) =>{
     setTimeout(()=> {
       resolve("Hello");
     }, 1000);
  });
}

Rx.Observable.fromPromise(getItem())
  .subscribe(createSubscriber('promise'));
