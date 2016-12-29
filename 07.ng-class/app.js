System.register(['angular2/core', 'angular2/platform/browser'], function(exports_1) {
    var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
        var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
        if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
        else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
        return c > 3 && r && Object.defineProperty(target, key, r), r;
    };
    var __metadata = (this && this.__metadata) || function (k, v) {
        if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
    };
    var core_1, browser_1;
    var ClassSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            ClassSampleApp = (function () {
                function ClassSampleApp() {
                    this.isBordered = true;
                    this.classList = ['blue', 'round'];
                    this.toggleBorder();
                }
                ClassSampleApp.prototype.toggleBorder = function () {
                    this.isBordered = !this.isBordered;
                    this.classesObj = {
                        bordered: this.isBordered
                    };
                };
                ClassSampleApp.prototype.toggleClass = function (cssClass) {
                    var pos = this.classList.indexOf(cssClass);
                    if (pos > -1) {
                        this.classList.splice(pos, 1);
                    }
                    else {
                        this.classList.push(cssClass);
                    }
                };
                ClassSampleApp = __decorate([
                    core_1.Component({
                        selector: 'class-sample-app',
                        template: "\n    <div [ngClass]=\"{bordered: false}\">This is never bordered</div>\n  <div [ngClass]=\"{bordered: true}\">This is always bordered</div>\n\n  <div [ngClass]=\"{bordered: isBordered}\">\n   Using object literal. Border {{ isBordered ? \"ON\" : \"OFF\" }}\n  </div>\n\n  <div [ngClass]=\"classesObj\">\n    Using object var. Border {{ classesObj.bordered ? \"ON\" : \"OFF\" }}\n  </div>\n\n  <button (click)=\"toggleBorder()\">Toggle</button>\n\n  <div class=\"selectors\">\n    <div>\n      <input type=\"checkbox\"\n             [checked]=\"classList.indexOf('blue') > -1\"\n             (click)=\"toggleClass('blue')\">\n      <span>Blue</span>\n    </div>\n\n    <div>\n      <input type=\"checkbox\"\n             [checked]=\"classList.indexOf('round') > -1\"\n             (click)=\"toggleClass('round')\">\n      <span>Round</span>\n    </div>\n  </div>\n\n  <div class=\"base\" [ngClass]=\"['blue', 'round']\">\n    This will always have a blue background and\n    round corners\n  </div>\n\n  <div class=\"base\" [ngClass]=\"classList\">\n    This is {{ classList.indexOf('blue') > -1 ? \"\" : \"NOT\" }} blue\n    and {{ classList.indexOf('round') > -1 ? \"\" : \"NOT\" }} round\n  </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], ClassSampleApp);
                return ClassSampleApp;
            })();
            browser_1.bootstrap(ClassSampleApp);
        }
    }
});
//# sourceMappingURL=app.js.map