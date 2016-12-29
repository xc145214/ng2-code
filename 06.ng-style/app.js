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
    var StyleSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            StyleSampleApp = (function () {
                function StyleSampleApp() {
                    this.fontSize = 16;
                    this.color = "blue";
                    this.style = {
                        'background-color': '#ccc',
                        'border-radius': '50px',
                        'height': '30px',
                        'width': '30px',
                    };
                }
                StyleSampleApp.prototype.apply = function (color, fontSize) {
                    this.color = color;
                    this.fontSize = fontSize;
                };
                StyleSampleApp = __decorate([
                    core_1.Component({
                        selector: 'style-sample-app',
                        template: "\n   <h4 class=\"ui horizontal divider header\">\n      style.background-color\n    </h4>\n\n    <div [style.background-color]=\"'yellow'\">\n      Uses fixed yellow background\n    </div>\n\n    <h4 class=\"ui horizontal divider header\">\n      ngStyle literal\n    </h4>\n\n    <div [ngStyle]=\"{color: 'white', 'background-color': 'blue'}\">\n      Uses fixed white text on blue background\n    </div>\n\n    <h4 class=\"ui horizontal divider header\">\n      ngStyle literal and style.font-size.px\n    </h4>\n\n    <div>\n      <span [ngStyle]=\"{color: 'red'}\" [style.font-size.px]=\"fontSize\">\n        red text\n      </span>\n    </div>\n\n    <h4 class=\"ui horizontal divider header\">\n      ngStyle with an object\n    </h4>\n\n    <div [ngStyle]=\"style\"></div>\n\n    <h4 class=\"ui horizontal divider header\">\n      ngStyle with object property from variable\n    </h4>\n\n    <div>\n      <span [ngStyle]=\"{color: colorinput.value}\">\n        {{ colorinput.value }} text\n      </span>\n    </div>\n\n    <h4 class=\"ui horizontal divider header\">\n      style from variable\n    </h4>\n\n    <div [style.background-color]=\"colorinput.value\"\n         style=\"color: white;\">\n      {{ colorinput.value }} background\n    </div>\n\n    <h4 class=\"ui horizontal divider header\">\n      Play with the color and font-size here\n    </h4>\n\n    <div class=\"ui input\">\n      <input type=\"text\" name=\"color\" value=\"{{color}}\" #colorinput>\n    </div>\n\n    <div class=\"ui input\">\n      <input type=\"text\" name=\"fontSize\" value=\"{{fontSize}}\" #fontinput>\n    </div>\n\n    <button class=\"ui primary button\" (click)=\"apply(colorinput.value, fontinput.value)\">\n      Apply settings\n    </button>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], StyleSampleApp);
                return StyleSampleApp;
            })();
            browser_1.bootstrap(StyleSampleApp);
        }
    }
});
//# sourceMappingURL=app.js.map