webpackJsonp(["main"],{

/***/ "../../../../../src/$$_lazy_route_resource lazy recursive":
/***/ (function(module, exports) {

function webpackEmptyAsyncContext(req) {
	// Here Promise.resolve().then() is used instead of new Promise() to prevent
	// uncatched exception popping up in devtools
	return Promise.resolve().then(function() {
		throw new Error("Cannot find module '" + req + "'.");
	});
}
webpackEmptyAsyncContext.keys = function() { return []; };
webpackEmptyAsyncContext.resolve = webpackEmptyAsyncContext;
module.exports = webpackEmptyAsyncContext;
webpackEmptyAsyncContext.id = "../../../../../src/$$_lazy_route_resource lazy recursive";

/***/ }),

/***/ "../../../../../src/app/app.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "/*-------------   Messages ------------*/\r\n.messag{\r\n  top: 20px;\r\n  font-size: 12px;\r\n  right: 24px;\r\n  position: fixed;\r\n  width: 300px;\r\n  z-index: 99;\r\n}\r\n\r\n\r\n\r\n/*------Chat box---------*/\r\nfieldset {\r\n  border: 0;\r\n  margin: 0;\r\n  padding: 0;\r\n}\r\n\r\n#live-chat h4, h5 {\r\n  line-height: 1.5em;\r\n  margin: 0;\r\n}\r\n\r\n#live-chat hr {\r\n  background: #e9e9e9;\r\n  border: 0;\r\n  box-sizing: content-box;\r\n  height: 1px;\r\n  margin: 0;\r\n  min-height: 1px;\r\n}\r\n\r\n#live-chat  img {\r\n  border: 0;\r\n  display: block;\r\n  height: auto;\r\n  max-width: 100%;\r\n}\r\n\r\n#live-chat  input {\r\n  border: 0;\r\n  color: inherit;\r\n  font-family: inherit;\r\n  font-size: 100%;\r\n  line-height: normal;\r\n  margin: 0;\r\n}\r\n\r\n#live-chat p { margin: 0; }\r\n\r\n.clearfix { *zoom: 1; } /* For IE 6/7 */\r\n.clearfix:before, .clearfix:after {\r\n  content: \"\";\r\n  display: table;\r\n}\r\n.clearfix:after { clear: both; }\r\n\r\n/* ---------- LIVE-CHAT ---------- */\r\n\r\n#live-chat {\r\n  bottom: 0;\r\n  font-size: 12px;\r\n  right: 24px;\r\n  position: fixed;\r\n  width: 30%;\r\n}\r\n\r\n#live-chat header {\r\n  background: #536a7f;\r\n  border-radius: 5px 5px 0 0;\r\n  color: #fff;\r\n  cursor: pointer;\r\n  padding: 16px 24px;\r\n}\r\n\r\n#live-chat h4:before {\r\n  background: #1abb9c;\r\n  border-radius: 50%;\r\n  content: \"\";\r\n  display: inline-block;\r\n  height: 8px;\r\n  margin: 0 8px 0 0;\r\n  width: 8px;\r\n}\r\n\r\n#live-chat h4 {\r\n  font-size: 12px;\r\n}\r\n\r\n#live-chat h5 {\r\n  font-size: 10px;\r\n}\r\n\r\n#live-chat .form {\r\n  padding-bottom: 15px;\r\n}\r\n\r\n#live-chat input[type=\"text\"] {\r\n  border: 1px solid #1abb9c;\r\n  border-radius: 3px;\r\n  padding: 8px;\r\n  outline: none;\r\n  width: 234px;\r\n}\r\n\r\n.chat-message-counter {\r\n  background: #1abb9c;\r\n  border: 1px solid #fff;\r\n  border-radius: 50%;\r\n  display: none;\r\n  font-size: 12px;\r\n  font-weight: bold;\r\n  height: 28px;\r\n  left: 0;\r\n  line-height: 28px;\r\n  margin: -15px 0 0 -15px;\r\n  position: absolute;\r\n  text-align: center;\r\n  top: 0;\r\n  width: 28px;\r\n}\r\n\r\n.chat-close {\r\n  background: #1b2126;\r\n  border-radius: 50%;\r\n  color: #fff;\r\n  display: block;\r\n  float: right;\r\n  font-size: 10px;\r\n  height: 16px;\r\n  line-height: 16px;\r\n  margin: 2px 0 0 0;\r\n  text-align: center;\r\n  width: 16px;\r\n}\r\n\r\n.chat {\r\n  background: #fff;\r\n}\r\n\r\n.chat-history {\r\n  height: 252px;\r\n  padding: 8px 24px;\r\n  overflow-y: scroll;\r\n}\r\n\r\n.chat-message {\r\n  margin: 16px 0;\r\n}\r\n\r\n.chat-message img {\r\n  border-radius: 50%;\r\n  float: left;\r\n}\r\n\r\n.chat-message-content {\r\n  margin-left: 56px;\r\n}\r\n\r\n.chat-time {\r\n  float: right;\r\n  font-size: 10px;\r\n}\r\n\r\n.chat-feedback {\r\n  font-style: italic;\r\n  margin: 0 0 0 80px;\r\n}\r\n\r\n\r\n/*_----------------------------------------_*/\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n\r\n.partner.a:hover\r\n{\r\n\r\n  background:#dde7f6 ;\r\n  color: #1abb9c;\r\n}\r\n.secondary.menu .item{\r\n color: #536a7f;font-weight: bold\r\n}\r\n.secondary.menu a:hover\r\n{\r\n  background-color: #f5f7fa!important;\r\n}\r\n.secondary.menu .toc.item {\r\n  display: none;\r\n}\r\n.contactlist\r\n{\r\n  display: block;\r\n}\r\na:hover\r\n{\r\n  color: #1abb9c!important;\r\n}\r\n.ui.form .inline.fields .field {\r\n  margin: 0em;\r\n  padding: 0em 0.5em 0em 0.5em;\r\n}\r\n@media only screen and (max-width: 700px) {\r\n  #live-chat header\r\n  {\r\n    font-size: 80%;\r\n  }\r\n.contactlist\r\n{\r\n  display: none!important;\r\n}\r\n  .secondary.menu .toc.item {\r\n    display: block;\r\n  }\r\n  .secondary.menu .item,\r\n  .secondary.menu .menu {\r\n    display: none;\r\n  }\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/app.component.html":
/***/ (function(module, exports) {

module.exports = "<div style=\"background: url('assets/images/contact.JPG') no-repeat center center;background-size: cover\">\n<!------------------- Side Bar --------------->\n\n<div class=\"ui vertical sidebar menu\" style=\"background-color: #f5f7fa\">\n  <a class=\"item\" style=\"font-family: 'Frijole', cursive;font-size: 160%;color: #536a7f;font-weight: normal\">\n    BY.\n  </a>\n  <a class=\"item\" *ngIf=\"data.isAutenticated() && data.userdetails.name\" style=\"color:#1abb9c \">HELLO {{data.userdetails.name.toUpperCase()}}</a>\n  <a class=\"item\" routerLinkActive=\"active\" routerLink=\"home\">\n    HOME\n  </a>\n  <a class=\"item\" style=\"color:#536a7f;font-weight: bold\">\n    CONTACT\n  </a>\n  <a class=\"item\" style=\"color:#536a7f;font-weight: bold\">\n    ABOUT\n  </a>\n  <a class=\"item\" style=\"color:#536a7f;font-weight: bold\" (click)=\"login()\" *ngIf=\"!data.isAutenticated()\">\n    LOGIN/SIGNUP\n  </a>\n  <a class=\"item\" style=\"color:#536a7f;font-weight: bold\" (click)=\"data.logout()\" *ngIf=\"data.isAutenticated()\">\n    LOGOUT\n  </a>\n  <!--<a class=\"ui item\" style=\"color:#536a7f;font-weight: bold\">-->\n    <!--Login-->\n  <!--</a>-->\n</div>\n\n<div class=\"ui middle aligned divided list contactlist\" style=\"background-color:  #f5f7fa;margin-bottom:0;padding-left: 10%;padding-right: 10%;\">\n  <div class=\"item\">\n    <div class=\"right floated content\">\n      <div class=\"ui button\" style=\"background:transparent;color:#536a7f \"><a class=\"partner\" style=\"color:#1abb9c \">PARTNER WITH US</a></div>\n    </div>\n    <div class=\"content\" style=\"padding: 0.5%;\">\n      <p class=\"ui left floated\"><a href=\"\" style=\"color:#536a7f;font-size: 90%; \"><i class=\"mail outline icon\"></i>harshithmullapudi@gmail.com</a>\n        <a href=\"\" style=\"color:#536a7f ;font-size: 90%; \"><i class=\"mobile icon\"></i>+919944571457</a>\n\n      </p>\n    </div>\n  </div>\n</div>\n\n\n<!------------------- Nav Bar --------------->\n<div class=\"ui secondary  menu\" style=\"padding-right: 2%;font-size: 110%;margin-top: 0\" >\n  <a class=\"toc item\">\n    <i class=\"sidebar icon\"></i>\n  </a>\n  <a class=\"item\" style=\"font-family: 'Frijole', cursive;font-size: 340%;color: #536a7f;font-weight: normal\">\n    BY.\n  </a>\n\n  <div class=\"right menu\">\n    <!--<div class=\"item\">-->\n      <!--<div class=\"ui icon input\">-->\n        <!--<input type=\"text\" placeholder=\"Search...\">-->\n        <!--<i class=\"search link icon\"></i>-->\n      <!--</div>-->\n    <!--</div>-->\n    <a class=\"item\" *ngIf=\"data.isAutenticated() && data.userdetails.name\" style=\"color:#1abb9c \">HELLO {{data.userdetails.name.toUpperCase()}}</a>\n    <a class=\"item\" routerLinkActive=\"active\" routerLink=\"home\">\n     HOME\n    </a>\n    <a class=\"item\" routerLinkActive=\"active\" routerLink=\"contact\">\n      CONTACT\n    </a>\n    <a class=\"item\" style=\"color:#536a7f;font-weight: bold\">\n      ABOUT\n    </a>\n    <a class=\"item\" style=\"color:#536a7f;font-weight: bold\" (click)=\"login()\" *ngIf=\"!data.isAutenticated()\">\n      LOGIN/SIGNUP\n    </a>\n    <a class=\"item\" style=\"color:#536a7f;font-weight: bold\" (click)=\"data.logout()\" *ngIf=\"data.isAutenticated()\">\n      LOGOUT\n    </a>\n    <!--<a class=\"ui item\" >-->\n     <!--Login-->\n    <!--</a>-->\n  </div>\n</div>\n\n<router-outlet></router-outlet>\n<div class=\"ui vertical footer segment\" style=\"background-color: #2f4052;padding: 5%;\">\n  <div class=\"ui container\">\n    <div class=\"ui stackable inverted  equal height stackable grid\">\n      <div class=\"three wide column\">\n        <h4 class=\"ui inverted header\">WHO WE ARE</h4>\n        <div class=\"ui inverted link list\" >\n          <a  style=\"font-family: 'Frijole', cursive;font-size: 240%;color: white;font-weight: normal;\">\n            BY.\n          </a>\n\n         <p style=\"color: #a3b1bf;margin-top:5%;margin-bottom: 10%;\"> We make things for you and we are for you and beyou.</p>\n          <a style=\"color: #a3b1bf;font-weight: bold\">More About us <i class=\"long arrow right icon\"></i></a>\n        </div>\n      </div>\n      <div class=\"four wide column\">\n        <h4 class=\"ui inverted header\">GET IN TOUCH</h4>\n        <div class=\"ui link list\">\n          <p style=\"color: #a3b1bf\"> <i class=\"marker icon\"></i> Kukatpally, Hyderbad, 500072</p>\n          <p style=\"color: #a3b1bf\"> <i class=\"mobile icon\"></i> +919944571457</p>\n          <p style=\"color: #a3b1bf\"> <i class=\"mail outline icon\"></i> harshithmullapudi@gmail.com</p>\n        </div>\n      </div>\n      <div class=\"six wide column\">\n        <h4 class=\"ui inverted header\">FREE UPDATES</h4>\n\n        <div class=\"ui action input\">\n          <input type=\"text\" placeholder=\"Enter your email address\" value=\"\" style=\"background-color: #4e5c6c;color: white;border-radius:0!important\">\n          <button class=\"ui button\" style=\"background-color:#1abb9c ;color: white;border-radius:0!important\">\n            Subscribe.\n          </button>\n        </div>\n      </div>\n    </div>\n  </div>\n\n</div>\n<div  style=\"background-color: #283645;color: #707e8c;padding: 1%;text-align: center\">\n  &copy; BY., All rights reserved.\n</div>\n\n</div>\n\n\n\n<!----------- Modal ----------->\n<div class=\"ui modal loginapp\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\" style=\"color:#2f4052\">\n    LOGIN\n  </div>\n  <div class=\"content\">\n    <div class=\"description\">\n      <form class=\"ui form\"  [formGroup]=\"formdatas\">\n\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Email</label>\n          <input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Your Email\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Password</label>\n          <input type=\"password\" formControlName=\"password\" name=\"ph\" placeholder=\"Your Password\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n\n      </form>\n      <p style=\"text-align: left;padding-top: 1%;\">Not registered? <span style=\"color:#1abb9c \" (click)=\"signup()\">Create an account</span></p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button [disabled]=\"!formdatas.valid\" (click)=\"finallogin()\" class=\"ui button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\">Login</button>\n\n  </div>\n</div>\n<!-------------------------------------------------------------->\n<div class=\"ui modal signupapp\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\" style=\"color:#2f4052\">\n    SIGNUP\n  </div>\n  <div class=\"content\">\n    <div class=\"description\">\n      <form class=\"ui form\" [formGroup]=\"sigformdatas\">\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Name</label>\n          <input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Your Name\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Email</label>\n          <input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Your Email\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Password</label>\n          <input type=\"password\" formControlName=\"password\" name=\"ph\" placeholder=\"Your Password\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Retype Password</label>\n          <input type=\"password\" formControlName=\"repassword\"  name=\"phre\" placeholder=\"Retype Password\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n      </form>\n      <p style=\"text-align: left;padding-top: 1%;\">Registered? <span style=\"color:#1abb9c \" (click)=\"login()\">Login here</span></p>\n\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button [disabled]=\"sigformdatas.invalid || match()\"  (click)=\"finalsignup()\" class=\"ui button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\">Signup</button>\n\n  </div>\n</div>\n\n\n\n<!-----------------------------chat box -------------------------------->\n<div id=\"live-chat\">\n\n  <header class=\"clearfix\">\n\n\n    <h4>Chat</h4>\n\n    <!--<span class=\"chat-message-counter\">3</span>-->\n\n  </header>\n\n  <div class=\"chat\">\n\n    <div class=\"chat-history\">\n\n      <div class=\"chat-message clearfix\">\n\n        <img src=\"https://semantic-ui.com/images/avatar/small/matt.jpg\" alt=\"\" width=\"32\" height=\"32\">\n\n        <div class=\"chat-message-content clearfix\">\n\n          <!--<span class=\"chat-time\">13:35</span>-->\n\n          <h5>BeYou.</h5>\n\n          <p>Hello we are from BeYou.</p>\n\n        </div> <!-- end chat-message-content -->\n\n      </div> <!-- end chat-message -->\n\n      <hr>\n<div *ngFor=\"let i of data.usermessages\">\n      <div class=\"chat-message clearfix\">\n\n        <img src=\"http://gravatar.com/avatar/2c0ad52fc5943b78d6abe069cc08f320?s=32\" alt=\"\" width=\"32\" height=\"32\">\n\n        <div class=\"chat-message-content clearfix\">\n\n          <!--<span class=\"chat-time\">13:37</span>-->\n\n          <h5>{{i.person}}</h5>\n\n          <p>{{i.message}}</p>\n\n        </div> <!-- end chat-message-content -->\n\n      </div> <!-- end chat-message -->\n\n      <hr>\n\n\n</div>\n\n\n    </div> <!-- end chat-history -->\n\n\n    <form action=\"#\" method=\"post\">\n\n      <fieldset>\n\n        <div class=\"ui form\" *ngIf=\"check()\">\n          <div class=\"inline fields\" >\n            <div class=\"field\">\n\n              <input type=\"text\" placeholder=\"Type your message…\" autofocus id=\"chatmessage\">\n            </div>\n            <div class=\"field\">\n              <button class=\"circular ui icon button\" style=\"background-color:#1abb9c \" (click)=\"messagesend()\">\n                <i class=\"chevron right icon\" style=\"color: #536a7f;\"></i>\n              </button>\n            </div>\n          </div>\n        </div> <!-- end chat -->\n\n      </fieldset>\n\n    </form>\n\n  </div> <!-- end chat -->\n\n</div>\n\n\n\n\n\n\n\n\n\n\n\n\n\n\n<!------------- Message --------->\n<div class=\"ui cards messag messagsucc\" *ngIf=\"this.data.errormes\">\n  <div class=\"card\">\n    <div class=\"content\" style=\"padding: 0\">\n\n      <div class=\"description\">\n        <div class=\"ui icon message\">\n          <i class=\"remove icon\" style=\"color: red\"></i>\n          <div class=\"content\">\n            <div class=\"header\">\n              {{data.wrong}}\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n\n<div class=\"ui cards messag messagerror\" *ngIf=\"this.data.sucmes\">\n  <div class=\"card\">\n    <div class=\"content\" style=\"padding: 0\">\n\n      <div class=\"description\">\n        <div class=\"ui icon message\">\n          <i class=\"checkmark icon\" style=\"color: #1abb9c\"></i>\n          <div class=\"content\">\n            <div class=\"header\">\n              {{data.wrong}}\n            </div>\n\n          </div>\n        </div>\n      </div>\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/app.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var AppComponent = (function () {
    function AppComponent(data) {
        this.data = data;
        this.counter = 0;
        this.formdatas = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            "password": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
        this.sigformdatas = new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "email": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            "password": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required]),
            "repassword": new __WEBPACK_IMPORTED_MODULE_1__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_1__angular_forms__["e" /* Validators */].required])
        });
    }
    AppComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        $('.ui.sidebar')
            .sidebar('attach events', '.toc.item');
        $('#live-chat header').on('click', function () {
            if (_this.counter % 2 != 0) {
                console.log(_this.counter);
                $("#live-chat").css({
                    "width": "300px"
                });
            }
            else {
                $("#live-chat").css({
                    "width": "30%"
                });
            }
            _this.counter = _this.counter + 1;
            $('.chat').slideToggle(300, 'swing');
            $('.chat-message-counter').fadeToggle(300, 'swing');
        });
        $('#live-chat header').click();
    };
    AppComponent.prototype.login = function () {
        $('.ui.modal.loginapp')
            .modal({
            blurring: true
        })
            .modal('show');
    };
    AppComponent.prototype.signup = function () {
        $('.ui.modal.signupapp')
            .modal({
            blurring: true
        })
            .modal('show');
    };
    AppComponent.prototype.match = function () {
        if (this.sigformdatas.get('repassword').value == this.sigformdatas.get("password").value) {
            return false;
        }
        return true;
    };
    AppComponent.prototype.finallogin = function () {
        this.data.login(this.formdatas.value);
    };
    AppComponent.prototype.finalsignup = function () {
        this.data.signup(this.sigformdatas.value);
    };
    AppComponent.prototype.check = function () {
        if (this.data.isAutenticated()) {
            return true;
        }
        else {
            return false;
        }
    };
    AppComponent.prototype.messagesend = function () {
        firebase.database().ref("details/" + this.data.userkey + "/messages").push({
            message: $("#chatmessage").val(),
            person: "me"
        }).then(function () {
            $("#chatmessage").val("");
        });
    };
    AppComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-root',
            template: __webpack_require__("../../../../../src/app/app.component.html"),
            styles: [__webpack_require__("../../../../../src/app/app.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_2__services_data_service__["a" /* DataService */]])
    ], AppComponent);
    return AppComponent;
}());



