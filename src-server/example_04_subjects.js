import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';
import fs from 'fs';

const simple$ = new Rx.Subject();

simple$.subscribe(createSubscriber('simple$'));

simple$.next('hello');
simple$.next('world');
simple$.complete();


const interval$ = Rx.Observable.interval(1000).take(5);
const intervalSubject$ = new Rx.Subject();

interval$.subscribe(intervalSubject$)

intervalSubject$.subscribe(createSubscriber('sub1'));
intervalSubject$.subscribe(createSubscriber('sub2'));
intervalSubject$.subscribe(createSubscriber('sub3'));


setTimeout(()=> {
    intervalSubject$.subscribe(createSubscriber('look at me!'));
}, 3000)
