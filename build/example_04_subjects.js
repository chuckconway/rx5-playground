'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var simple$ = new _Rx2.default.Subject();

simple$.subscribe((0, _util.createSubscriber)('simple$'));

simple$.next('hello');
simple$.next('world');
simple$.complete();

var interval$ = _Rx2.default.Observable.interval(1000).take(5);
var intervalSubject$ = new _Rx2.default.Subject();

interval$.subscribe(intervalSubject$);

intervalSubject$.subscribe((0, _util.createSubscriber)('sub1'));
intervalSubject$.subscribe((0, _util.createSubscriber)('sub2'));
intervalSubject$.subscribe((0, _util.createSubscriber)('sub3'));

setTimeout(function () {
    intervalSubject$.subscribe((0, _util.createSubscriber)('look at me!'));
}, 3000);