/***/ }),

/***/ "../../../../../src/app/app.module.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return AppModule; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__ = __webpack_require__("../../../platform-browser/esm5/platform-browser.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_component__ = __webpack_require__("../../../../../src/app/app.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__angular_router__ = __webpack_require__("../../../router/esm5/router.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__home_home_component__ = __webpack_require__("../../../../../src/app/home/home.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__ = __webpack_require__("../../../../../src/app/contact/contact.component.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};








var AppModule = (function () {
    function AppModule() {
    }
    AppModule = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_1__angular_core__["I" /* NgModule */])({
            declarations: [
                __WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */],
                __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */],
                __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */],
            ],
            imports: [
                __WEBPACK_IMPORTED_MODULE_0__angular_platform_browser__["a" /* BrowserModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["d" /* ReactiveFormsModule */],
                __WEBPACK_IMPORTED_MODULE_7__angular_forms__["c" /* FormsModule */],
                __WEBPACK_IMPORTED_MODULE_3__angular_router__["a" /* RouterModule */].forRoot([
                    { path: "", redirectTo: '/home', pathMatch: 'full' },
                    { path: "home", component: __WEBPACK_IMPORTED_MODULE_4__home_home_component__["a" /* HomeComponent */] },
                    { path: "contact", component: __WEBPACK_IMPORTED_MODULE_5__contact_contact_component__["a" /* ContactComponent */] }
                ])
            ],
            providers: [__WEBPACK_IMPORTED_MODULE_6__services_data_service__["a" /* DataService */]],
            bootstrap: [__WEBPACK_IMPORTED_MODULE_2__app_component__["a" /* AppComponent */]]
        })
    ], AppModule);
    return AppModule;
}());



