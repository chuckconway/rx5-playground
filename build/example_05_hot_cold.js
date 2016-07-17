'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var interval$ = _Rx2.default.Observable.interval(1000).take(10).publish();

interval$.connect();

setTimeout(function () {
    interval$.connect();
}, 5000);

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)("one"));
}, 1200);

setTimeout(function () {
    interval$.subscribe((0, _util.createSubscriber)('two'));
}, 3200);

var socket = { on: function on() {} };

var $chatMessages = new _Rx2.default.Observable(function (observer) {
    console.log("subscribe");

    socket.on('chat:message', function (message) {
        return observer.next(message);
    });
}).publish();

$chatMessages.connect();

$chatMessages.subscribe((0, _util.createSubscriber)('one'));
$chatMessages.subscribe((0, _util.createSubscriber)('two'));

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
//
//
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

var simple$ = new _Rx2.default.Observable(function (observer) {
    observer.next('one');
    observer.next('two');
    observer.next('three');

    return function () {
        return console.log('dispose');
    };
});

//const published$ = simple$.publish().refCount(); the same as Ref Count
var published$ = simple$.share();

var sub1 = published$.subscribe((0, _util.createSubscriber)('one'));
var sub2 = published$.subscribe((0, _util.createSubscriber)('two'));

sub1.unsubscribe();
sub2.unsubscribe();