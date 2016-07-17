'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

// Rx.Observable.concat(
//   Rx.Observable.of(42),
//   Rx.Observable.throw(new Error('blad')),
//   Rx.Observable.of(10)
// )
// .subscribe(createSubscriber('concat'))

_Rx2.default.Observable.fromPromise(getApi()).catch(function (error) {
  return _Rx2.default.Observable.of(error);
}).subscribe((0, _util.createSubscriber)('getApi'));

function getApi() {
  console.log('Getting Api');

  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve('hello');
    }, 1000);
  });
}