/***/ }),

/***/ "../../../../../src/app/contact/contact.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "a:hover\r\n{\r\n  color: #1abb9c!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.html":
/***/ (function(module, exports) {

module.exports = "<div class=\"ui grid\" style=\"background: url('assets/slider02.jpg') no-repeat center center;background-size: cover\">\n  <div class=\"eight wide column\" style=\"padding: 5%;\"><h1 style=\"font-weight: bold;font-size: 400%;text-align: center;color: white\">GET IN TOUCH</h1><br>\n  <p style=\"font-weight:bold;text-align:right;font-size:150%;color:#a3b1bf\">Do you want to know more? We'd love to hear from you.</p>\n  </div>\n  <div class=\"eight wide column\" style=\"padding: 5%;\"> <a  style=\"font-family: 'Frijole', cursive;font-size: 300%;color: white;font-weight: normal;\">\n    BY.\n  </a>\n    <div style=\"margin-top: 2%;\">\n    <p style=\"color: white;\"> <i class=\"marker icon\"></i> 6-2-8, Paloncha, 507115</p>\n    <p style=\"color: white;\"> <i class=\"mobile icon\"></i> +919944571457</p>\n    <p style=\"color: white;\"> <i class=\"mail outline icon\"></i> harshithmullapudi@gmail.com</p>\n  </div>\n  </div>\n</div>\n<div class=\"ui grid\" style=\"padding: 9%;\">\n  <div class=\"twelve wide column\">\n  <h2 style=\"font-weight: bold;color: #506a85\"> Leave a Message</h2>\n    <form class=\"ui form\">\n      <div class=\"eight wide field\">\n        <label>Name</label>\n        <input type=\"text\" name=\"first-name\" placeholder=\"Name\" style=\"background: #f8fafd;border-radius: 0\">\n      </div>\n      <div class=\"eight wide field\">\n        <label>Email</label>\n        <input type=\"email\" name=\"email\" placeholder=\"Email\" style=\"background: #f8fafd;border-radius: 0\">\n      </div>\n      <div class=\"eight wide field\">\n        <label>Subject</label>\n        <input type=\"text\" name=\"subject\" placeholder=\"Subject\" style=\"background: #f8fafd;border-radius: 0\">\n      </div>\n      <div class=\"eight wide field\">\n        <label>Enter Message</label>\n        <textarea rows=\"4\" style=\"background: #f8fafd;border-radius: 0\"></textarea>\n      </div>\n      <button class=\"ui button\" style=\"background-color: #1abb9c;color: white;border-radius: 0;\">SUBMIT MESSAGE</button>\n    </form>\n  </div>\n<div class=\"four wide column\" style=\"background-color: #f2f5f7;padding: 2%;\">\n  <h2 style=\"font-weight: bold;text-align:center;color: #506a85\"> Contact names</h2>\n  <hr width=\"70%\">\n  <div class=\"ui two doubling cards\">\n    <div class=\"card\">\n      <div class=\"image\">\n        <img src=\"https://semantic-ui.com/images/avatar/large/elliot.jpg\">\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"image\">\n        <img src=\"https://semantic-ui.com/images/avatar/large/helen.jpg\">\n      </div>\n    </div>\n\n\n  </div>\n  <div class=\"ui two doubling cards\">\n    <div class=\"card\">\n      <div class=\"image\">\n        <img src=\"https://semantic-ui.com/images/avatar/large/elliot.jpg\">\n      </div>\n    </div>\n    <div class=\"card\">\n      <div class=\"image\">\n        <img src=\"https://semantic-ui.com/images/avatar/large/helen.jpg\">\n      </div>\n    </div>\n\n\n  </div>\n</div>\n\n\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/contact/contact.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return ContactComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var ContactComponent = (function () {
    function ContactComponent() {
    }
    ContactComponent.prototype.ngOnInit = function () {
    };
    ContactComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-contact',
            template: __webpack_require__("../../../../../src/app/contact/contact.component.html"),
            styles: [__webpack_require__("../../../../../src/app/contact/contact.component.css")]
        }),
        __metadata("design:paramtypes", [])
    ], ContactComponent);
    return ContactComponent;
}());



