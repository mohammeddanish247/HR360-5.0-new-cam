(function () {
  function _regeneratorRuntime() { "use strict"; /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */ _regeneratorRuntime = function _regeneratorRuntime() { return exports; }; var exports = {}, Op = Object.prototype, hasOwn = Op.hasOwnProperty, defineProperty = Object.defineProperty || function (obj, key, desc) { obj[key] = desc.value; }, $Symbol = "function" == typeof Symbol ? Symbol : {}, iteratorSymbol = $Symbol.iterator || "@@iterator", asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator", toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag"; function define(obj, key, value) { return Object.defineProperty(obj, key, { value: value, enumerable: !0, configurable: !0, writable: !0 }), obj[key]; } try { define({}, ""); } catch (err) { define = function define(obj, key, value) { return obj[key] = value; }; } function wrap(innerFn, outerFn, self, tryLocsList) { var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator, generator = Object.create(protoGenerator.prototype), context = new Context(tryLocsList || []); return defineProperty(generator, "_invoke", { value: makeInvokeMethod(innerFn, self, context) }), generator; } function tryCatch(fn, obj, arg) { try { return { type: "normal", arg: fn.call(obj, arg) }; } catch (err) { return { type: "throw", arg: err }; } } exports.wrap = wrap; var ContinueSentinel = {}; function Generator() {} function GeneratorFunction() {} function GeneratorFunctionPrototype() {} var IteratorPrototype = {}; define(IteratorPrototype, iteratorSymbol, function () { return this; }); var getProto = Object.getPrototypeOf, NativeIteratorPrototype = getProto && getProto(getProto(values([]))); NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype); var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype); function defineIteratorMethods(prototype) { ["next", "throw", "return"].forEach(function (method) { define(prototype, method, function (arg) { return this._invoke(method, arg); }); }); } function AsyncIterator(generator, PromiseImpl) { function invoke(method, arg, resolve, reject) { var record = tryCatch(generator[method], generator, arg); if ("throw" !== record.type) { var result = record.arg, value = result.value; return value && "object" == typeof value && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) { invoke("next", value, resolve, reject); }, function (err) { invoke("throw", err, resolve, reject); }) : PromiseImpl.resolve(value).then(function (unwrapped) { result.value = unwrapped, resolve(result); }, function (error) { return invoke("throw", error, resolve, reject); }); } reject(record.arg); } var previousPromise; defineProperty(this, "_invoke", { value: function value(method, arg) { function callInvokeWithMethodAndArg() { return new PromiseImpl(function (resolve, reject) { invoke(method, arg, resolve, reject); }); } return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg(); } }); } function makeInvokeMethod(innerFn, self, context) { var state = "suspendedStart"; return function (method, arg) { if ("executing" === state) throw new Error("Generator is already running"); if ("completed" === state) { if ("throw" === method) throw arg; return doneResult(); } for (context.method = method, context.arg = arg;;) { var delegate = context.delegate; if (delegate) { var delegateResult = maybeInvokeDelegate(delegate, context); if (delegateResult) { if (delegateResult === ContinueSentinel) continue; return delegateResult; } } if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) { if ("suspendedStart" === state) throw state = "completed", context.arg; context.dispatchException(context.arg); } else "return" === context.method && context.abrupt("return", context.arg); state = "executing"; var record = tryCatch(innerFn, self, context); if ("normal" === record.type) { if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue; return { value: record.arg, done: context.done }; } "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg); } }; } function maybeInvokeDelegate(delegate, context) { var methodName = context.method, method = delegate.iterator[methodName]; if (undefined === method) return context.delegate = null, "throw" === methodName && delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method) || "return" !== methodName && (context.method = "throw", context.arg = new TypeError("The iterator does not provide a '" + methodName + "' method")), ContinueSentinel; var record = tryCatch(method, delegate.iterator, context.arg); if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel; var info = record.arg; return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel); } function pushTryEntry(locs) { var entry = { tryLoc: locs[0] }; 1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry); } function resetTryEntry(entry) { var record = entry.completion || {}; record.type = "normal", delete record.arg, entry.completion = record; } function Context(tryLocsList) { this.tryEntries = [{ tryLoc: "root" }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0); } function values(iterable) { if (iterable) { var iteratorMethod = iterable[iteratorSymbol]; if (iteratorMethod) return iteratorMethod.call(iterable); if ("function" == typeof iterable.next) return iterable; if (!isNaN(iterable.length)) { var i = -1, next = function next() { for (; ++i < iterable.length;) { if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next; } return next.value = undefined, next.done = !0, next; }; return next.next = next; } } return { next: doneResult }; } function doneResult() { return { value: undefined, done: !0 }; } return GeneratorFunction.prototype = GeneratorFunctionPrototype, defineProperty(Gp, "constructor", { value: GeneratorFunctionPrototype, configurable: !0 }), defineProperty(GeneratorFunctionPrototype, "constructor", { value: GeneratorFunction, configurable: !0 }), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) { var ctor = "function" == typeof genFun && genFun.constructor; return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name)); }, exports.mark = function (genFun) { return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun; }, exports.awrap = function (arg) { return { __await: arg }; }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () { return this; }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) { void 0 === PromiseImpl && (PromiseImpl = Promise); var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl); return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) { return result.done ? result.value : iter.next(); }); }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () { return this; }), define(Gp, "toString", function () { return "[object Generator]"; }), exports.keys = function (val) { var object = Object(val), keys = []; for (var key in object) { keys.push(key); } return keys.reverse(), function next() { for (; keys.length;) { var key = keys.pop(); if (key in object) return next.value = key, next.done = !1, next; } return next.done = !0, next; }; }, exports.values = values, Context.prototype = { constructor: Context, reset: function reset(skipTempReset) { if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) { "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined); } }, stop: function stop() { this.done = !0; var rootRecord = this.tryEntries[0].completion; if ("throw" === rootRecord.type) throw rootRecord.arg; return this.rval; }, dispatchException: function dispatchException(exception) { if (this.done) throw exception; var context = this; function handle(loc, caught) { return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught; } for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i], record = entry.completion; if ("root" === entry.tryLoc) return handle("end"); if (entry.tryLoc <= this.prev) { var hasCatch = hasOwn.call(entry, "catchLoc"), hasFinally = hasOwn.call(entry, "finallyLoc"); if (hasCatch && hasFinally) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } else if (hasCatch) { if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0); } else { if (!hasFinally) throw new Error("try statement without catch or finally"); if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc); } } } }, abrupt: function abrupt(type, arg) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) { var finallyEntry = entry; break; } } finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null); var record = finallyEntry ? finallyEntry.completion : {}; return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record); }, complete: function complete(record, afterLoc) { if ("throw" === record.type) throw record.arg; return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel; }, finish: function finish(finallyLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel; } }, "catch": function _catch(tryLoc) { for (var i = this.tryEntries.length - 1; i >= 0; --i) { var entry = this.tryEntries[i]; if (entry.tryLoc === tryLoc) { var record = entry.completion; if ("throw" === record.type) { var thrown = record.arg; resetTryEntry(entry); } return thrown; } } throw new Error("illegal catch attempt"); }, delegateYield: function delegateYield(iterable, resultName, nextLoc) { return this.delegate = { iterator: values(iterable), resultName: resultName, nextLoc: nextLoc }, "next" === this.method && (this.arg = undefined), ContinueSentinel; } }, exports; }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["main"], {
    /***/
    98255:
    /*!*******************************************************!*\
      !*** ./$_lazy_route_resources/ lazy namespace object ***!
      \*******************************************************/

    /***/
    function _(module) {
      function webpackEmptyAsyncContext(req) {
        // Here Promise.resolve().then() is used instead of new Promise() to prevent
        // uncaught exception popping up in devtools
        return Promise.resolve().then(function () {
          var e = new Error("Cannot find module '" + req + "'");
          e.code = 'MODULE_NOT_FOUND';
          throw e;
        });
      }

      webpackEmptyAsyncContext.keys = function () {
        return [];
      };

      webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
      webpackEmptyAsyncContext.id = 98255;
      module.exports = webpackEmptyAsyncContext;
      /***/
    },

    /***/
    51491:
    /*!********************************!*\
      !*** ./src/app/api.service.ts ***!
      \********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ApiService": function ApiService() {
          return (
            /* binding */
            _ApiService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! rxjs */
      76491);
      /* harmony import */


      var rxjs__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! rxjs */
      25160);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var angular_hashtable__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! angular-hashtable */
      31405);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      89131);
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      33293);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      77607);
      /* harmony import */


      var ng_speed_test__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ng-speed-test */
      2314);
      /* harmony import */


      var _capacitor_network__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @capacitor/network */
      51573);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @awesome-cordova-plugins/sqlite/ngx */
      38298); // import { SQLite, SQLiteObject } from "@ionic-native/sqlite/ngx";


      var _ApiService = /*#__PURE__*/function () {
        function ApiService(geolocation, androidPermission, locationAccuracy, toastController, splashscreen, loadingController, httpClient, platform, sqlite, alertCtrl, storage, speedTestService, router) {
          var _this = this;

          _classCallCheck(this, ApiService);

          this.geolocation = geolocation;
          this.androidPermission = androidPermission;
          this.locationAccuracy = locationAccuracy;
          this.toastController = toastController;
          this.splashscreen = splashscreen;
          this.loadingController = loadingController;
          this.httpClient = httpClient;
          this.platform = platform;
          this.sqlite = sqlite;
          this.alertCtrl = alertCtrl;
          this.storage = storage;
          this.speedTestService = speedTestService;
          this.router = router;
          this.rowData = [];
          this.list = [];
          this.makeList = [];
          this.makeArray = [];
          this.makeModelMap = new Map();
          this.has = new angular_hashtable__WEBPACK_IMPORTED_MODULE_6__.HashTable();
          this.locationData = []; // public url = "https://beta-wsmobileapp.247development.uk/service1.asmx/";

          this.url = "https://mobileappapi.home360.org.uk/service1.asmx/";
          this.debugUrl = "";
          this.isAuthenticated = new rxjs__WEBPACK_IMPORTED_MODULE_7__.BehaviorSubject(null);
          this.token = '';
          this.lat = " ";
          this["long"] = " ";
          this.platform.ready().then(function (da) {
            _this.sqlite.create({
              name: 'data.db',
              location: 'default'
            }).then(function (db) {
              _this.database = db;
            })["catch"](function (e) {
              return console.log(e);
            });
          });
        } // loader


        _createClass(ApiService, [{
          key: "presentLoading",
          value: function presentLoading(msg) {
            this.loadingController.create({
              spinner: "bubbles",
              message: msg,
              cssClass: "custom-class"
            }).then(function (res) {
              res.present();
            })["catch"](function (e) {});
          } //Custom Loader

        }, {
          key: "presentCustomLoader",
          value: function presentCustomLoader(msg) {
            var _this2 = this;

            return new Promise(function (resolve, reject) {
              _this2.loadingController.create({
                spinner: "bubbles",
                cssClass: "my-custom-class",
                message: msg
              }).then(function (res) {
                res.present();
                resolve("");
              })["catch"](function (e) {});
            });
          } //update loading text 

        }, {
          key: "setLoadingText",
          value: function setLoadingText(text) {
            var elem = document.querySelector("div.loading-wrapper div.loading-content");
            if (elem) elem.innerHTML = text;
          } //Progress Bar

        }, {
          key: "addProgressBar",
          value: function addProgressBar() {
            var elem = document.querySelector("div.loading-wrapper");
            var newElement = document.createElement('ion-progress-bar');
            newElement.setAttribute("value", "0.05");
            newElement.setAttribute("class", "progressbar");
            if (elem) elem.append(newElement);
          }
        }, {
          key: "setProgressBar",
          value: function setProgressBar(val) {
            var value = parseInt(val) / 100;
            var elem = document.querySelector("ion-progress-bar");
            if (elem) elem.setAttribute("value", value.toString());
          } //alert
          // presentAlert(subHead: string, msg: string): Promise<boolean> {
          //   this.dismissLoading();
          //   return new Promise((resolve, reject) => {
          //     const ctl = this.alertCtrl;
          //     let alert: any = this.alertCtrl
          //       .create({
          //         header: "Error Message",
          //         subHeader: subHead,
          //         cssClass: "custom-class",
          //         message: msg,
          //         buttons: [
          //           {
          //             text: "OK",
          //             handler: () => {
          //               ctl.dismiss().then(() => {
          //                 this.presentLoading("Syncing Data Please Wait");
          //                 resolve(true);
          //               });
          //               return false;
          //             },
          //           },
          //         ],
          //       })
          //       .then((dlg) => dlg.present());
          //   });
          // }

        }, {
          key: "alert",
          value: function alert(msg, hdr) {
            var _this3 = this;

            return new Promise(function (resolve) {
              _this3.alertCtrl.create({
                header: hdr || "Alert Message",
                cssClass: "custom-class",
                subHeader: msg,
                backdropDismiss: false,
                buttons: [{
                  text: "OK",
                  handler: function handler() {
                    resolve("");
                  }
                }]
              }).then(function (res) {
                res.present();
              });
            });
          }
        }, {
          key: "showToast",
          value: function showToast(msg, clr, time) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee() {
              var toast;
              return _regeneratorRuntime().wrap(function _callee$(_context) {
                while (1) {
                  switch (_context.prev = _context.next) {
                    case 0:
                      _context.next = 2;
                      return this.toastController.create({
                        cssClass: "my-toast",
                        color: clr || "dark",
                        message: msg,
                        duration: time || 3000
                      });

                    case 2:
                      toast = _context.sent;
                      toast.present();

                    case 4:
                    case "end":
                      return _context.stop();
                  }
                }
              }, _callee, this);
            }));
          }
        }, {
          key: "dismissLoading",
          value: function dismissLoading() {
            this.loadingController.dismiss(function (res) {})["catch"](function (e) {});
          }
        }, {
          key: "getLocation",
          value: function getLocation() {
            var _this4 = this;

            return new Promise(function (resolve, reject) {
              console.log("inside getlocation");
              navigator.geolocation.getCurrentPosition(function (position) {
                _this4["long"] = position.coords.longitude;
                _this4.lat = position.coords.latitude;
                console.log('#location ' + _this4.lat + ' ' + _this4["long"]);
                resolve(position);
                _this4.locationCoords = position;
              }, function (err) {
                console.log("#location " + JSON.stringify(err));
              }, {
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 3000
              });
            });
          } // JOBS TABLE

        }, {
          key: "createJobTable",
          value: function createJobTable() {
            var _this5 = this;

            return new Promise(function (resolve, reject) {
              //this.database
              _this5.database.executeSql("create table IF NOT EXISTS jobslist(CLAIMJOBID VARCHAR(32), CLAIMGUID VARCHAR(32),JOBGUID VARCHAR(32) NOT NULL UNIQUE, RiskPostCode VARCHAR(32), ProductName VARCHAR(32),ContactName VARCHAR(32), BookingDate VARCHAR(32), AppointmentStartTime VARCHAR(32), AppointmentEndTime VARCHAR(32), BookingTimeType VARCHAR(32),RiskAddress VARCHAR(32), phone VARCHAR(32), HomePhone VARCHAR(32), ProductTypeId VARCHAR(32),IsClaim VARCHAR(32),BackgroundColour VARCHAR(32), CLIENTNAME VARCHAR(32), ProductTypeName VARCHAR(32), ListType VARCHAR(32), CLAIMRef VARCHAR(32), SyncStatus VARCHAR(32), RouteOrder INTEGER, ParentJobGuid VARCHAR(32), EngName  VARCHAR(32))", []).then(function (d) {
                resolve("promise resolved");
              }) //id INTEGER PRIMARY KEY AUTOINCREMENT,
              ["catch"](function (e) {
                reject("promise reject");
              });
            });
          } // public insertDataIntoJobsListTable(
          //   CLAIMJOBID: string,
          //   CLAIMGUID: string,
          //   JOBGUID: string,
          //   RiskPostCode: string,
          //   ProductName: string,
          //   ContactName: string,
          //   BookingDate: string,
          //   AppointmentStartTime: string,
          //   AppointmentEndTime: string,
          //   BookingTimeType: string,
          //   RiskAddress: string,
          //   phone: string,
          //   ProductTypeId: string,
          //   IsClaim: string,
          //   BackgroundColour: string,
          //   CLIENTNAME: string,
          //   ProductTypeName: string,
          //   ListType: string,
          //   CLAIMRef: string,
          //   RouteOrder: string,
          //   ParentJobGuid: string,
          //   EngName : string,
          //   msg : string,
          // ) {
          //   this.database.executeSql(
          //     "insert into jobslist (CLAIMJOBID,CLAIMGUID,JOBGUID,RiskPostCode,ProductName,ContactName,BookingDate,AppointmentStartTime,AppointmentEndTime,BookingTimeType,RiskAddress,phone,ProductTypeId,IsClaim,BackgroundColour,CLIENTNAME,ProductTypeName,ListType,CLAIMRef,RouteOrder,ParentJobGuid,EngName)  values(?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?,?)",
          //     [
          //       CLAIMJOBID,
          //       CLAIMGUID,
          //       JOBGUID,
          //       RiskPostCode,
          //       ProductName,
          //       ContactName,
          //       BookingDate,
          //       AppointmentStartTime,
          //       AppointmentEndTime,
          //       BookingTimeType,
          //       RiskAddress,
          //       phone,
          //       ProductTypeId,
          //       IsClaim,
          //       BackgroundColour,
          //       CLIENTNAME,
          //       ProductTypeName,
          //       ListType,
          //       CLAIMRef,
          //       RouteOrder,
          //       ParentJobGuid,
          //       EngName
          //     ]
          //   ).then(res =>{
          //     this.setLoadingText(msg);
          //   }).catch(res =>{
          //     this.setLoadingText(msg);
          //   })
          //   // //jobstatus
          //   // this.database.executeSql("insert into jobsstatus (JOBGUID) values(?)", [
          //   //   JOBGUID,
          //   // ]);
          //   // //onroute
          //   // this.database.executeSql('select * from onroute where JOBGUID=?',[JOBGUID]).then(res=>{
          //   //   console.log("###dnaish "+JSON.stringify(res.rows.length));
          //   //   console.log("###dnaish "+JSON.stringify(res.rows.item(0)));
          //   // })
          //   // this.database.executeSql("insert into onroute (JOBGUID) values(?)", [
          //   //   JOBGUID,
          //   // ]);
          //   // //arrived
          //   // this.database.executeSql("insert into arrived (JOBGUID) values(?)", [
          //   //   JOBGUID,
          //   // ]);
          //   // //services
          //   // this.database.executeSql("insert into completeservice (JOBGUID, ParentJobGuid) values(?,?)", [
          //   //   JOBGUID,ParentJobGuid
          //   // ]);
          //   // //enginfo
          //   // this.database.executeSql(
          //   //   "insert into enggpics (JOBGUID,CLAIMGUID) values(?,?)",
          //   //   [JOBGUID, CLAIMGUID]
          //   // );
          // }

        }, {
          key: "fetchJobs",
          value: function fetchJobs(index) {
            var _this6 = this;

            this.database.executeSql("select * from jobslist", []).then(function (data) {
              _this6.rowData = [JSON.stringify(data.rows.item(index)["CLAIMGUID"]), JSON.stringify(data.rows.item(index)["JOBGUID"]), JSON.stringify(data.rows.item(index)["RiskPostCode"]), JSON.stringify(data.rows.item(index)["ProductName"]), JSON.stringify(data.rows.item(index)["ContactName"]), JSON.stringify(data.rows.item(index)["BookingDate"]), JSON.stringify(data.rows.item(index)["BookingTimeType"]), JSON.stringify(data.rows.item(index)["RiskAddress"]), JSON.stringify(data.rows.item(index)["phone"]), JSON.stringify(data.rows.item(index)["HomePhone"]), JSON.stringify(data.rows.item(index)["ProductTypeId"]), JSON.stringify(data.rows.item(index)["IsClaim"]), JSON.stringify(data.rows.item(index)["BackgroundColour"]), JSON.stringify(data.rows.item(index)["CLIENTNAME"])];
            })["catch"](function (e) {});
          } // OnRoute Table

        }, {
          key: "createOnRouteTable",
          value: function createOnRouteTable() {
            var _this7 = this;

            return new Promise(function (resolve, reject) {
              _this7.database.executeSql("create table IF NOT EXISTS onroute (JOBGUID VARCHAR(32) NOT NULL UNIQUE ,CLAIMGUID VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function () {
                resolve("onroute table created success");
              })["catch"](function (e) {});
            });
          } // Arrived Table

        }, {
          key: "createArrivedTable",
          value: function createArrivedTable() {
            var _this8 = this;

            return new Promise(function (resolve, reject) {
              _this8.database.executeSql("create table IF NOT EXISTS arrived (JOBGUID VARCHAR(32) NOT NULL UNIQUE  ,Lattitude VARCHAR(32),Longitude VARCHAR(32), OnRouteDT VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function () {
                resolve("arrived table created success");
              })["catch"](function (e) {});
            });
          } // JOBS STATUS TABLE

        }, {
          key: "createJobsStatusTable",
          value: function createJobsStatusTable() {
            var _this9 = this;

            return new Promise(function (resolve, reject) {
              _this9.database.executeSql("create table IF NOT EXISTS jobsstatus (JOBGUID  VARCHAR(32)  NOT NULL UNIQUE   ,status VARCHAR(32),newapp VARCHAR(32),certificate VARCHAR(32),SyncStatus VARCHAR(32),CertificateLocalURI VARCHAR(32))", []).then(function () {
                resolve("jobs status sign table created success");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "fetchJobsStatus",
          value: function fetchJobsStatus(JobGUID) {
            var _this10 = this;

            this.database.executeSql("select status from jobsstatus where JOBGUID = ?", [JobGUID]).then(function (data) {
              _this10.status = JSON.stringify(data.rows.item(0)["status"]);
              return _this10.status;
            })["catch"](function (e) {});
          } // Abandon CallOut

        }, {
          key: "createAbandonTable",
          value: function createAbandonTable() {
            var _this11 = this;

            return new Promise(function (resolve, reject) {
              _this11.database.executeSql("create table IF NOT EXISTS abandon (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), FORACTION VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))", []).then(function (res) {
                resolve("Abandon table created success");
              })["catch"](function (e) {});
            });
          } // Authorization Required

        }, {
          key: "createAuthorizationTable",
          value: function createAuthorizationTable() {
            var _this12 = this;

            return new Promise(function (resolve, reject) {
              _this12.database.executeSql("create table IF NOT EXISTS authorization (JOBGUID  VARCHAR(32) NOT NULL UNIQUE  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), parts VARCHAR(32), labour VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32), FILEBASE VARCHAR(32))", []).then(function (res) {
                resolve("authorizationsign table created success");
              })["catch"](function (e) {});
            });
          } // compelete Claim Required

        }, {
          key: "createCompleteClaimTable",
          value: function createCompleteClaimTable() {
            var _this13 = this;

            return new Promise(function (resolve, reject) {
              _this13.database.executeSql("create table IF NOT EXISTS completeclaim (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), IsClaimCompleted VARCHAR(32), BackgroundColour VARCHAR(32),HaveData VARCHAR(32), ComboIsCompleted VARCHAR(32))", []).then(function (res) {
                resolve("complete claim table created success");
              })["catch"](function (e) {});
            });
          } // compelete Service Required

        }, {
          key: "createCompleteServiceTable",
          value: function createCompleteServiceTable() {
            var _this14 = this;

            return new Promise(function (resolve, reject) {
              _this14.database.executeSql("create table IF NOT EXISTS completeservice (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, ParentJobGuid VARCHAR(32) , HaveData VARCHAR(32) , OUTCOME VARCHAR(32), PARTS VARCHAR(32), LABOUR VARCHAR(32), JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), FILENAME VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32), ComboClaimJobId VARCHAR(32), ComboIsCompleted VARCHAR(32), CantCompleteReason VARCHAR(32),  IsServiceCompleted VARCHAR(32), BackgroundColour VARCHAR(32))", []).then(function (res) {
                resolve("complete Service table created success");
              })["catch"](function (e) {});
            });
          } //cannot compelete Required

        }, {
          key: "createCanNotCompleteTable",
          value: function createCanNotCompleteTable() {
            var _this15 = this;

            return new Promise(function (resolve, reject) {
              _this15.database.executeSql("create table IF NOT EXISTS cannotcomplete (JOBGUID  VARCHAR(32)  ,OUTCOME VARCHAR(32),JOBNOTE VARCHAR(32), FILEBASE VARCHAR(32), OnDt VARCHAR(32), Latitude VARCHAR(32), Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve("complete table created success");
              })["catch"](function (e) {});
            });
          } // New Appliance

        }, {
          key: "newApplianceTable",
          value: function newApplianceTable() {
            var _this16 = this;

            return new Promise(function (resolve, reject) {
              _this16.database.executeSql("create table IF NOT EXISTS newappliance (SerialNo INTEGER PRIMARY KEY AUTOINCREMENT not null ,HaveData VARCHAR(32), JOBGUID  VARCHAR(32), AppType VARCHAR(32), Make VARCHAR(32), MakeAnswer VARCHAR(32) , Model VARCHAR(32),ModelAnswer VARCHAR(32), BType VARCHAR(32), Loc VARCHAR(32), Flue VARCHAR(32), OwnedBy VARCHAR(32), Inspected VARCHAR(32), ZeroGov VARCHAR(32), OPU VARCHAR(32), OptPrs VARCHAR(32), OSD VARCHAR(32), VS VARCHAR(32), VCF VARCHAR(32), FOC VARCHAR(32), ComRead VARCHAR(32), HRatio VARCHAR(32), HCO2Val VARCHAR(32), HCOPPM VARCHAR(32), LRatio VARCHAR(32), LCO2Val VARCHAR(32), LCOPPM VARCHAR(32), STU VARCHAR(32),DefId VARCHAR(32), GIUSP VARCHAR(32), WarAdRec VARCHAR(32), RemAc VARCHAR(32), IsDelete  VARCHAR(32), GIUS VARCHAR(32),SyncStatus VARCHAR(32),json VARCHAR(32))", []).then(function (res) {
                resolve("appliance table created success");
              })["catch"](function (e) {});
            });
          } // create certificate

        }, {
          key: "certificateTable",
          value: function certificateTable() {
            var _this17 = this;

            return new Promise(function (resolve, reject) {
              _this17.database.executeSql("create table IF NOT EXISTS certificate (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, CLAIMJOBID VARCHAR(32) ,DetailsWork VARCHAR(32),NoOfAppTested VARCHAR(32), NextDueDt VARCHAR(32), OGIns VARCHAR(32), OGSup VARCHAR(32), ECon VARCHAR(32), OGTight VARCHAR(32), COFitted VARCHAR(32), COTested VARCHAR(32), EquiBond VARCHAR(32), HaveData VARCHAR(32), SigImage VARCHAR(32), SigRec VARCHAR(32), FlueChkDt VARCHAR(32),IsCompleted VARCHAR(32), ParentJobGuid VARCHAR(32))", []).then(function (res) {
                resolve("certificate table created success");
              })["catch"](function (e) {});
            });
          } //Boiler Installation

        }, {
          key: "boilerInstallTable",
          value: function boilerInstallTable() {
            var _this18 = this;

            return new Promise(function (resolve, reject) {
              _this18.database.executeSql("create table IF NOT EXISTS boilerinstallation (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , BLocation VARCHAR(32), BLocation_Desc VARCHAR(32), BFlue VARCHAR(32),FlueExtension VARCHAR(32),StandOffKit VARCHAR(32),D45Elbow VARCHAR(32),D90Elbow VARCHAR(32),GasRun VARCHAR(32),GasRun_Desc VARCHAR(32),CGasRun VARCHAR(32),CGasRun_Desc VARCHAR(32),ActionDt VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve("Boiler install sign table created success" + res);
              })["catch"](function (e) {
                reject(e);
              });
            });
          } // boiler installation pics

        }, {
          key: "boilerInstallPicsTable",
          value: function boilerInstallPicsTable() {
            var _this19 = this;

            return new Promise(function (resolve, reject) {
              _this19.database.executeSql("create table IF NOT EXISTS boilerinstallationpics (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , SSID  VARCHAR(32)  , BImage VARCHAR(32), BPWImage VARCHAR(32), CTImage VARCHAR(32),FSImage VARCHAR(32),IFImage VARCHAR(32),FILImage VARCHAR(32), EFTImage VARCHAR(32),ACCImage VARCHAR(32),TImage VARCHAR(32),BMCImage VARCHAR(32),A1Image VARCHAR(32),A2Image VARCHAR(32),A3Image VARCHAR(32),A4Image VARCHAR(32),A5Image VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve("Boiler installl pics table created success");
              })["catch"](function (e) {});
            });
          } // boiler signature

        }, {
          key: "boilerInstallSignTable",
          value: function boilerInstallSignTable() {
            var _this20 = this;

            return new Promise(function (resolve, reject) {
              _this20.database.executeSql("create table IF NOT EXISTS boilerinstallationsign (JOBGUID  VARCHAR(32) NOT NULL UNIQUE, SSID  VARCHAR(32)  , BInsComplete VARCHAR(32), BInsComplete_Reason VARCHAR(32), BInsDefects VARCHAR(32),BInsDefects_Reason VARCHAR(32),BInsDamage VARCHAR(32),BInsDamage_Reason VARCHAR(32),BInsAddNotes VARCHAR(32),InstallerSig VARCHAR(32),CustomerSig VARCHAR(32),InstallerName VARCHAR(32),CustomerName VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve("Boiler installl sign table created success");
              })["catch"](function (e) {});
            });
          } //Site Survey

        }, {
          key: "siteSurveyTable",
          value: function siteSurveyTable() {
            var _this21 = this;

            return new Promise(function (resolve, reject) {
              _this21.database.executeSql("create table IF NOT EXISTS sitesurvey (JOBGUID  VARCHAR(32) NOT NULL UNIQUE , siteSurveyboiler VARCHAR(32), siteSurveyboilerdescription VARCHAR(32), locationboiler VARCHAR(32), NewBoilerLocationSelect VARCHAR(32), NewBoilerLocationDesc VARCHAR(32), FlueSelect VARCHAR(32), FlueextensionsSelect VARCHAR(32), StandOffKitSelect VARCHAR(32), FourtyfivedegreeelbowSelect VARCHAR(32),NinetydegreeelbowSelect VARCHAR(32), StandingInletPressue VARCHAR(32), SiteSurveyReason VARCHAR(32), SiteSurveyProductType VARCHAR(32), GasRunSelect VARCHAR(32),GasRunNewDetails VARCHAR(32),CondensateGasSelect VARCHAR(32),CondensateGasNewDetails VARCHAR(32), WorkingInletPressue VARCHAR(32),Latitude VARCHAR(32),Longitude VARCHAR(32),SyncStatus VARCHAR(32),HaveData VARCHAR(32),trvs VARCHAR(32))", []).then(function (res) {
                resolve("site survey table created success");
              })["catch"](function (e) {
                reject(e);
              });
            });
          } // Site Survey Pics

        }, {
          key: "siteSurveyPics",
          value: function siteSurveyPics() {
            var _this22 = this;

            return new Promise(function (resolve, reject) {
              _this22.database.executeSql("create table IF NOT EXISTS sitesurveypics (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), BoilerImage VARCHAR(32),Boilerpipework VARCHAR(32),CondensateterminationImage VARCHAR(32),FusespurImage VARCHAR(32),InternalflueImage VARCHAR(32),FlueInLoftImage VARCHAR(32),ExternalflueterminalImage VARCHAR(32),AiringCupboardCylinderImage VARCHAR(32),StopTapImage VARCHAR(32),BMCImage VARCHAR(32),STLImage VARCHAR(32),DrainOffLocationFlagImage VARCHAR(32),GasMeterImage VARCHAR(32),AdditionalOne VARCHAR(32),AdditionalTwo VARCHAR(32),AdditionalThree VARCHAR(32),AdditionalFour VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve("sitesurveypics created successs");
              })["catch"](function (e) {
                resolve("sitesurveypics create ERROR");
              });
            });
          } // Site Survey Sign

        }, {
          key: "siteSurveySign",
          value: function siteSurveySign() {
            var _this23 = this;

            return new Promise(function (resolve, reject) {
              _this23.database.executeSql("create table IF NOT EXISTS sitesurveysign (JOBGUID VARCHAR(32) NOT NULL UNIQUE, SSID VARCHAR(32), describeIssue VARCHAR(32),customersign VARCHAR(32),surveyorsign VARCHAR(32),customername VARCHAR(32),surveyorname VARCHAR(32),HaveData VARCHAR(32), CLAIMRef VARCHAR(32),ButtonClicked VARCHAR(32) )", []).then(function (res) {
                resolve("sitesurvey sign created successs");
              })["catch"](function (e) {
                resolve("sitesurvey sign create ERROR");
              });
            });
          } //make and model table

        }, {
          key: "createmakemodel",
          value: function createmakemodel() {
            var _this24 = this;

            return new Promise(function (resolve, reject) {
              _this24.database.executeSql("create table IF NOT EXISTS makemodel (make  VARCHAR(32),model VARCHAR(32))", []).then(function (res) {
                resolve(" makemodel table created successfull");
              })["catch"](function (e) {
                reject(e);
              });
            });
          } // completed jobs

        }, {
          key: "completedjobsTable",
          value: function completedjobsTable() {
            var _this25 = this;

            return new Promise(function (resolve, reject) {
              _this25.database.executeSql("create table IF NOT EXISTS compeltedjobs (JOBGUID  VARCHAR(32),SyncStatus VARCHAR(32))", []).then(function (res) {
                resolve(" compeleted jobs table created success ");
              })["catch"](function (e) {
                reject(e);
              });
            });
          } // engg pics

        }, {
          key: "enggPicsTable",
          value: function enggPicsTable() {
            var _this26 = this;

            return new Promise(function (resolve, reject) {
              _this26.database.executeSql("create table IF NOT EXISTS enggpics (JOBGUID  VARCHAR(32),CLAIMGUID  VARCHAR(32),pic  VARCHAR(32),onDt VARCHAR(32),latitude VARCHAR(32),longitude VARCHAR(32),HaveData VARCHAR(32))", []).then(function (res) {
                resolve(" enggpics table created success ");
              })["catch"](function (e) {
                reject(e);
              });
            });
          } //Developer Mode Table

        }, {
          key: "createFirmwareUrl",
          value: function createFirmwareUrl() {
            var _this27 = this;

            return new Promise(function (resolve, reject) {
              _this27.database.executeSql('create table if not exists firmwareurl (ID integer primary key, Live varchar(32), Debug varchar(32))', []).then(function (res) {
                _this27.database.executeSql('insert into firmwareurl (Live,Debug) values(?,?)', [_this27.url, _this27.debugUrl]);

                resolve("Devmode Table created");
              });
            });
          } //Error Log Table

        }, {
          key: "createErrorLogTable",
          value: function createErrorLogTable() {
            var _this28 = this;

            return new Promise(function (resolve, reject) {
              _this28.database.executeSql('create table if not exists errorlog (ErrorMsg varchar(32),JOBGUID  VARCHAR(32),  ActionName VARCHAR(32), Desc VARCHAR(32))', []).then(function (res) {
                resolve('Log Table created success ' + res);
                console.log(' Log table created success ');
              })["catch"](function (e) {
                reject(e);
                console.log(' Error Log table created failed ' + JSON.stringify(e));
              });
            });
          }
        }, {
          key: "insertIntoErrorLog",
          value: function insertIntoErrorLog(ErrorMsg, JOBGUID, actionName, Desc) {
            this.database.executeSql('insert into errorlog (ErrorMsg,JOBGUID,ActionName,Desc) values(?,?,?,?)', [ErrorMsg, JOBGUID, actionName, Desc]).then(function (res) {})["catch"](function (e) {
              console.log('#####ERROR inserting ErrorLog Table' + JSON.stringify(e));
            });
          }
        }, {
          key: "insertIntoSyncLog",
          value: function insertIntoSyncLog(JOBGUID, actionName, Msg) {
            this.database.executeSql('insert into SyncLog (JOBGUID,ActionName,Msg) values(?,?,?)', [JOBGUID, actionName, Msg]).then(function (res) {
              console.log("SyncLog inserted success");
            })["catch"](function (e) {
              console.log('#####ERROR inserting ErrorLog Table' + JSON.stringify(e));
            });
          }
        }, {
          key: "createEngineerInfoTable",
          value: function createEngineerInfoTable() {
            var _this29 = this;

            return new Promise(function (resolve, reject) {
              _this29.database.executeSql('create table if not exists EngInfo (GasSafeNumber varchar(32),EngCertName  VARCHAR(32),  GasSafeLicenseNumber VARCHAR(32), CompanyAddress VARCHAR(32), SubContractor VARCHAR(32), TypeName VARCHAR(32), Sign VARCHAR(32))', []).then(function (res) {
                resolve('EngInfo Table created success ' + res);
              })["catch"](function (e) {
                reject(e);
                console.log(' Error EngInfo table created failed ' + JSON.stringify(e));
              });
            });
          }
        }, {
          key: "deleteEngInfoTable",
          value: function deleteEngInfoTable() {
            this.database.executeSql('delete from EngInfo', []);
          }
        }, {
          key: "httpSend",
          value: function httpSend(endPoint, params, method) {
            switch (method) {
              case "post":
                {
                  console.log("Danish at http request - " + this.url);
                  return this.httpClient.post(this.url + endPoint, params);
                }
                break;

              case "get":
                {
                  return this.httpClient.get(this.url + endPoint);
                }
            }
          } // Empty all tables

        }, {
          key: "emptyAllTables",
          value: function emptyAllTables() {
            var _this30 = this;

            return new Promise(function (resolve, reject) {
              _this30.emptyjobslist().then(function (res) {
                _this30.emptyEngPics().then(function (res) {
                  _this30.database.executeSql("vacuum", []).then(function (res) {
                    resolve('jobs list deleted');
                  })["catch"](function (e) {});
                })["catch"](function (e) {});
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyjobslist",
          value: function emptyjobslist() {
            var _this31 = this;

            return new Promise(function (resolve, reject) {
              _this31.database.executeSql("delete from jobslist", []).then(function (res) {
                resolve("jobslist resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyroute",
          value: function emptyroute() {
            var _this32 = this;

            return new Promise(function (resolve, reject) {
              _this32.database.executeSql("delete from onroute", []).then(function (res) {
                resolve("onroute resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyarrived",
          value: function emptyarrived() {
            var _this33 = this;

            return new Promise(function (resolve, reject) {
              _this33.database.executeSql("delete from arrived", []).then(function (res) {
                resolve("arrived resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyjobsstatus",
          value: function emptyjobsstatus() {
            var _this34 = this;

            return new Promise(function (resolve, reject) {
              _this34.database.executeSql("delete from jobsstatus", []).then(function (res) {
                resolve("jobsstatus resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyabandon",
          value: function emptyabandon() {
            var _this35 = this;

            return new Promise(function (resolve, reject) {
              _this35.database.executeSql("delete from abandon", []).then(function (res) {
                resolve("abandon resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyauthorization",
          value: function emptyauthorization() {
            var _this36 = this;

            return new Promise(function (resolve, reject) {
              _this36.database.executeSql("delete from authorization", []).then(function (res) {
                resolve("authorization resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptycompleteclaim",
          value: function emptycompleteclaim() {
            var _this37 = this;

            return new Promise(function (resolve, reject) {
              _this37.database.executeSql("delete from completeclaim", []).then(function (res) {
                resolve("complete resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptycompleteservice",
          value: function emptycompleteservice() {
            var _this38 = this;

            return new Promise(function (resolve, reject) {
              _this38.database.executeSql("delete from completeservice", []).then(function (res) {
                resolve("complete resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptynewappliance",
          value: function emptynewappliance() {
            var _this39 = this;

            return new Promise(function (resolve, reject) {
              _this39.database.executeSql("delete from newappliance", []).then(function (res) {
                resolve("newappliance resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptycertificate",
          value: function emptycertificate() {
            var _this40 = this;

            return new Promise(function (resolve, reject) {
              _this40.database.executeSql("delete from certificate", []).then(function (res) {
                resolve("certificate resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyboilerinstallation",
          value: function emptyboilerinstallation() {
            var _this41 = this;

            return new Promise(function (resolve, reject) {
              _this41.database.executeSql("delete from boilerinstallation", []).then(function (res) {
                resolve("boilerinstallation resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyboilerinstallationpics",
          value: function emptyboilerinstallationpics() {
            var _this42 = this;

            return new Promise(function (resolve, reject) {
              _this42.database.executeSql("delete from boilerinstallationpics", []).then(function (res) {
                resolve("boilerinstallationpics resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyboilerinstallationsign",
          value: function emptyboilerinstallationsign() {
            var _this43 = this;

            return new Promise(function (resolve, reject) {
              _this43.database.executeSql("delete from boilerinstallationsign", []).then(function (res) {
                resolve("boilerinstallationsign resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptysitesurvey",
          value: function emptysitesurvey() {
            var _this44 = this;

            return new Promise(function (resolve, reject) {
              _this44.database.executeSql("delete from sitesurvey", []).then(function (res) {
                resolve("sitesurvey resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptysitesurveypic",
          value: function emptysitesurveypic() {
            var _this45 = this;

            return new Promise(function (resolve, reject) {
              _this45.database.executeSql("delete from sitesurveypics", []).then(function (res) {
                resolve("sitesurveypic resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptysitesurveysign",
          value: function emptysitesurveysign() {
            var _this46 = this;

            return new Promise(function (resolve, reject) {
              _this46.database.executeSql("delete from sitesurveysign", []).then(function (res) {
                resolve("sitesurveysign resolved");
              })["catch"](function (e) {});
            });
          }
        }, {
          key: "emptyEngPics",
          value: function emptyEngPics() {
            var _this47 = this;

            return new Promise(function (resolve, reject) {
              _this47.database.executeSql("delete from enggpics", []).then(function (res) {
                resolve("sitesurveysign resolved");
              })["catch"](function (e) {});
            });
          } //,complete,authorization,abandon, jobsstatus, arrived, onroute, jobslist

        }, {
          key: "dropAllTables",
          value: function dropAllTables() {
            this.database.executeSql("DROP TABLE IF EXISTS newappliance").then(function (res) {})["catch"](function (e) {});
          }
        }, {
          key: "getdateformatV2",
          value: function getdateformatV2() {
            var date = new Date();
            var day = date.getDate(); // yields day

            var month = date.getMonth() + 1; // yields month

            var year = date.getFullYear(); // yields year

            var hour = date.getHours().toString(); // yields hours

            var minute = date.getMinutes().toString(); // yields minutes

            var second = date.getSeconds().toString(); // yields seconds

            if (hour.toString().length == 1) {
              hour = "0" + hour;
            }

            if (minute.toString().length == 1) {
              minute = "0" + minute;
            }

            if (second.toString().length == 1) {
              second = "0" + second;
            } // After this construct a string with the above results as below


            var time = day + "/" + month + "/" + year + " " + hour + ":" + minute + ":" + second;
            return time;
          } //Check if application having access permission of location

        }, {
          key: "checkGPSPermission",
          value: function checkGPSPermission() {
            var _this48 = this;

            return new Promise(function (resolve, reject) {
              console.log("!!! under check permistion");

              _this48.androidPermission.requestPermissions([_this48.androidPermission.PERMISSION.CAMERA, _this48.androidPermission.PERMISSION.READ_EXTERNAL_STORAGE, _this48.androidPermission.PERMISSION.GET_ACCOUNTS, _this48.androidPermission.PERMISSION.ACCESS_FINE_LOCATION]);

              _this48.androidPermission.checkPermission(_this48.androidPermission.PERMISSION.ACCESS_COARSE_LOCATION).then(function (result) {
                if (result.hasPermission) {
                  console.log("!!! If having permission"); //If having permission show 'Turn On GPS' dialogue
                  // this.askToTurnOnGPS();

                  resolve("Permission Granted!"); //this.showSyncAlert();
                } else {
                  //Permission not given Do not allow clicked 
                  console.log("!!! If having no permission");
                  reject('Permission Denied!');
                }
              }, function (err) {
                console.log("!!! check permission err not able to check ");
                reject('Permission Denied!');
              });
            });
          } // requestGPSPermission() {
          //   return new Promise((resolve,reject)=>{
          //     this.locationAccuracy.canRequest().then((canRequest: boolean) => {
          //       if (canRequest) {
          //       } else {
          //         //Show 'GPS Permission Request' dialogue from setting
          //         this.androidPermission
          //           .requestPermission(
          //             this.androidPermission.PERMISSION.ACCESS_FINE_LOCATION
          //           )
          //           .then(
          //             () => {
          //               console.log("!!! request permision succes");
          //               // call method to turn on GPS
          //               this.askToTurnOnGPS();
          //               resolve("requestGPSPermission resolved");
          //             },
          //             (error) => {
          //               console.log("!!! request permision error");
          //               //Show alert if user click on 'No Thanks'
          //               this.alert("Please allow location permission from app settings as location is mandatory for this application.","Permission Error");
          //             }
          //           ).catch(e=>{
          //             console.log("!!! request permision catch");
          //           })
          //       }
          //     });
          //   });
          // }

        }, {
          key: "askToTurnOnGPS",
          value: function askToTurnOnGPS() {
            var _this49 = this;

            // gps turn on and off here popup
            return new Promise(function (resolve, reject) {
              console.log("!!! under turn on gps");

              _this49.locationAccuracy.request(_this49.locationAccuracy.REQUEST_PRIORITY_HIGH_ACCURACY).then(function (succ) {
                console.log("!!! gps turned on ");
                resolve("turn on gps resolved"); // When GPS Turned ON call method to get Accurate location coordinates
                // this.getLocationCoordinates().then(res => {
                //   resolve("turn on gps resolved");
                // });
              }, function (error) {
                console.log("!!! not turn on gps");
                reject("turn on gps rejects");
              });
            });
          } // Methos to get device accurate coordinates using device GPS

        }, {
          key: "getLocationCoordinates",
          value: function getLocationCoordinates() {
            var _this50 = this;

            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                _this50.dismissLoading();
              }, 15000);

              _this50.geolocation.getCurrentPosition({
                enableHighAccuracy: true,
                timeout: 10000,
                maximumAge: 60000
              }).then(function (resp) {
                console.log("!!! inside coord succ");
                _this50.locationCoords = resp;
                resolve("getLocationCoordinates resolved");
              }, function (err) {
                _this50.locationCoords.coords.latitude = null;
                _this50.locationCoords.coords.longitude = null;
                resolve("");
              })["catch"](function (error) {
                _this50.locationCoords.coords.latitude = null;
                _this50.locationCoords.coords.longitude = null;
                resolve("");
              });
            });
          }
        }, {
          key: "turnOnGpsAndGetLocation",
          value: function turnOnGpsAndGetLocation() {
            var _this51 = this;

            return new rxjs__WEBPACK_IMPORTED_MODULE_9__.Observable(function (observer) {
              _this51.presentLoading("Please Wait ... ");

              _this51.checkGPSPermission().then(function (res) {
                _this51.askToTurnOnGPS().then(function (res) {
                  _this51.getLocationCoordinates().then(function (res) {
                    observer.next(_this51.locationCoords);
                    observer.complete();
                  });
                })["catch"](function (err) {
                  _this51.dismissLoading();

                  _this51.showToast("could not access location, please turn it on.", "danger");
                });
              })["catch"](function (err) {
                setTimeout(function () {
                  _this51.dismissLoading();
                }, 200);

                _this51.alert("Please allow location permission from app settings as location is mandatory for this application.", err);
              });
            });
          } //ckeck network status

        }, {
          key: "checkNetwork",
          value: function checkNetwork() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee2() {
              return _regeneratorRuntime().wrap(function _callee2$(_context2) {
                while (1) {
                  switch (_context2.prev = _context2.next) {
                    case 0:
                      _context2.next = 2;
                      return _capacitor_network__WEBPACK_IMPORTED_MODULE_4__.Network.getStatus();

                    case 2:
                      this.networkStatus = _context2.sent;
                      return _context2.abrupt("return", this.networkStatus);

                    case 4:
                    case "end":
                      return _context2.stop();
                  }
                }
              }, _callee2, this);
            }));
          } //Speed Check for smoothly syncing data

        }, {
          key: "speedCheck",
          value: function speedCheck() {
            var _this52 = this;

            console.log("Danish inside speed Check");
            return new Promise(function (resolve, reject) {
              setTimeout(function () {
                resolve("TimeOut");
              }, 60000);

              _this52.speedTestService.getMbps({
                iterations: 10,
                file: {
                  path: 'https://raw.githubusercontent.com/247HR/speedcheckassets/master/1mb.jpg',
                  size: 1197292,
                  shouldBustCache: true
                },
                retryDelay: 500
              }).subscribe(function (speed) {
                console.log(speed);

                _this52.insertIntoSyncLog(" " + speed, "Upload Speed", "Test");

                resolve(speed);
              }, function (error) {
                console.log(error);
                reject(error);
              });
            });
          }
        }, {
          key: "customAlertBox",
          value: function customAlertBox(hdr, msg, buttonText, data, compName) {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee3() {
              var _this53 = this;

              var alert;
              return _regeneratorRuntime().wrap(function _callee3$(_context3) {
                while (1) {
                  switch (_context3.prev = _context3.next) {
                    case 0:
                      _context3.next = 2;
                      return this.alertCtrl.create({
                        header: hdr,
                        subHeader: msg,
                        backdropDismiss: false,
                        buttons: [{
                          text: "Cancel",
                          handler: function handler() {}
                        }, {
                          text: buttonText,
                          handler: function handler() {
                            _this53.gotoComponent(data, compName);
                          }
                        }]
                      });

                    case 2:
                      alert = _context3.sent;
                      _context3.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context3.stop();
                  }
                }
              }, _callee3, this);
            }));
          }
        }, {
          key: "gotoComponent",
          value: function gotoComponent(data, compName) {
            var navigationExtras = {
              state: {
                data: data
              }
            };
            this.router.navigate([compName], navigationExtras);
          }
        }, {
          key: "sendErrorLog",
          value: function sendErrorLog() {
            var _this54 = this;

            return new Promise(function (resolve, reject) {
              var bodyContent = [];

              _this54.database.executeSql('select * from errorlog', []).then(function (res) {
                if (res.rows.length < 1) {
                  resolve('SMTP no error found');
                } else {
                  for (var i = 0; i < res.rows.length; i++) {
                    bodyContent.push(JSON.stringify(res.rows.item(i)));
                  }

                  var string = JSON.stringify(bodyContent);
                  var encodedString = btoa(unescape(encodeURIComponent(string)));
                  Email.send({
                    name: 'SMTP',
                    Host: "smtp.elasticemail.com",
                    //smtpserver: "smtp.elasticemail.com",
                    Port: "2525",
                    Username: "mohammeddanish@247homerescue.co.uk",
                    Password: "6699EF4C55E4247F145B943AEAE83074E6CD",
                    To: "md03danish@gmail.com",
                    From: "mohammeddanish@247homerescue.co.uk",
                    Subject: "Error Report - HR360 App",
                    Body: "Please Download the HR360 app Error log File, Thank You.",
                    Attachments: [{
                      name: "HR360-ErrorLog.json",
                      data: encodedString
                    }]
                  }).then(function (message) {
                    if (message == 'OK') {
                      _this54.dismissLoading();

                      _this54.database.executeSql('delete from errorlog', []);

                      resolve("SMTP success");
                    } else {
                      _this54.dismissLoading();

                      resolve("SMTP ERROR " + message);
                    }
                  });
                }
              });
            });
          }
        }, {
          key: "SendErrorEmail",
          value: function SendErrorEmail() {
            var _this55 = this;

            return new Promise(function (resolve, reject) {
              var bodyContent = [];

              _this55.database.executeSql('select * from errorlog', []).then(function (res) {
                console.log(res.rows.length);
                console.log(JSON.stringify(res.rows.item(0)));

                for (var i = 0; i < res.rows.length; i++) {
                  console.log(JSON.stringify(res.rows.item(i)));
                  bodyContent.push(JSON.stringify(res.rows.item(i)));
                }

                var string = JSON.stringify(bodyContent);
                var encodedString = btoa(unescape(encodeURIComponent(string)));

                _this55.storage.get('enggid').then(function (res) {
                  console.log(string);
                  console.log(res);
                  var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpParams().set("attachment", string).set("engId", res);

                  _this55.httpSend("SendErrorEmail", params, "post").subscribe(function (res) {
                    _this55.showToast(res);

                    resolve("success");
                  }, function (err) {
                    _this55.showToast(err);

                    resolve("failed");
                  });
                })["catch"](function (err) {
                  reject("storage err : " + err);
                });
              });
            });
          }
        }, {
          key: "scrollToId",
          value: function scrollToId(id) {
            setTimeout(function () {
              var el = document.getElementById(id);
              el.scrollIntoView({
                behavior: "smooth"
              });
            });
          }
        }, {
          key: "firmwareUpdateCheck",
          value: function firmwareUpdateCheck() {
            var _this56 = this;

            return new Promise(function (resolve, reject) {
              _this56.storage.get("updateFirmware").then(function (firmware) {
                _this56.storage.get("debugmode").then(function (debugmd) {
                  console.log("Danish live debug " + firmware, debugmd);

                  if (firmware == "true" && debugmd != "true") {
                    _this56.database.executeSql('select Live from firmwareurl', []).then(function (res) {
                      _this56.url = res.rows.item(0)["Live"];
                      console.log("Danish at udatefirmware - " + res.rows.item(0)["Live"]);
                      resolve("using Live url");
                    });
                  } else {
                    if (firmware == "true" && debugmd == "true") {
                      _this56.database.executeSql('select Debug from firmwareurl', []).then(function (res) {
                        console.log("Danish at udatefirmware - " + res.rows.item(0)["Debug"]);
                        _this56.url = res.rows.item(0)["Debug"];
                        resolve("using Debug url");
                      });
                    } else {
                      resolve("firmware not updated");
                    }
                  }
                });
              });
            });
          }
        }, {
          key: "updateEngInfo",
          value: function updateEngInfo(column, value) {
            var _this57 = this;

            this.database.executeSql("select ".concat(column, " from EngInfo"), []).then(function (res) {
              console.log("sign length" + res.rows.length);

              if (res.rows.length > 0) {
                _this57.database.executeSql("update EngInfo set ".concat(column, "=?"), [value]);

                _this57.showToast("Signature saved Successfully", "success", 1500);

                _this57.dismissLoading();
              } else {
                _this57.database.executeSql("insert into EngInfo (".concat(column, ") values(?)"), [value]);

                _this57.showToast("Signature saved Successfully", "success", 1500);

                _this57.dismissLoading();
              }
            });
          }
        }, {
          key: "loadToken",
          value: function loadToken() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee4() {
              var token;
              return _regeneratorRuntime().wrap(function _callee4$(_context4) {
                while (1) {
                  switch (_context4.prev = _context4.next) {
                    case 0:
                      console.log("load enggid");
                      _context4.next = 3;
                      return this.storage.get('enggid');

                    case 3:
                      token = _context4.sent;

                      if (token) {
                        console.log('have enggid: ', token);
                        this.token = token;
                        this.isAuthenticated.next(true);
                      } else {
                        console.log("no enggid");
                        this.isAuthenticated.next(false);
                      }

                    case 5:
                    case "end":
                      return _context4.stop();
                  }
                }
              }, _callee4, this);
            }));
          }
        }, {
          key: "logout",
          value: function logout() {
            var _this58 = this;

            this.isAuthenticated.next(false);
            this.storage.clear().then(function (res) {
              // this.statusbar.show();
              _this58.router.navigate(['login']); // this.navCtrl.navigateRoot("login");
              // this.router.navigate([""]);


              _this58.storage.set("loginStatus", "false");

              _this58.storage.set('isChecked', false); // this.auth.deleteEngInfoTable();
              // this.auth.emptyAllTables();


              _this58.database.executeSql("delete from SyncLog", []);
            });
          }
        }]);

        return ApiService;
      }();

      _ApiService.ctorParameters = function () {
        return [{
          type: _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_1__.Geolocation
        }, {
          type: _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_2__.AndroidPermissions
        }, {
          type: _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_3__.LocationAccuracy
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.ToastController
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_0__.SplashScreen
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.LoadingController
        }, {
          type: _angular_common_http__WEBPACK_IMPORTED_MODULE_10__.HttpClient
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.Platform
        }, {
          type: _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_5__.SQLite
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_11__.AlertController
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_12__.Storage
        }, {
          type: ng_speed_test__WEBPACK_IMPORTED_MODULE_13__.SpeedTestService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_14__.Router
        }];
      };

      _ApiService = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_15__.Injectable)({
        providedIn: "root"
      })], _ApiService);
      /***/
    },

    /***/
    90158:
    /*!***************************************!*\
      !*** ./src/app/app-routing.module.ts ***!
      \***************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppRoutingModule": function AppRoutingModule() {
          return (
            /* binding */
            _AppRoutingModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./guards/auto-login.guard */
      73986);

      var routes = [{
        path: '',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_splash_splash_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./splash/splash.module */
          89623)).then(function (m) {
            return m.SplashPageModule;
          });
        }
      }, {
        path: 'tabs',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_tabs_tabs_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./tabs/tabs.module */
          15564)).then(function (m) {
            return m.TabsPageModule;
          });
        }
      }, {
        path: 'login',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_login_login_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./login/login.module */
          80107)).then(function (m) {
            return m.LoginPageModule;
          });
        },
        canLoad: [_guards_auto_login_guard__WEBPACK_IMPORTED_MODULE_0__.AutoLoginGuard]
      }, {
        path: 'details',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_details_details_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./details/details.module */
          10396)).then(function (m) {
            return m.DetailsPageModule;
          });
        }
      }, {
        path: 'createcertificate',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_createcertificate_createcertificate_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./createcertificate/createcertificate.module */
          88903)).then(function (m) {
            return m.CreatecertificatePageModule;
          });
        }
      }, {
        path: 'appliancedetails',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_appliancedetails_appliancedetails_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./appliancedetails/appliancedetails.module */
          5691)).then(function (m) {
            return m.AppliancedetailsPageModule;
          });
        }
      }, {
        path: 'outcomes',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_outcomes_outcomes_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./outcomes/outcomes.module */
          20231)).then(function (m) {
            return m.OutcomesPageModule;
          });
        }
      }, {
        path: 'signaturecertificate',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_signaturecertificate_signaturecertificate_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./signaturecertificate/signaturecertificate.module */
          62043)).then(function (m) {
            return m.SignaturecertificatePageModule;
          });
        }
      }, {
        path: 'newappliance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_newappliance_newappliance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./newappliance/newappliance.module */
          40835)).then(function (m) {
            return m.NewappliancePageModule;
          });
        }
      }, {
        path: 'abandoncall',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_abandoncall_abandoncall_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./abandoncall/abandoncall.module */
          93347)).then(function (m) {
            return m.AbandoncallPageModule;
          });
        }
      }, {
        path: 'authorizationrequired',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_authorizationrequired_authorizationrequired_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./authorizationrequired/authorizationrequired.module */
          86026)).then(function (m) {
            return m.AuthorizationrequiredPageModule;
          });
        }
      }, {
        path: 'engineersignature',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_engineersignature_engineersignature_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./engineersignature/engineersignature.module */
          53044)).then(function (m) {
            return m.EngineersignaturePageModule;
          });
        }
      }, {
        path: 'complete',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_complete_complete_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./complete/complete.module */
          50887)).then(function (m) {
            return m.CompletePageModule;
          });
        }
      }, {
        path: 'boilerinstall',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_boilerinstall_boilerinstall_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./boilerinstall/boilerinstall.module */
          52310)).then(function (m) {
            return m.BoilerinstallPageModule;
          });
        }
      }, {
        path: 'boilerinstallnext',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_boilerinstallnext_boilerinstallnext_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./boilerinstallnext/boilerinstallnext.module */
          54049)).then(function (m) {
            return m.BoilerinstallnextPageModule;
          });
        }
      }, {
        path: 'boilerinstallsign',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_boilerinstallsign_boilerinstallsign_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./boilerinstallsign/boilerinstallsign.module */
          72512)).then(function (m) {
            return m.BoilerinstallsignPageModule;
          });
        }
      }, {
        path: 'editappliance',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_editappliance_editappliance_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./editappliance/editappliance.module */
          28917)).then(function (m) {
            return m.EditappliancePageModule;
          });
        }
      }, {
        path: 'cannotcomplete',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_cannotcomplete_cannotcomplete_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./cannotcomplete/cannotcomplete.module */
          78162)).then(function (m) {
            return m.CannotcompletePageModule;
          });
        }
      }, {
        path: 'complete-claim',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_complete-claim_complete-claim_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./complete-claim/complete-claim.module */
          45831)).then(function (m) {
            return m.CompleteClaimPageModule;
          });
        }
      }, {
        path: 'complete-service',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_complete-service_complete-service_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./complete-service/complete-service.module */
          48949)).then(function (m) {
            return m.CompleteServicePageModule;
          });
        }
      }, {
        path: 'test',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-material___ivy_ngcc___fesm2015_ui-material_js"), __webpack_require__.e("src_app_test_test_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./test/test.module */
          16615)).then(function (m) {
            return m.TestPageModule;
          });
        }
      }, {
        path: 'test-bind',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("src_app_test-bind_test-bind_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./test-bind/test-bind.module */
          85305)).then(function (m) {
            return m.TestBindPageModule;
          });
        }
      }, {
        path: 'sitesurvey',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_sitesurvey_sitesurvey_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./sitesurvey/sitesurvey.module */
          72571)).then(function (m) {
            return m.SitesurveyPageModule;
          });
        }
      }, {
        path: 'sitesurveypics',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("common"), __webpack_require__.e("src_app_sitesurveypics_sitesurveypics_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./sitesurveypics/sitesurveypics.module */
          81028)).then(function (m) {
            return m.SitesurveypicsPageModule;
          });
        }
      }, {
        path: 'sitesurveysign',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_signature_pad_dist_signature_pad_js"), __webpack_require__.e("src_app_sitesurveysign_sitesurveysign_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./sitesurveysign/sitesurveysign.module */
          39032)).then(function (m) {
            return m.SitesurveysignPageModule;
          });
        }
      }, {
        path: 'nwapp',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_nwapp_nwapp_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./nwapp/nwapp.module */
          56254)).then(function (m) {
            return m.NwappPageModule;
          });
        }
      }, {
        path: 'iontest',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("src_app_iontest_iontest_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./iontest/iontest.module */
          96570)).then(function (m) {
            return m.IontestPageModule;
          });
        }
      }, {
        path: 'testedit',
        loadChildren: function loadChildren() {
          return Promise.all(
          /*! import() */
          [__webpack_require__.e("default-node_modules_angular_material___ivy_ngcc___fesm2015_form-field_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-ionic___ivy_ngcc___fesm2015_ui-ionic_js"), __webpack_require__.e("default-node_modules_ng-dynamic-forms_ui-material___ivy_ngcc___fesm2015_ui-material_js"), __webpack_require__.e("src_app_testedit_testedit_module_ts")]).then(__webpack_require__.bind(__webpack_require__,
          /*! ./testedit/testedit.module */
          92679)).then(function (m) {
            return m.TesteditPageModule;
          });
        }
      }, {
        path: 'querychk',
        loadChildren: function loadChildren() {
          return __webpack_require__.e(
          /*! import() */
          "src_app_querychk_querychk_module_ts").then(__webpack_require__.bind(__webpack_require__,
          /*! ./querychk/querychk.module */
          70017)).then(function (m) {
            return m.QuerychkPageModule;
          });
        }
      }];

      var _AppRoutingModule = /*#__PURE__*/_createClass(function AppRoutingModule() {
        _classCallCheck(this, AppRoutingModule);
      });

      _AppRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forRoot(routes, {
          preloadingStrategy: _angular_router__WEBPACK_IMPORTED_MODULE_3__.PreloadAllModules,
          relativeLinkResolution: 'legacy'
        })],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _AppRoutingModule);
      /***/
    },

    /***/
    55041:
    /*!**********************************!*\
      !*** ./src/app/app.component.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppComponent": function AppComponent() {
          return (
            /* binding */
            _AppComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./app.component.html */
      75158);
      /* harmony import */


      var _app_component_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./app.component.scss */
      53040);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/fingerprint-aio/ngx */
      6469);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _themes_service__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./themes.service */
      97324);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./api.service */
      51491);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _capacitor_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @capacitor/core */
      41899);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/common/http */
      53882); // import { StatusBar } from '@ionic-native/status-bar/ngx';


      var BackgroundGeolocation = (0, _capacitor_core__WEBPACK_IMPORTED_MODULE_6__.registerPlugin)("BackgroundGeolocation");

      var _AppComponent = /*#__PURE__*/function () {
        function AppComponent(platform, // private statusBar: StatusBar,
        storage, navCtrl, fio, auth, themeService, location, router, alertController, splashScreen) {
          _classCallCheck(this, AppComponent);

          this.platform = platform;
          this.storage = storage;
          this.navCtrl = navCtrl;
          this.fio = fio;
          this.auth = auth;
          this.themeService = themeService;
          this.location = location;
          this.router = router;
          this.alertController = alertController;
          this.splashScreen = splashScreen;
          this.lastTimeBackPress = 0;
          this.timePeriodToExit = 2000;
          this.initializeApp();
          this.backButtonEvent();
        }

        _createClass(AppComponent, [{
          key: "initializeApp",
          value: function initializeApp() {
            var _this59 = this;

            this.platform.ready().then(function () {
              _this59.splashScreen.hide(); // this.statusBar.backgroundColorByHexString("062c47");


              _this59.storage.get('enggid').then(function (res) {
                _this59.engineerID = res;
              }); // BackgroundGeolocation.addWatcher({
              //   backgroundMessage: "Appllication is running in Background",
              //   backgroundTitle: "HR360 is Running",
              //   requestPermissions: true,
              //   stale: false,
              //   distanceFilter: 100
              // },
              // (location, error)=> {
              //   if (error) {
              //       if (error.code === "NOT_AUTHORIZED") {
              //           if (window.confirm(
              //               "This app needs your location, " +
              //               "but does not have permission.\n\n" +
              //               "Open settings now?"
              //           )) {
              //               BackgroundGeolocation.openSettings();
              //               }
              //           }
              //           return console.error(error);
              //       }
              //       this.sendLocation(location.latitude, location.longitude, location.time);
              //       return console.log("Danish "+JSON.stringify(location));
              //   }
              // );


              _this59.splashScreen.hide();

              _this59.storage.get("debugmode").then(function (res) {
                if (res == "true") {
                  _this59.themeService.enableDebugMode();
                } else {
                  _this59.themeService.enableLiveMode();
                }
              });
            });
          }
        }, {
          key: "sendLocation",
          value: function sendLocation(lat, _long, time) {
            var params = new _angular_common_http__WEBPACK_IMPORTED_MODULE_7__.HttpParams().set('engineerid', this.engineerID).set('longitude', _long).set('latitude', lat).set('createdDate', time);
            this.auth.httpSend('AddToLocationTracker', params, 'post').subscribe(function (res) {
              console.log(res);
            }, function (err) {
              console.log(err);
            });
          }
        }, {
          key: "authenticatefinger",
          value: function authenticatefinger() {
            var _this60 = this;

            return new Promise(function (resolve, reject) {
              _this60.fio.isAvailable().then(function () {
                _this60.fio.show({
                  title: 'Biometric Authentication',
                  subtitle: 'Confirm your identity, We need to make sure this is you touch the finger print sensor to continue' // (Android Only) | optional | Default: null

                }).then(function (val) {
                  _this60.storage.set("loginCount", 2);

                  resolve("");
                }, function (err) {});
              }, function (err) {
                reject(err);
              });
            });
          }
        }, {
          key: "backButtonEvent",
          value: function backButtonEvent() {
            var _this61 = this;

            this.platform.backButton.subscribeWithPriority(0, function () {
              console.log("Danish" + _this61.router.url);

              _this61.routerOutlets.forEach(function (outlet) {
                return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(_this61, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee5() {
                  return _regeneratorRuntime().wrap(function _callee5$(_context5) {
                    while (1) {
                      switch (_context5.prev = _context5.next) {
                        case 0:
                          if (!(this.router.url === '/tabs/tab1' || this.router.url === '/login' || this.router.url === '/')) {
                            _context5.next = 4;
                            break;
                          }

                          if (new Date().getTime() - this.lastTimeBackPress >= this.timePeriodToExit) {
                            this.lastTimeBackPress = new Date().getTime();
                            this.presentAlertConfirm();
                          } else {
                            navigator['app'].exitApp();
                          }

                          _context5.next = 7;
                          break;

                        case 4:
                          if (!(this.router.url != '/tabs/tab1')) {
                            _context5.next = 7;
                            break;
                          }

                          _context5.next = 7;
                          return this.router.navigate(['/tabs/tab1']);

                        case 7:
                        case "end":
                          return _context5.stop();
                      }
                    }
                  }, _callee5, this);
                }));
              });
            });
          }
        }, {
          key: "presentAlertConfirm",
          value: function presentAlertConfirm() {
            return (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__awaiter)(this, void 0, void 0, /*#__PURE__*/_regeneratorRuntime().mark(function _callee6() {
              var alert;
              return _regeneratorRuntime().wrap(function _callee6$(_context6) {
                while (1) {
                  switch (_context6.prev = _context6.next) {
                    case 0:
                      _context6.next = 2;
                      return this.alertController.create({
                        // header: 'Confirm!',
                        message: 'Are you sure you want to close the app?',
                        buttons: [{
                          text: 'Cancel',
                          role: 'cancel',
                          cssClass: 'secondary',
                          handler: function handler(blah) {}
                        }, {
                          text: 'Close App',
                          handler: function handler() {
                            navigator['app'].exitApp();
                          }
                        }]
                      });

                    case 2:
                      alert = _context6.sent;
                      _context6.next = 5;
                      return alert.present();

                    case 5:
                    case "end":
                      return _context6.stop();
                  }
                }
              }, _callee6, this);
            }));
          }
        }]);

        return AppComponent;
      }();

      _AppComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.Platform
        }, {
          type: _ionic_storage__WEBPACK_IMPORTED_MODULE_10__.Storage
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.NavController
        }, {
          type: _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_2__.FingerprintAIO
        }, {
          type: _api_service__WEBPACK_IMPORTED_MODULE_4__.ApiService
        }, {
          type: _themes_service__WEBPACK_IMPORTED_MODULE_3__.ThemesService
        }, {
          type: _angular_common__WEBPACK_IMPORTED_MODULE_11__.Location
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_12__.Router
        }, {
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_9__.AlertController
        }, {
          type: _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_5__.SplashScreen
        }];
      };

      _AppComponent.propDecorators = {
        routerOutlets: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_13__.ViewChildren,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_9__.IonRouterOutlet]
        }]
      };
      _AppComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_8__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_13__.Component)({
        selector: 'app-root',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_app_component_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_app_component_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _AppComponent);
      /***/
    },

    /***/
    36747:
    /*!*******************************!*\
      !*** ./src/app/app.module.ts ***!
      \*******************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AppModule": function AppModule() {
          return (
            /* binding */
            _AppModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_15__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_16__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__ = __webpack_require__(
      /*! @angular/platform-browser */
      71570);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_26__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @ionic-native/geolocation/ngx */
      89131);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_18__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic-native/splash-screen/ngx */
      64967);
      /* harmony import */


      var _ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @ionic-native/status-bar/ngx */
      73588);
      /* harmony import */


      var _app_routing_module__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! ./app-routing.module */
      90158);
      /* harmony import */


      var _app_component__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! ./app.component */
      55041);
      /* harmony import */


      var _angular_common_http__WEBPACK_IMPORTED_MODULE_20__ = __webpack_require__(
      /*! @angular/common/http */
      53882);
      /* harmony import */


      var ng_speed_test__WEBPACK_IMPORTED_MODULE_22__ = __webpack_require__(
      /*! ng-speed-test */
      2314);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_23__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @ionic-native/fingerprint-aio/ngx */
      6469);
      /* harmony import */


      var _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic-native/native-geocoder/ngx */
      5954);
      /* harmony import */


      var _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @awesome-cordova-plugins/android-permissions/ngx */
      33293);
      /* harmony import */


      var _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(
      /*! @ionic-native/location-accuracy/ngx */
      77607);
      /* harmony import */


      var _ionic_storage__WEBPACK_IMPORTED_MODULE_19__ = __webpack_require__(
      /*! @ionic/storage */
      12314);
      /* harmony import */


      var _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(
      /*! @ionic-native/keyboard/ngx */
      616);
      /* harmony import */


      var _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(
      /*! @ionic-native/in-app-browser/ngx */
      1331);
      /* harmony import */


      var _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__ = __webpack_require__(
      /*! @angular/platform-browser/animations */
      20718);
      /* harmony import */


      var _app_validator__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(
      /*! ./app.validator */
      32028);
      /* harmony import */


      var _scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_12__ = __webpack_require__(
      /*! ./scroll-to-bottom.directive */
      20116);
      /* harmony import */


      var _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_13__ = __webpack_require__(
      /*! ./modalpopup/modal-example.component */
      91025);
      /* harmony import */


      var _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__ = __webpack_require__(
      /*! @angular/cdk/scrolling */
      42791);
      /* harmony import */


      var _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__ = __webpack_require__(
      /*! @awesome-cordova-plugins/sqlite/ngx */
      38298);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_25__ = __webpack_require__(
      /*! @angular/common */
      54364); // import { SQLite } from '@ionic-native/sqlite/ngx';


      var _AppModule = /*#__PURE__*/_createClass(function AppModule() {
        _classCallCheck(this, AppModule);
      });

      _AppModule = (0, tslib__WEBPACK_IMPORTED_MODULE_15__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_16__.NgModule)({
        declarations: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent, _scroll_to_bottom_directive__WEBPACK_IMPORTED_MODULE_12__.ScrollToBottomDirective, _modalpopup_modal_example_component__WEBPACK_IMPORTED_MODULE_13__.ModalExampleComponent],
        entryComponents: [],
        imports: [_angular_platform_browser__WEBPACK_IMPORTED_MODULE_17__.BrowserModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicModule.forRoot(), _ionic_storage__WEBPACK_IMPORTED_MODULE_19__.IonicStorageModule.forRoot(), _app_routing_module__WEBPACK_IMPORTED_MODULE_3__.AppRoutingModule, _angular_common_http__WEBPACK_IMPORTED_MODULE_20__.HttpClientModule, _angular_platform_browser_animations__WEBPACK_IMPORTED_MODULE_21__.NoopAnimationsModule, ng_speed_test__WEBPACK_IMPORTED_MODULE_22__.SpeedTestModule, _angular_forms__WEBPACK_IMPORTED_MODULE_23__.FormsModule, _angular_cdk_scrolling__WEBPACK_IMPORTED_MODULE_24__.ScrollingModule],
        providers: [_ionic_native_status_bar_ngx__WEBPACK_IMPORTED_MODULE_2__.StatusBar, _ionic_native_splash_screen_ngx__WEBPACK_IMPORTED_MODULE_1__.SplashScreen, _awesome_cordova_plugins_sqlite_ngx__WEBPACK_IMPORTED_MODULE_14__.SQLite, _ionic_native_geolocation_ngx__WEBPACK_IMPORTED_MODULE_0__.Geolocation, _ionic_native_keyboard_ngx__WEBPACK_IMPORTED_MODULE_9__.Keyboard, _ionic_native_in_app_browser_ngx__WEBPACK_IMPORTED_MODULE_10__.InAppBrowser, _ionic_native_native_geocoder_ngx__WEBPACK_IMPORTED_MODULE_6__.NativeGeocoder, _awesome_cordova_plugins_android_permissions_ngx__WEBPACK_IMPORTED_MODULE_7__.AndroidPermissions, _ionic_native_location_accuracy_ngx__WEBPACK_IMPORTED_MODULE_8__.LocationAccuracy, _angular_common__WEBPACK_IMPORTED_MODULE_25__.DatePipe, _ionic_native_fingerprint_aio_ngx__WEBPACK_IMPORTED_MODULE_5__.FingerprintAIO, {
          provide: _angular_router__WEBPACK_IMPORTED_MODULE_26__.RouteReuseStrategy,
          useClass: _ionic_angular__WEBPACK_IMPORTED_MODULE_18__.IonicRouteStrategy
        }, {
          provide: _angular_forms__WEBPACK_IMPORTED_MODULE_23__.NG_VALIDATORS,
          useValue: _app_validator__WEBPACK_IMPORTED_MODULE_11__.customValidator,
          multi: true
        }],
        bootstrap: [_app_component__WEBPACK_IMPORTED_MODULE_4__.AppComponent]
      })], _AppModule);
      /***/
    },

    /***/
    32028:
    /*!**********************************!*\
      !*** ./src/app/app.validator.ts ***!
      \**********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "customValidator": function customValidator() {
          return (
            /* binding */
            _customValidator
          );
        },

        /* harmony export */
        "customValidator100": function customValidator100() {
          return (
            /* binding */
            _customValidator2
          );
        }
        /* harmony export */

      });

      function _customValidator(control) {
        /// 0.0001
        var decRegex = /^[0](\.\d{4})$/;
        console.log("val  " + decRegex.test(control.value));
        var hasError = control.value ? !decRegex.test(control.value) : false; //const hasError = control.value ? (control.value as string).startsWith("abc") : false;

        return hasError ? {
          customValidator: true
        } : null;
      }

      function _customValidator2(control) {
        /// 100
        var decRegex = /^(\d{1,2}(\.\d{1,2})?|100)$/;
        console.log("val  " + decRegex.test(control.value));
        var hasError = control.value ? !decRegex.test(control.value) : false; //const hasError = control.value ? (control.value as string).startsWith("abc") : false;

        return hasError ? {
          customValidator: true
        } : null;
      }
      /***/

    },

    /***/
    73986:
    /*!********************************************!*\
      !*** ./src/app/guards/auto-login.guard.ts ***!
      \********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "AutoLoginGuard": function AutoLoginGuard() {
          return (
            /* binding */
            _AutoLoginGuard
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/router */
      71258);
      /* harmony import */


      var _api_service__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ../api.service */
      51491);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! rxjs/operators */
      9170);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! rxjs/operators */
      53466);
      /* harmony import */


      var rxjs_operators__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! rxjs/operators */
      33927);

      var _AutoLoginGuard = /*#__PURE__*/function () {
        function AutoLoginGuard(authService, router) {
          _classCallCheck(this, AutoLoginGuard);

          this.authService = authService;
          this.router = router;
          console.log("Danish inside Auto Login Guard");
          this.authService.loadToken();
        }

        _createClass(AutoLoginGuard, [{
          key: "canLoad",
          value: function canLoad() {
            var _this62 = this;

            console.log(this.authService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (val) {
              return val !== null;
            })));
            return this.authService.isAuthenticated.pipe((0, rxjs_operators__WEBPACK_IMPORTED_MODULE_1__.filter)(function (val) {
              return val !== null;
            }), // Filter out initial Behaviour subject value
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_2__.take)(1), // Otherwise the Observable doesn't complete!
            (0, rxjs_operators__WEBPACK_IMPORTED_MODULE_3__.map)(function (isAuthenticated) {
              console.log('inside automatic login guard value ' + isAuthenticated);

              if (isAuthenticated) {
                // Directly open inside area       
                console.log('value is true that is why showing dashboard page');

                _this62.router.navigate(['tabs']);
              } else {
                // Simply allow access to the login
                console.log('value is false that is why showing login page');
                return true;
              }
            }));
          }
        }]);

        return AutoLoginGuard;
      }();

      _AutoLoginGuard.ctorParameters = function () {
        return [{
          type: _api_service__WEBPACK_IMPORTED_MODULE_0__.ApiService
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_4__.Router
        }];
      };

      _AutoLoginGuard = (0, tslib__WEBPACK_IMPORTED_MODULE_5__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_6__.Injectable)({
        providedIn: 'root'
      })], _AutoLoginGuard);
      /***/
    },

    /***/
    91025:
    /*!*******************************************************!*\
      !*** ./src/app/modalpopup/modal-example.component.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ModalExampleComponent": function ModalExampleComponent() {
          return (
            /* binding */
            _ModalExampleComponent
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_example_component_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./modal-example.component.html */
      57274);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @ionic/angular */
      7602);

      var _ModalExampleComponent = /*#__PURE__*/function () {
        function ModalExampleComponent(modalCtrl) {
          _classCallCheck(this, ModalExampleComponent);

          this.modalCtrl = modalCtrl;
          this.dataList = [];
          this.topLimit = 30;
        }

        _createClass(ModalExampleComponent, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dataList = this.data.slice(0, this.topLimit);
          }
        }, {
          key: "cancel",
          value: function cancel() {
            return this.modalCtrl.dismiss(null, 'cancel');
          }
        }, {
          key: "confirm",
          value: function confirm(name) {
            return this.modalCtrl.dismiss(name, 'confirm');
          }
        }, {
          key: "loadData",
          value: function loadData(event) {
            var _this63 = this;

            setTimeout(function () {
              console.log('Done');
              _this63.topLimit += 30;
              _this63.dataList = _this63.data.slice(0, _this63.topLimit);
              event.target.complete(); // App logic to determine if all data is loaded
              // and disable the infinite scroll

              if (_this63.data.length == _this63.dataList.length) {
                event.target.disabled = true;
              }
            }, 100);
          }
        }, {
          key: "toggleInfiniteScroll",
          value: function toggleInfiniteScroll() {
            this.infiniteScroll.disabled = !this.infiniteScroll.disabled;
          }
        }]);

        return ModalExampleComponent;
      }();

      _ModalExampleComponent.ctorParameters = function () {
        return [{
          type: _ionic_angular__WEBPACK_IMPORTED_MODULE_1__.ModalController
        }];
      };

      _ModalExampleComponent.propDecorators = {
        infiniteScroll: [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_2__.ViewChild,
          args: [_ionic_angular__WEBPACK_IMPORTED_MODULE_1__.IonInfiniteScroll]
        }]
      };
      _ModalExampleComponent = (0, tslib__WEBPACK_IMPORTED_MODULE_3__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.Component)({
        selector: 'app-modal-example',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_modal_example_component_html__WEBPACK_IMPORTED_MODULE_0__["default"]
      })], _ModalExampleComponent);
      /***/
    },

    /***/
    20116:
    /*!***********************************************!*\
      !*** ./src/app/scroll-to-bottom.directive.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ScrollToBottomDirective": function ScrollToBottomDirective() {
          return (
            /* binding */
            _ScrollToBottomDirective
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ScrollToBottomDirective = /*#__PURE__*/function () {
        function ScrollToBottomDirective(_el) {
          _classCallCheck(this, ScrollToBottomDirective);

          this._el = _el;
        } // public ngAfterViewInit() {
        //   const el: HTMLDivElement = this._el.nativeElement;
        //   // Does not work as scrollHeight === offsetHeight
        //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
        //   // This work but we see scroll moving
        //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
        // }
        // public ngOnInit() {
        //   const el: HTMLDivElement = this._el.nativeElement;
        //   // Does not work as scrollHeight === offsetHeight
        //   el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
        //   // This work but we see scroll moving
        //   setTimeout(() => el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight));
        // }


        _createClass(ScrollToBottomDirective, [{
          key: "scrollToBottom",
          value: function scrollToBottom() {
            var el = this._el.nativeElement;
            el.scrollTop = Math.max(0, el.scrollHeight - el.offsetHeight);
          }
        }]);

        return ScrollToBottomDirective;
      }();

      _ScrollToBottomDirective.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.ElementRef
        }];
      };

      _ScrollToBottomDirective = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Directive)({
        selector: '[scroll-to-bottom]'
      })], _ScrollToBottomDirective);
      /***/
    },

    /***/
    97324:
    /*!***********************************!*\
      !*** ./src/app/themes.service.ts ***!
      \***********************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "ThemesService": function ThemesService() {
          return (
            /* binding */
            _ThemesService
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! @angular/core */
      2316);

      var _ThemesService = /*#__PURE__*/function () {
        function ThemesService(renderFactory, document) {
          _classCallCheck(this, ThemesService);

          this.renderFactory = renderFactory;
          this.document = document;
          this.renderer = this.renderFactory.createRenderer(null, null);
        }

        _createClass(ThemesService, [{
          key: "enableDebugMode",
          value: function enableDebugMode() {
            console.log("Inside Debugmode");
            this.renderer.addClass(this.document.body, "debug-theme");
          }
        }, {
          key: "enableLiveMode",
          value: function enableLiveMode() {
            console.log("Inside Live mode");
            this.renderer.removeClass(this.document.body, "debug-theme");
          }
        }]);

        return ThemesService;
      }();

      _ThemesService.ctorParameters = function () {
        return [{
          type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.RendererFactory2
        }, {
          type: Document,
          decorators: [{
            type: _angular_core__WEBPACK_IMPORTED_MODULE_0__.Inject,
            args: [_angular_common__WEBPACK_IMPORTED_MODULE_1__.DOCUMENT]
          }]
        }];
      };

      _ThemesService = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_0__.Injectable)({
        providedIn: 'root'
      })], _ThemesService);
      /***/
    },

    /***/
    92340:
    /*!*****************************************!*\
      !*** ./src/environments/environment.ts ***!
      \*****************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "environment": function environment() {
          return (
            /* binding */
            _environment
          );
        }
        /* harmony export */

      }); // This file can be replaced during build by using the `fileReplacements` array.
      // `ng build --prod` replaces `environment.ts` with `environment.prod.ts`.
      // The list of file replacements can be found in `angular.json`.


      var _environment = {
        production: false
      };
      /*
       * For easier debugging in development mode, you can import the following file
       * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
       *
       * This import should be commented out in production mode because it will have a negative impact
       * on performance if an error is thrown.
       */
      // import 'zone.js/plugins/zone-error';  // Included with Angular CLI.

      /***/
    },

    /***/
    14431:
    /*!*********************!*\
      !*** ./src/main.ts ***!
      \*********************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/platform-browser-dynamic */
      61882);
      /* harmony import */


      var _app_app_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./app/app.module */
      36747);
      /* harmony import */


      var _environments_environment__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./environments/environment */
      92340);

      if (_environments_environment__WEBPACK_IMPORTED_MODULE_1__.environment.production) {
        (0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.enableProdMode)();
      }

      (0, _angular_platform_browser_dynamic__WEBPACK_IMPORTED_MODULE_3__.platformBrowserDynamic)().bootstrapModule(_app_app_module__WEBPACK_IMPORTED_MODULE_0__.AppModule)["catch"](function (err) {
        return console.log(JSON.stringify(err));
      });
      /***/
    },

    /***/
    50863:
    /*!******************************************************************************************************************************************!*\
      !*** ./node_modules/@ionic/core/dist/esm/ lazy ^\.\/.*\.entry\.js$ include: \.entry\.js$ exclude: \.system\.entry\.js$ namespace object ***!
      \******************************************************************************************************************************************/

    /***/
    function _(module, __unused_webpack_exports, __webpack_require__) {
      var map = {
        "./ion-action-sheet.entry.js": [90733, "common", "node_modules_ionic_core_dist_esm_ion-action-sheet_entry_js"],
        "./ion-alert.entry.js": [20985, "common", "node_modules_ionic_core_dist_esm_ion-alert_entry_js"],
        "./ion-app_8.entry.js": [93899, "common", "node_modules_ionic_core_dist_esm_ion-app_8_entry_js"],
        "./ion-avatar_3.entry.js": [5121, "common", "node_modules_ionic_core_dist_esm_ion-avatar_3_entry_js"],
        "./ion-back-button.entry.js": [52960, "common", "node_modules_ionic_core_dist_esm_ion-back-button_entry_js"],
        "./ion-backdrop.entry.js": [45473, "node_modules_ionic_core_dist_esm_ion-backdrop_entry_js"],
        "./ion-button_2.entry.js": [19787, "common", "node_modules_ionic_core_dist_esm_ion-button_2_entry_js"],
        "./ion-card_5.entry.js": [66165, "common", "node_modules_ionic_core_dist_esm_ion-card_5_entry_js"],
        "./ion-checkbox.entry.js": [69569, "common", "node_modules_ionic_core_dist_esm_ion-checkbox_entry_js"],
        "./ion-chip.entry.js": [35119, "common", "node_modules_ionic_core_dist_esm_ion-chip_entry_js"],
        "./ion-col_3.entry.js": [90799, "node_modules_ionic_core_dist_esm_ion-col_3_entry_js"],
        "./ion-datetime_3.entry.js": [68918, "common", "node_modules_ionic_core_dist_esm_ion-datetime_3_entry_js"],
        "./ion-fab_3.entry.js": [94028, "common", "node_modules_ionic_core_dist_esm_ion-fab_3_entry_js"],
        "./ion-img.entry.js": [98107, "node_modules_ionic_core_dist_esm_ion-img_entry_js"],
        "./ion-infinite-scroll_2.entry.js": [72178, "node_modules_ionic_core_dist_esm_ion-infinite-scroll_2_entry_js"],
        "./ion-input.entry.js": [20123, "common", "node_modules_ionic_core_dist_esm_ion-input_entry_js"],
        "./ion-item-option_3.entry.js": [18706, "common", "node_modules_ionic_core_dist_esm_ion-item-option_3_entry_js"],
        "./ion-item_8.entry.js": [12099, "common", "node_modules_ionic_core_dist_esm_ion-item_8_entry_js"],
        "./ion-loading.entry.js": [84868, "common", "node_modules_ionic_core_dist_esm_ion-loading_entry_js"],
        "./ion-menu_3.entry.js": [54377, "common", "node_modules_ionic_core_dist_esm_ion-menu_3_entry_js"],
        "./ion-modal.entry.js": [15678, "common", "node_modules_ionic_core_dist_esm_ion-modal_entry_js"],
        "./ion-nav_2.entry.js": [16735, "common", "node_modules_ionic_core_dist_esm_ion-nav_2_entry_js"],
        "./ion-popover.entry.js": [87686, "common", "node_modules_ionic_core_dist_esm_ion-popover_entry_js"],
        "./ion-progress-bar.entry.js": [48555, "common", "node_modules_ionic_core_dist_esm_ion-progress-bar_entry_js"],
        "./ion-radio_2.entry.js": [30568, "common", "node_modules_ionic_core_dist_esm_ion-radio_2_entry_js"],
        "./ion-range.entry.js": [6231, "common", "node_modules_ionic_core_dist_esm_ion-range_entry_js"],
        "./ion-refresher_2.entry.js": [45772, "common", "node_modules_ionic_core_dist_esm_ion-refresher_2_entry_js"],
        "./ion-reorder_2.entry.js": [14977, "common", "node_modules_ionic_core_dist_esm_ion-reorder_2_entry_js"],
        "./ion-ripple-effect.entry.js": [42886, "node_modules_ionic_core_dist_esm_ion-ripple-effect_entry_js"],
        "./ion-route_4.entry.js": [54990, "common", "node_modules_ionic_core_dist_esm_ion-route_4_entry_js"],
        "./ion-searchbar.entry.js": [13810, "common", "node_modules_ionic_core_dist_esm_ion-searchbar_entry_js"],
        "./ion-segment_2.entry.js": [2446, "common", "node_modules_ionic_core_dist_esm_ion-segment_2_entry_js"],
        "./ion-select_3.entry.js": [47619, "common", "node_modules_ionic_core_dist_esm_ion-select_3_entry_js"],
        "./ion-slide_2.entry.js": [28393, "node_modules_ionic_core_dist_esm_ion-slide_2_entry_js"],
        "./ion-spinner.entry.js": [56281, "common", "node_modules_ionic_core_dist_esm_ion-spinner_entry_js"],
        "./ion-split-pane.entry.js": [35932, "node_modules_ionic_core_dist_esm_ion-split-pane_entry_js"],
        "./ion-tab-bar_2.entry.js": [57970, "common", "node_modules_ionic_core_dist_esm_ion-tab-bar_2_entry_js"],
        "./ion-tab_2.entry.js": [80298, "common", "node_modules_ionic_core_dist_esm_ion-tab_2_entry_js"],
        "./ion-text.entry.js": [71006, "common", "node_modules_ionic_core_dist_esm_ion-text_entry_js"],
        "./ion-textarea.entry.js": [74783, "common", "node_modules_ionic_core_dist_esm_ion-textarea_entry_js"],
        "./ion-toast.entry.js": [62749, "common", "node_modules_ionic_core_dist_esm_ion-toast_entry_js"],
        "./ion-toggle.entry.js": [55404, "common", "node_modules_ionic_core_dist_esm_ion-toggle_entry_js"],
        "./ion-virtual-scroll.entry.js": [39043, "node_modules_ionic_core_dist_esm_ion-virtual-scroll_entry_js"]
      };

      function webpackAsyncContext(req) {
        if (!__webpack_require__.o(map, req)) {
          return Promise.resolve().then(function () {
            var e = new Error("Cannot find module '" + req + "'");
            e.code = 'MODULE_NOT_FOUND';
            throw e;
          });
        }

        var ids = map[req],
            id = ids[0];
        return Promise.all(ids.slice(1).map(__webpack_require__.e)).then(function () {
          return __webpack_require__(id);
        });
      }

      webpackAsyncContext.keys = function () {
        return Object.keys(map);
      };

      webpackAsyncContext.id = 50863;
      module.exports = webpackAsyncContext;
      /***/
    },

    /***/
    75158:
    /*!***************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/app.component.html ***!
      \***************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-app>\n  <ion-router-outlet></ion-router-outlet>\n</ion-app>\n";
      /***/
    },

    /***/
    57274:
    /*!************************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/modalpopup/modal-example.component.html ***!
      \************************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      "use strict";

      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-header>\n  <ion-toolbar color=\"secondary\">\n    <ion-buttons slot=\"start\">\n      <ion-button color=\"medium\" (click)=\"cancel()\">Cancel</ion-button>\n    </ion-buttons>\n    <ion-title>Select {{msg}} Name</ion-title>\n  </ion-toolbar>\n</ion-header>\n<ion-content class=\"ion-padding\">\n\n  <ion-item (click)='confirm(\"other\")'>\n    <ion-label>Other</ion-label>\n  </ion-item>\n  <ion-item *ngFor=\"let name of dataList\" (click)='confirm(name)'>\n    <ion-label>{{name}}</ion-label>\n  </ion-item>\n\n\n\n  <ion-infinite-scroll threshold=\"100px\" (ionInfinite)=\"loadData($event)\">\n    <ion-infinite-scroll-content\n      loadingSpinner=\"bubbles\"\n      loadingText=\"Loading more data...\">\n    </ion-infinite-scroll-content>\n  </ion-infinite-scroll>\n\n</ion-content>";
      /***/
    },

    /***/
    53040:
    /*!************************************!*\
      !*** ./src/app/app.component.scss ***!
      \************************************/

    /***/
    function _(module) {
      "use strict";

      module.exports = "\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IiIsImZpbGUiOiJhcHAuY29tcG9uZW50LnNjc3MifQ== */";
      /***/
    }
  },
  /******/
  function (__webpack_require__) {
    // webpackRuntimeModules

    /******/
    var __webpack_exec__ = function __webpack_exec__(moduleId) {
      return __webpack_require__(__webpack_require__.s = moduleId);
    };
    /******/


    __webpack_require__.O(0, ["vendor"], function () {
      return __webpack_exec__(14431);
    });
    /******/


    var __webpack_exports__ = __webpack_require__.O();
    /******/

  }]);
})();
//# sourceMappingURL=main-es5.js.map