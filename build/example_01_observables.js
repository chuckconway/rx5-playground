'use strict';

var _Rx = require('rxjs/Rx');

var _Rx2 = _interopRequireDefault(_Rx);

var _util = require('./lib/util');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

//Part 1
var simple$ = new _Rx2.default.Observable(function (observer) {
  console.log("Generating observable");

  setTimeout(function () {

    observer.next("An Item!");

    setTimeout(function () {
      observer.next("Another Item!");
      observer.complete();
    }, 1000);
  }, 1000);
});
//
simple$.subscribe(function (item) {
  return console.log('one.next ' + item);
}, //Next
function (error) {
  return console.log('one.error ' + error);
}, //error
function () {
  return console.log('one.complete');
} // complete
);
//
//
setTimeout(function () {
  simple$.subscribe({
    next: function next(item) {
      return console.log('two.next ' + item);
    },
    error: function error(_error) {
      return console.log('two.error ' + _error);
    },
    complete: function complete() {
      return console.log('two.complete');
    }
  });
}, 3000);
//
// //Generate an error.
var error$ = new _Rx2.default.Observable(function (observer) {
  observer.error(new Error("WHOA!"));
});

//Part 2
// const interval$ = new Rx.Observable(observer => {
//
// });

function createInterval$(time) {
  return new _Rx2.default.Observable(function (observer) {
    var index = 0;
    var interval = setInterval(function () {
      console.log('Generating index');
      observer.next(index++);
    }, time);

    return function () {
      clearInterval(interval);
    };
  });
}

// function createSubscriber(tag){
//   return {
//      next(item) {console.log(`${tag}.next ${item}`);},
//      error(error) {console.log(`${tag}.error ${error.stack || error}`);},
//      complete() {console.log(`${tag}.complete`);}
//   }
// }

function take$(sourceObservable$, amount) {
  return new _Rx2.default.Observable(function (observer) {
    var count = 0;
    var subscription = sourceObservable$.subscribe({
      next: function next(item) {
        observer.next(item);

        if (++count >= amount) {
          observer.complete();
        }
      },
      error: function error(_error2) {
        observer.error(_error2);
      },
      complete: function complete() {
        observer.complete();
      }
    });

    return function () {
      return subscription.unsubscribe();
    };
  });
}

var everySecond$ = createInterval$(1000);
var firstFiveSeconds$ = take$(everySecond$, 5);
var subscription = firstFiveSeconds$.subscribe((0, _util.createSubscriber)('one'));

// setTimeout(()=>{
//   subscription.unsubscribe();
// }, 3000);