/***/ }),

/***/ "../../../../../src/app/home/home.component.css":
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__("../../../../css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, "\r\n.card\r\n{\r\n  border-radius: 0!important;\r\n}\r\n.card .image{\r\n\r\n  border-radius:0!important;\r\n}\r\n", ""]);

// exports


/*** EXPORTS FROM exports-loader ***/
module.exports = module.exports.toString();

/***/ }),

/***/ "../../../../../src/app/home/home.component.html":
/***/ (function(module, exports) {

module.exports = "<hr width=\"90%\" style=\"border-width: 0.5px;\">\n<!--<div class=\"ui container\" style=\"text-align: right;margin-bottom: 5%;\">-->\n  <!--<button class=\"ui button\" style=\"background-color: #536a7f;color:white;border-radius:0\">Category</button>-->\n<!--</div>-->\n\n<h2 style=\"color: #1abb9c;text-align: center\">OUR PRODUCTS</h2>\n<div class=\"ui container\" >\n<div class=\"ui centered four stackable link cards\" style=\"margin-bottom:2%;\">\n  <div class=\"ui centered card\" *ngFor=\"let i of this.data.items\">\n    <div class=\"content\" style=\"background-color: #2f4052;border-radius: 0!important;\">\n      <div class=\"header\" style=\"text-align: center;color:white\">Mobile Cases</div>\n\n    </div>\n    <div class=\"image\">\n      <img src=\"assets/cases.jpg\">\n    </div>\n\n    <button (click)=\"login(i)\" class=\"ui bottom attached button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\">\n\n      Order\n    </button>\n  </div>\n\n</div>\n</div>\n<hr width=\"90%\" style=\"border-width: 0.5px;\">\n\n\n\n\n\n<!----------- Modal ----------->\n<div class=\"ui modal loginhome\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\" style=\"color:#2f4052\">\n    LOGIN\n  </div>\n  <div class=\"content\">\n    <div class=\"description\">\n      <form class=\"ui form\"  [formGroup]=\"formdatas\">\n\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Email</label>\n          <input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Your Email\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Password</label>\n          <input type=\"password\" formControlName=\"password\" name=\"ph\" placeholder=\"Your Mobile Number\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n\n      </form>\n      <p style=\"text-align: left;padding-top: 1%;\">Not registered? <span style=\"color:#1abb9c \" (click)=\"signup()\">Create an account</span></p>\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button [disabled]=\"formdatas.invalid\" (click)=\"finallogin()\" class=\"ui button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\">Login</button>\n\n  </div>\n</div>\n<!-------------------------------------------------------------->\n<div class=\"ui modal signuphome\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\" style=\"color:#2f4052\">\n    SIGNUP\n  </div>\n  <div class=\"content\">\n    <div class=\"description\">\n      <form class=\"ui form\" [formGroup]=\"sigformdatas\">\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Name</label>\n          <input type=\"text\" formControlName=\"name\" name=\"name\" placeholder=\"Your Name\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Email</label>\n          <input type=\"email\" formControlName=\"email\" name=\"email\" placeholder=\"Your Email\" style=\"color:#1abb9c;border-radius:0!important \">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Password</label>\n          <input type=\"password\" formControlName=\"password\" name=\"ph\" placeholder=\"Your Password\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">Retype Password</label>\n          <input type=\"password\" formControlName=\"repassword\"  name=\"phre\" placeholder=\"Retype Password\" style=\"color:#1abb9c ;border-radius:0!important\">\n        </div>\n      </form>\n      <p style=\"text-align: left;padding-top: 1%;\">Registered? <span style=\"color:#1abb9c \" (click)=\"login()\">Login here</span></p>\n\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button [disabled]=\"sigformdatas.invalid || match()\" (click)=\"signuplogin()\" class=\"ui button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\">Signup</button>\n\n  </div>\n</div>\n\n<!-------------------------------------------------------------->\n<div class=\"ui modal orderhome\">\n  <i class=\"close icon\"></i>\n  <div class=\"header\" style=\"color:#2f4052\">\n    ORDER DETAILS\n  </div>\n  <div class=\"content\">\n    <div class=\"description\">\n      <a class=\"item\" style=\"color:#1abb9c \">YOU SELECTED : {{data.selectedtype.toUpperCase()}}</a>\n<hr>\n      <div class=\"ui negative message\" *ngIf=\"erromes\">\n\n        <div class=\"header\">\n          Help us in finding right one for you.\n        </div>\n       </div>\n      <form class=\"ui form\">\n\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">ADDRESS DETAILS</label>\n          <input type=\"text\" name=\"address\" placeholder=\"Your Address can be your room no and hostel.\" style=\"color:#1abb9c;border-radius:0!important \" #address>\n        </div>\n        <div class=\"field\">\n          <label style=\"color:#2f4052 \">MOBILE NUMBER</label>\n          <input type=\"number\"  name=\"ph\" placeholder=\"Your Phone Number\" style=\"color:#1abb9c ;border-radius:0!important\" #phone>\n        </div>\n\n      </form>\n\n    </div>\n  </div>\n  <div class=\"actions\">\n    <button  class=\"ui button\" style=\"background-color: #1abb9c ;color: white;border-radius:0!important\" (click)=\"orders(address.value,phone.value)\">Order</button>\n\n  </div>\n</div>\n\n\n\n<!---------------- Approve order -------------->\n<div class=\"ui small basic test modal transition \" >\n  <div class=\"ui icon header\">\n    <i class=\"checkmark icon\"></i>\n    ORDER\n  </div>\n  <div class=\"content\">\n    <p style=\"text-align: center;font-size: 140%;\">We are finalizing your order ?</p>\n  </div>\n  <div class=\"actions\">\n    <div class=\"ui red basic cancel inverted button\">\n      <i class=\"remove icon\"></i>\n      No\n    </div>\n    <div class=\"ui green ok inverted button\">\n      <i class=\"checkmark icon\"></i>\n      Yes\n    </div>\n  </div>\n</div>\n"

/***/ }),

