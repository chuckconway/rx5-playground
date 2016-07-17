'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

var _fs = require('fs');

var _fs2 = _interopRequireDefault(_fs);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

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
var readdir$ = _Rx2.default.Observable.bindNodeCallback(_fs2.default.readdir);

readdir$('./src-server').mergeMap(function (files) {
  return _Rx2.default.Observable.from(files);
}).map(function (file) {
  return 'Manipulated ' + file;
}).subscribe((0, _util.createSubscriber)('readdir'));

//Promise
function getItem() {
  return new Promise(function (resolve, reject) {
    setTimeout(function () {
      resolve("Hello");
    }, 1000);
  });
}

_Rx2.default.Observable.fromPromise(getItem()).subscribe((0, _util.createSubscriber)('promise'));