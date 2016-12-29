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
    var NonBindableDemo, NgForSampleApp;
    return {
        setters:[
            function (core_1_1) {
                core_1 = core_1_1;
            },
            function (browser_1_1) {
                browser_1 = browser_1_1;
            }],
        execute: function() {
            NonBindableDemo = (function () {
                function NonBindableDemo() {
                    this.content = 'Some text';
                }
                NonBindableDemo = __decorate([
                    core_1.Component({
                        selector: 'non-bindable-demo',
                        template: "\n        <hr/>\n      <h4 class=\"ui horizontal divider header\">\n       angular non bindable sample app\n      </h4>\n     <div>\n        <span class=\"bordered\">{{ content }}</span>\n        <span class=\"pre\" ngNonBindable>\n          &larr; This is what {{ content }} rendered\n        </span>\n      </div>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NonBindableDemo);
                return NonBindableDemo;
            })();
            NgForSampleApp = (function () {
                function NgForSampleApp() {
                    this.cities = ['Miami', 'Sao Paulo', 'New York'];
                    this.people = [
                        { name: 'Anderson', age: 35, city: 'Sao Paulo' },
                        { name: 'John', age: 12, city: 'Miami' },
                        { name: 'Peter', age: 22, city: 'New York' }
                    ];
                    this.peopleByCity = [
                        {
                            city: 'Miami',
                            people: [
                                { name: 'John', age: 12 },
                                { name: 'Angel', age: 22 }
                            ]
                        },
                        {
                            city: 'Sao Paulo',
                            people: [
                                { name: 'Anderson', age: 35 },
                                { name: 'Felipe', age: 36 }
                            ]
                        }
                    ];
                }
                ;
                NgForSampleApp = __decorate([
                    core_1.Component({
                        selector: 'ng-for-sample-app',
                        directives: [NonBindableDemo],
                        template: "\n     <h4 class=\"ui horizontal divider header\">\n    Simple list of strings\n  </h4>\n\n  <div class=\"ui list\" *ngFor=\"#c of cities\">\n    <div class=\"item\">{{ c }}</div>\n  </div>\n\n  <h4 class=\"ui horizontal divider header\">\n    List of objects\n  </h4>\n\n  <table class=\"ui celled table\">\n    <thead>\n      <tr>\n        <th>Name</th>\n        <th>Age</th>\n        <th>City</th>\n      </tr>\n    </thead>\n    <tr *ngFor=\"#p of people\">\n      <td>{{ p.name }}</td>\n      <td>{{ p.age }}</td>\n      <td>{{ p.city }}</td>\n    </tr>\n  </table>\n\n  <h4 class=\"ui horizontal divider header\">\n    Nested data\n  </h4>\n\n  <div *ngFor=\"#item of peopleByCity\">\n    <h2 class=\"ui header\">{{ item.city }}</h2>\n\n    <table class=\"ui celled table\">\n      <thead>\n        <tr>\n          <th>Name</th>\n          <th>Age</th>\n        </tr>\n      </thead>\n      <tr *ngFor=\"#p of item.people\">\n        <td>{{ p.name }}</td>\n        <td>{{ p.age }}</td>\n      </tr>\n    </table>\n  </div>\n\n  <h4 class=\"ui horizontal divider header\">\n    List with index\n  </h4>\n\n  <div class=\"ui list\" *ngFor=\"#c of cities; #num = index\">\n    <div class=\"item\">{{ num+1 }} - {{ c }}</div>\n  </div>\n\n  <non-bindable-demo></non-bindable-demo>\n    "
                    }), 
                    __metadata('design:paramtypes', [])
                ], NgForSampleApp);
                return NgForSampleApp;
            })();
            browser_1.bootstrap(NgForSampleApp);
        }
    }
});
//# sourceMappingURL=app.js.map