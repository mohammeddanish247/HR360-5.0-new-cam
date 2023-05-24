(function () {
  "use strict";

  function _defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, _toPropertyKey(descriptor.key), descriptor); } }

  function _createClass(Constructor, protoProps, staticProps) { if (protoProps) _defineProperties(Constructor.prototype, protoProps); if (staticProps) _defineProperties(Constructor, staticProps); Object.defineProperty(Constructor, "prototype", { writable: false }); return Constructor; }

  function _toPropertyKey(arg) { var key = _toPrimitive(arg, "string"); return typeof key === "symbol" ? key : String(key); }

  function _toPrimitive(input, hint) { if (typeof input !== "object" || input === null) return input; var prim = input[Symbol.toPrimitive]; if (prim !== undefined) { var res = prim.call(input, hint || "default"); if (typeof res !== "object") return res; throw new TypeError("@@toPrimitive must return a primitive value."); } return (hint === "string" ? String : Number)(input); }

  function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

  (self["webpackChunkhr360"] = self["webpackChunkhr360"] || []).push([["src_app_test-bind_test-bind_module_ts"], {
    /***/
    31871:
    /*!*******************************************************!*\
      !*** ./src/app/test-bind/test-bind-routing.module.ts ***!
      \*******************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestBindPageRoutingModule": function TestBindPageRoutingModule() {
          return (
            /* binding */
            _TestBindPageRoutingModule
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


      var _test_bind_page__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-bind.page */
      91039);

      var routes = [{
        path: '',
        component: _test_bind_page__WEBPACK_IMPORTED_MODULE_0__.TestBindPage
      }];

      var _TestBindPageRoutingModule = /*#__PURE__*/_createClass(function TestBindPageRoutingModule() {
        _classCallCheck(this, TestBindPageRoutingModule);
      });

      _TestBindPageRoutingModule = (0, tslib__WEBPACK_IMPORTED_MODULE_1__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_2__.NgModule)({
        imports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule.forChild(routes)],
        exports: [_angular_router__WEBPACK_IMPORTED_MODULE_3__.RouterModule]
      })], _TestBindPageRoutingModule);
      /***/
    },

    /***/
    85305:
    /*!***********************************************!*\
      !*** ./src/app/test-bind/test-bind.module.ts ***!
      \***********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestBindPageModule": function TestBindPageModule() {
          return (
            /* binding */
            _TestBindPageModule
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_common__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! @angular/common */
      54364);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _ionic_angular__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(
      /*! @ionic/angular */
      7602);
      /* harmony import */


      var _test_bind_routing_module__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! ./test-bind-routing.module */
      31871);
      /* harmony import */


      var _test_bind_page__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test-bind.page */
      91039);
      /* harmony import */


      var _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(
      /*! @angular/material/form-field */
      65788);

      var _TestBindPageModule = /*#__PURE__*/_createClass(function TestBindPageModule() {
        _classCallCheck(this, TestBindPageModule);
      });

      _TestBindPageModule = (0, tslib__WEBPACK_IMPORTED_MODULE_2__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_3__.NgModule)({
        imports: [_angular_common__WEBPACK_IMPORTED_MODULE_4__.CommonModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.FormsModule, _ionic_angular__WEBPACK_IMPORTED_MODULE_6__.IonicModule, _test_bind_routing_module__WEBPACK_IMPORTED_MODULE_0__.TestBindPageRoutingModule, _angular_material_form_field__WEBPACK_IMPORTED_MODULE_7__.MatFormFieldModule, _angular_forms__WEBPACK_IMPORTED_MODULE_5__.ReactiveFormsModule],
        declarations: [_test_bind_page__WEBPACK_IMPORTED_MODULE_1__.TestBindPage]
      })], _TestBindPageModule);
      /***/
    },

    /***/
    91039:
    /*!*********************************************!*\
      !*** ./src/app/test-bind/test-bind.page.ts ***!
      \*********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "TestBindPage": function TestBindPage() {
          return (
            /* binding */
            _TestBindPage
          );
        }
        /* harmony export */

      });
      /* harmony import */


      var tslib__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(
      /*! tslib */
      3786);
      /* harmony import */


      var _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_bind_page_html__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(
      /*! !./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./test-bind.page.html */
      9657);
      /* harmony import */


      var _test_bind_page_scss__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(
      /*! ./test-bind.page.scss */
      78045);
      /* harmony import */


      var _angular_core__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(
      /*! @angular/core */
      2316);
      /* harmony import */


      var _angular_forms__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(
      /*! @angular/forms */
      1707);
      /* harmony import */


      var _angular_router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(
      /*! @angular/router */
      71258);

      var _TestBindPage = /*#__PURE__*/function () {
        function TestBindPage(formBuilder, router) {
          _classCallCheck(this, TestBindPage);

          this.formBuilder = formBuilder;
          this.router = router;
          this.submitted = false;
        }

        _createClass(TestBindPage, [{
          key: "ngOnInit",
          value: function ngOnInit() {
            this.dynamicForm = this.formBuilder.group({
              numberOfTickets: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
              tickets: new _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormArray([])
            });
          } // convenience getters for easy access to form fields

        }, {
          key: "f",
          get: function get() {
            return this.dynamicForm.controls;
          }
        }, {
          key: "t",
          get: function get() {
            return this.f.tickets;
          }
        }, {
          key: "ticketFormGroups",
          get: function get() {
            return this.t.controls;
          }
        }, {
          key: "onChangeTickets",
          value: function onChangeTickets(e) {
            var numberOfTickets = e.target.value || 0;

            if (this.t.length < numberOfTickets) {
              for (var i = this.t.length; i < numberOfTickets; i++) {
                this.t.push(this.formBuilder.group({
                  name: ['', _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required],
                  email: ['', [_angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.required, _angular_forms__WEBPACK_IMPORTED_MODULE_2__.Validators.email]]
                }));
              }
            } else {
              for (var _i = this.t.length; _i >= numberOfTickets; _i--) {
                this.t.removeAt(_i);
              }
            }
          }
        }, {
          key: "onReset",
          value: function onReset() {
            // reset whole form back to initial state
            this.submitted = false;
            this.dynamicForm.reset();
            this.t.clear();
          }
        }, {
          key: "onClear",
          value: function onClear() {
            // clear errors and reset ticket fields
            this.submitted = false;
            this.t.reset();
          }
        }, {
          key: "onBuy",
          value: function onBuy() {
            this.router.navigate(['dynamicform']);
          }
        }]);

        return TestBindPage;
      }();

      _TestBindPage.ctorParameters = function () {
        return [{
          type: _angular_forms__WEBPACK_IMPORTED_MODULE_2__.FormBuilder
        }, {
          type: _angular_router__WEBPACK_IMPORTED_MODULE_3__.Router
        }];
      };

      _TestBindPage = (0, tslib__WEBPACK_IMPORTED_MODULE_4__.__decorate)([(0, _angular_core__WEBPACK_IMPORTED_MODULE_5__.Component)({
        selector: 'app-test-bind',
        template: _D_Stable_HR360_stable_ionic5_0_master_node_modules_ngtools_webpack_src_loaders_direct_resource_js_test_bind_page_html__WEBPACK_IMPORTED_MODULE_0__["default"],
        styles: [_test_bind_page_scss__WEBPACK_IMPORTED_MODULE_1__]
      })], _TestBindPage);
      /***/
    },

    /***/
    9657:
    /*!**************************************************************************************************************!*\
      !*** ./node_modules/@ngtools/webpack/src/loaders/direct-resource.js!./src/app/test-bind/test-bind.page.html ***!
      \**************************************************************************************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony default export */


      __webpack_exports__["default"] = "<ion-content>\n\n    <ion-grid class=\"grid1\">\n    \n        <ion-row class=\"row1\">\n            <ion-col>\n    \n            </ion-col>\n        </ion-row>\n    \n        <ion-row class=\"row2\">\n            <ion-col>\n    \n            </ion-col>\n        </ion-row>\n    \n    </ion-grid>\n    \n    <ion-slide>\n        <div class=\"contaier-login\">\n            <ion-grid>\n                <ion-row>\n                    <ion-col>\n                        <h1>Iniciar Sesión</h1>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-list>\n    \n                            <ion-item>\n                                <ion-icon name=\"person\" class=\"icon-login\"></ion-icon>\n                                <ion-input name=\"user\" type=\"text\" required placeholder=\"Usuario\"></ion-input>\n                            </ion-item>\n                            <br />\n                            <ion-item>\n                                <ion-icon name=\"lock\" class=\"icon-login\"></ion-icon>\n                                <ion-input name=\"password\" type=\"password\" required placeholder=\"Contraseña\"></ion-input>\n                            </ion-item>\n    \n                        </ion-list>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-button type=\"submit\" fill=\"solid\" expand=\"full\">\n                            Entrar\n                        </ion-button>\n                    </ion-col>\n                </ion-row>\n                <ion-row>\n                    <ion-col>\n                        <ion-label>\n                            <h3>¿Olvido la contraseña?</h3>\n                        </ion-label>\n                    </ion-col>\n                </ion-row>\n            </ion-grid>\n        </div>\n    </ion-slide>\n\n<!-- <form [formGroup]=\"dynamicForm\" (ngSubmit)=\"onSubmit()\">\n    <div class=\"card m-3\">\n        <h5 class=\"card-header\">Angular 10 Dynamic Reactive Forms Example</h5>\n\n\n        <div class=\"card-body border-bottom\">\n            <div class=\"form-row\">\n                <div class=\"form-group\">\n                    <label>Number of Tickets</label>\n                    <select formControlName=\"numberOfTickets\" class=\"form-control\" (change)=\"onChangeTickets($event)\" [ngClass]=\"{ 'is-invalid': submitted && f.numberOfTickets.errors }\">\n                        <option value=\"\"></option>\n                        <option *ngFor=\"let i of [1,2,3,4,5,6,7,8,9,10]\">{{i}}</option>\n                    </select>\n                    <div *ngIf=\"submitted && f.numberOfTickets.errors\" class=\"invalid-feedback\">\n                        <div *ngIf=\"f.numberOfTickets.errors.required\">Number of tickets is required</div>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n        \n        <div *ngFor=\"let ticket of ticketFormGroups; let i = index\" class=\"list-group list-group-flush\">\n            <div class=\"list-group-item\">\n                <h5 class=\"card-title\">Ticket {{i + 1}}</h5>\n                <div [formGroup]=\"ticket\" class=\"form-row\">\n                    <div class=\"form-group col-6\">\n                        <label>Name</label>\n                        <input type=\"text\" formControlName=\"name\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && ticket.controls.name.errors }\" />\n                        <div *ngIf=\"submitted && ticket.controls.name.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ticket.controls.name.errors.required\">Name is required</div>\n                        </div>\n                    </div>\n                    <div class=\"form-group col-6\">\n                        <label>Email</label>\n                        <input type=\"text\" formControlName=\"email\" class=\"form-control\" [ngClass]=\"{ 'is-invalid': submitted && ticket.controls.email.errors }\" />\n                        <div *ngIf=\"submitted && ticket.controls.email.errors\" class=\"invalid-feedback\">\n                            <div *ngIf=\"ticket.controls.email.errors.required\">Email is required</div>\n                            <div *ngIf=\"ticket.controls.email.errors.email\">Email must be a valid email address</div>\n                        </div>\n                    </div>\n                </div>\n            </div>\n        </div>\n        <div class=\"card-footer text-center border-top-0\">\n            <button class=\"btn btn-primary mr-1\" (click)=\"onBuy()\">Buy Tickets</button>\n            <button class=\"btn btn-secondary mr-1\" type=\"reset\" (click)=\"onReset()\">Reset</button>\n            <button class=\"btn btn-secondary\" type=\"button\" (click)=\"onClear()\">Clear</button>\n        </div>\n    </div>\n</form>\n\n\n  \n    <ion-button (click)=\"onBuy()\">NXT</ion-button>\n\n  -->\n";
      /***/
    },

    /***/
    78045:
    /*!***********************************************!*\
      !*** ./src/app/test-bind/test-bind.page.scss ***!
      \***********************************************/

    /***/
    function _(module) {
      module.exports = ".grid1 {\n  height: 100%;\n  padding: 0px;\n}\n\n.contaier-login {\n  width: 90%;\n  padding: 10px;\n  background: #FFFFFF;\n  border-radius: 5px;\n  box-shadow: 0px 0px 10px 1px rgba(0, 0, 0, 0.75);\n}\n\n.row1 {\n  height: 50%;\n  background: linear-gradient(45deg, #3d4296 0%, rgba(84, 74, 171, 0.8) 100%);\n}\n\n.row2 {\n  height: 50%;\n}\n\nion-icon {\n  margin-right: 15px;\n}\n\nion-button {\n  margin-top: 5px;\n  margin-bottom: 15px;\n}\n\nion-slide {\n  width: 100%;\n  height: 100%;\n  position: absolute !important;\n  top: 0px !important;\n}\n/*# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbInRlc3QtYmluZC5wYWdlLnNjc3MiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IkFBQUE7RUFDSSxZQUFBO0VBQ0EsWUFBQTtBQUNKOztBQUVBO0VBQ0ksVUFBQTtFQUNBLGFBQUE7RUFDQSxtQkFBQTtFQUNBLGtCQUFBO0VBR0EsZ0RBQUE7QUFDSjs7QUFHQTtFQUNJLFdBQUE7RUFHQSwyRUFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtBQUFKOztBQUdBO0VBQ0ksa0JBQUE7QUFBSjs7QUFHQTtFQUNJLGVBQUE7RUFDQSxtQkFBQTtBQUFKOztBQUdBO0VBQ0ksV0FBQTtFQUNBLFlBQUE7RUFDQSw2QkFBQTtFQUNBLG1CQUFBO0FBQUoiLCJmaWxlIjoidGVzdC1iaW5kLnBhZ2Uuc2NzcyIsInNvdXJjZXNDb250ZW50IjpbIi5ncmlkMSB7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBhZGRpbmc6IDBweDtcbn1cblxuLmNvbnRhaWVyLWxvZ2luIHtcbiAgICB3aWR0aDogOTAlO1xuICAgIHBhZGRpbmc6IDEwcHg7XG4gICAgYmFja2dyb3VuZDogI0ZGRkZGRjtcbiAgICBib3JkZXItcmFkaXVzOiA1cHg7XG4gICAgLXdlYmtpdC1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgLW1vei1ib3gtc2hhZG93OiAwcHggMHB4IDEwcHggMXB4IHJnYmEoMCwgMCwgMCwgMC43NSk7XG4gICAgYm94LXNoYWRvdzogMHB4IDBweCAxMHB4IDFweCByZ2JhKDAsIDAsIDAsIDAuNzUpO1xufVxuXG5cbi5yb3cxIHtcbiAgICBoZWlnaHQ6IDUwJTtcbiAgICBiYWNrZ3JvdW5kOiAtbW96LWxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2MSwgNjYsIDE1MCwgMSkgMCUsIHJnYmEoODQsIDc0LCAxNzEsIDAuOCkgMTAwJSk7XG4gICAgYmFja2dyb3VuZDogLXdlYmtpdC1saW5lYXItZ3JhZGllbnQoNDVkZWcsIHJnYmEoNjEsIDY2LCAxNTAsIDEpIDAlLCByZ2JhKDg0LCA3NCwgMTcxLCAwLjgpIDEwMCUpO1xuICAgIGJhY2tncm91bmQ6IGxpbmVhci1ncmFkaWVudCg0NWRlZywgcmdiYSg2MSwgNjYsIDE1MCwgMSkgMCUsIHJnYmEoODQsIDc0LCAxNzEsIDAuOCkgMTAwJSk7XG59XG5cbi5yb3cyIHtcbiAgICBoZWlnaHQ6IDUwJTtcbn1cblxuaW9uLWljb24ge1xuICAgIG1hcmdpbi1yaWdodDogMTVweDtcbn1cblxuaW9uLWJ1dHRvbiB7XG4gICAgbWFyZ2luLXRvcDogNXB4O1xuICAgIG1hcmdpbi1ib3R0b206IDE1cHg7XG59XG5cbmlvbi1zbGlkZSB7XG4gICAgd2lkdGg6IDEwMCU7XG4gICAgaGVpZ2h0OiAxMDAlO1xuICAgIHBvc2l0aW9uOiBhYnNvbHV0ZSAhaW1wb3J0YW50O1xuICAgIHRvcDogMHB4ICFpbXBvcnRhbnQ7XG59Il19 */";
      /***/
    }
  }]);
})();
//# sourceMappingURL=src_app_test-bind_test-bind_module_ts-es5.js.map