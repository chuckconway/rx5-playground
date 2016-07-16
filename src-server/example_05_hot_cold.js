import Rx from 'rxjs/Rx';
import {createSubscriber} from './lib/util';
import fs from 'fs';

const interval$ = Rx.Observable.interval(1000)
                    .take(10)
                    .publish();

//interval$.connect();

// setTimeout(() => {
//   interval$.connect();
// }, 5000);
//
// setTimeout(()=>{
//   interval$.subscribe(createSubscriber("one"));
// }, 1200);
//
// setTimeout(()=> {
//     interval$.subscribe(createSubscriber('two'));
// }, 3200);


// const socket = {on: () => {}};
//
// const $chatMessages = new Rx.Observable(observer => {
//     console.log("subscribe");
//
//     socket.on('chat:message', message => observer.next(message));
// }).publish();
//
// $chatMessages.connect();
//
// $chatMessages.subscribe(createSubscriber('one'));
// $chatMessages.subscribe(createSubscriber('two'));

// const simple$ = new Rx.Observable(observer => {
//     observer.next('one');
//     observer.next('two');
//
//     observer.complete();
// });
//
// const published$ = simple$.publishLast();
//
// published$.subscribe(createSubscriber('one'));
// published$.connect();
// published$.subscribe(createSubscriber('two'));


// const simple$ = new Rx.Observable(observer => {
//     observer.next('one');
//     observer.next('two');
//
//     observer.complete();
// });
//
// const published$ = simple$.publishReplay(2);
//
// const sub1 = published$.subscribe(createSubscriber('one'));
// const connection = published$.connect();
// const sub2 = published$.subscribe(createSubscriber('two'));
//
// connection.unsubscribe();

const simple$ = new Rx.Observable(observer => {
    observer.next('one');
    observer.next('two');
    observer.next('three');

    return () => console.log('dispose');
});

//const published$ = simple$.publish().refCount(); the same as Ref Count
const published$ = simple$.share();

const sub1 = published$.subscribe(createSubscriber('one'));
const sub2 = published$.subscribe(createSubscriber('two'));

sub1.unsubscribe();
sub2.unsubscribe();