/***/ "../../../../../src/app/home/home.component.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return HomeComponent; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__services_data_service__ = __webpack_require__("../../../../../src/app/services/data.service.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__angular_forms__ = __webpack_require__("../../../forms/esm5/forms.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};



var HomeComponent = (function () {
    function HomeComponent(data) {
        this.data = data;
        this.erromes = false;
        this.formdatas = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            "email": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            "password": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
        this.sigformdatas = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({
            'name': new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            "email": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required, __WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].pattern("[a-z0-9!#$%&'*+/=?^_`{|}~-]+(?:\.[a-z0-9!#$%&'*+/=?^_`{|}~-]+)*@(?:[a-z0-9](?:[a-z0-9-]*[a-z0-9])?\.)+[a-z0-9](?:[a-z0-9-]*[a-z0-9])?")]),
            "password": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required]),
            "repassword": new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["a" /* FormControl */]('', [__WEBPACK_IMPORTED_MODULE_2__angular_forms__["e" /* Validators */].required])
        });
        this.order = new __WEBPACK_IMPORTED_MODULE_2__angular_forms__["b" /* FormGroup */]({});
    }
    HomeComponent.prototype.ngOnInit = function () {
    };
    HomeComponent.prototype.orders = function (a, b) {
        var _this = this;
        if (a && b) {
            $('.ui.basic.test.modal')
                .modal({
                closable: false,
                onDeny: function () {
                    $('.ui.modal.orderhome')
                        .modal({
                        blurring: true
                    })
                        .modal('show');
                },
                onApprove: function () {
                    firebase.database().ref("details/" + _this.data.userkey + "/orders").push({
                        orderid: Math.floor((Math.random() * 100000000000000) + 1),
                        type: _this.data.selectedtype,
                        address: a,
                        phonenumber: b
                    }).then(function () {
                        $(".ui.modal").modal("hide");
                        _this.data.wrong = _this.data.userdetails.name.toUpperCase() + "!! ORDER SUCCESSFULLY PLACED.";
                        _this.data.sucmes = true;
                        setTimeout(function () {
                            _this.data.sucmes = false;
                        }, 10000);
                    });
                }
            })
                .modal('show');
        }
        else {
            this.erromes = true;
            setTimeout(function () {
                _this.erromes = false;
            }, 5000);
        }
    };
    HomeComponent.prototype.login = function (a) {
        if (this.data.isAutenticated()) {
            this.data.selectedtype = a;
            $('.ui.modal.orderhome')
                .modal({
                blurring: true
            })
                .modal('show');
        }
        else {
            $('.ui.modal.loginhome')
                .modal({
                blurring: true
            })
                .modal('show');
        }
    };
    HomeComponent.prototype.signup = function () {
        $('.ui.modal.signuphome')
            .modal({
            blurring: true
        })
            .modal('show');
    };
    HomeComponent.prototype.match = function () {
        if (this.sigformdatas.get('repassword').value == this.sigformdatas.get("password").value) {
            return false;
        }
        return true;
    };
    HomeComponent.prototype.finallogin = function () {
        this.data.login(this.formdatas.value);
    };
    HomeComponent.prototype.finalsignup = function () {
        this.data.signup(this.sigformdatas.value);
    };
    HomeComponent = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["n" /* Component */])({
            selector: 'app-home',
            template: __webpack_require__("../../../../../src/app/home/home.component.html"),
            styles: [__webpack_require__("../../../../../src/app/home/home.component.css")]
        }),
        __metadata("design:paramtypes", [__WEBPACK_IMPORTED_MODULE_1__services_data_service__["a" /* DataService */]])
    ], HomeComponent);
    return HomeComponent;
}());



/***/ }),

/***/ "../../../../../src/app/services/data.service.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return DataService; });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};

var DataService = (function () {
    function DataService() {
        this.errormes = false;
        this.wrong = "somthing";
        this.sucmes = false;
        this.items = ["mob-cases"];
        this.usermessages = [];
        this.userdetails = null;
        this.selectedtype = '';
    }
    DataService.prototype.login = function (user) {
        var _this = this;
        $(".ui .modal").modal('hide');
        firebase.auth().signInWithEmailAndPassword(user.email, user.password).then(function (data) {
            _this.wrong = "SUCCESSFULLY LOGGED IN.";
            _this.sucmes = true;
            setTimeout(function () {
                _this.sucmes = false;
            }, 5000);
            firebase.database().ref().child("details").orderByChild("email").equalTo(user.email).on('value', function (snapshot) {
                console.log(snapshot.val());
                _this.userkey = Object.keys(snapshot.val()).map(function (k) { return k; })[0];
                _this.userdetails = Object.keys(snapshot.val()).map(function (k) { return snapshot.val()[k]; })[0];
                _this.wrong = "HELLO " + _this.userdetails.name.toUpperCase();
                _this.sucmes = true;
                setTimeout(function () {
                    _this.sucmes = false;
                }, 5000);
            });
        })
            .catch(function (error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode === 'auth/wrong-password') {
                _this.wrong = "Wrong Password";
                console.log(_this.wrong);
                _this.wrong = _this.wrong.toUpperCase();
                _this.errormes = true;
            }
            else {
                _this.wrong = errorMessage;
                _this.wrong = _this.wrong.toUpperCase();
                _this.errormes = true;
            }
            console.log(error);
            setTimeout(function () {
                _this.errormes = false;
            }, 5000);
        });
    };
    DataService.prototype.logout = function () {
        var _this = this;
        firebase.auth().signOut().then(function () {
            _this.wrong = "SUCCESSFULLY LOGGED OUT.";
            _this.sucmes = true;
            setTimeout(function () {
                _this.sucmes = false;
            }, 5000);
            _this.usermessages = [];
            _this.userdetails = {};
            _this.userkey = '';
        }, function (error) {
            console.log(error);
        });
    };
    DataService.prototype.signup = function (user) {
        var _this = this;
        $(".ui .modal").modal('hide');
        firebase.auth().createUserWithEmailAndPassword(user.email, user.password).then(function (data) {
            _this.userkey = firebase.database().ref("details").push({
                name: user.name,
                email: user.email,
                messages: []
            });
            console.log(_this.userkey);
            _this.wrong = "SUCCESSFULLY SIGNED UP.";
            _this.sucmes = true;
            setTimeout(function () {
                _this.sucmes = false;
                _this.wrong = "HELLO " + user.name.toUpperCase();
                _this.sucmes = true;
                setTimeout(function () {
                    _this.sucmes = false;
                }, 5000);
            }, 5000);
        })
            .catch(function (error) {
            var _this = this;
            var errorCode = error.code;
            var errorMessage = error.message;
            if (errorCode == 'auth/weak-password') {
                this.wrong = "Weak Password";
            }
            else {
                this.wrong = errorMessage;
            }
            this.wrong = this.wrong.toUpperCase();
            this.errormes = true;
            setTimeout(function () {
                _this.errormes = false;
            }, 5000);
        });
    };
    DataService.prototype.isAutenticated = function () {
        var _this = this;
        var user = firebase.auth().currentUser;
        if (user) {
            this.userdet = user.email;
            if (!this.userdetails) {
                this.userdetails = {};
                firebase.database().ref().child("details").orderByChild("email").equalTo(user.email).on('value', function (snapshot) {
                    _this.userkey = Object.keys(snapshot.val()).map(function (k) { return k; })[0];
                    _this.userdetails = Object.keys(snapshot.val()).map(function (k) { return snapshot.val()[k]; })[0];
                    if (_this.userdetails.messages) {
                        _this.usermessages = Object.keys(_this.userdetails.messages).map(function (k) {
                            return _this.userdetails.messages[k];
                        });
                    }
                    console.log(_this.userkey);
                    _this.wrong = "HELLO " + _this.userdetails.name.toUpperCase();
                    _this.sucmes = true;
                    setTimeout(function () {
                        _this.sucmes = false;
                    }, 5000);
                });
            }
            return true;
        }
        else {
            return false;
        }
    };
    DataService = __decorate([
        Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["A" /* Injectable */])(),
        __metadata("design:paramtypes", [])
    ], DataService);
    return DataService;
}());



/***/ }),

/***/ "../../../../../src/environments/environment.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "a", function() { return environment; });
// The file contents for the current environment will overwrite these during build.
// The build system defaults to the dev environment which uses `environment.ts`, but if you do
// `ng build --env=prod` then `environment.prod.ts` will be used instead.
// The list of which env maps to which file can be found in `.angular-cli.json`.
var environment = {
    production: false
};


/***/ }),

/***/ "../../../../../src/main.ts":
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__angular_core__ = __webpack_require__("../../../core/esm5/core.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__ = __webpack_require__("../../../platform-browser-dynamic/esm5/platform-browser-dynamic.js");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__app_app_module__ = __webpack_require__("../../../../../src/app/app.module.ts");
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__environments_environment__ = __webpack_require__("../../../../../src/environments/environment.ts");




if (__WEBPACK_IMPORTED_MODULE_3__environments_environment__["a" /* environment */].production) {
    Object(__WEBPACK_IMPORTED_MODULE_0__angular_core__["_13" /* enableProdMode */])();
}
Object(__WEBPACK_IMPORTED_MODULE_1__angular_platform_browser_dynamic__["a" /* platformBrowserDynamic */])().bootstrapModule(__WEBPACK_IMPORTED_MODULE_2__app_app_module__["a" /* AppModule */])
    .catch(function (err) { return console.log(err); });


/***/ }),

/***/ 0:
/***/ (function(module, exports, __webpack_require__) {

module.exports = __webpack_require__("../../../../../src/main.ts");


/***/ })

},[0]);
//# sourceMappingURL=main.bundle.js.map