/**
 * Created by xiachuan on 2016/12/29.
 */
import { Component } from 'angular2/core';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector:'non-bindable-demo',
    template:`
        <hr/>
      <h4 class="ui horizontal divider header">
       angular non bindable sample app
      </h4>
     <div>
        <span class="bordered">{{ content }}</span>
        <span class="pre" ngNonBindable>
          &larr; This is what {{ content }} rendered
        </span>
      </div>
    `
})
class NonBindableDemo{
    content: string;

    constructor() {
        this.content = 'Some text';
    }
}

@Component({
    selector: 'ng-for-sample-app',
    directives:[NonBindableDemo],
    template: `
     <h4 class="ui horizontal divider header">
    Simple list of strings
  </h4>

  <div class="ui list" *ngFor="#c of cities">
    <div class="item">{{ c }}</div>
  </div>

  <h4 class="ui horizontal divider header">
    List of objects
  </h4>

  <table class="ui celled table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Age</th>
        <th>City</th>
      </tr>
    </thead>
    <tr *ngFor="#p of people">
      <td>{{ p.name }}</td>
      <td>{{ p.age }}</td>
      <td>{{ p.city }}</td>
    </tr>
  </table>

  <h4 class="ui horizontal divider header">
    Nested data
  </h4>

  <div *ngFor="#item of peopleByCity">
    <h2 class="ui header">{{ item.city }}</h2>

    <table class="ui celled table">
      <thead>
        <tr>
          <th>Name</th>
          <th>Age</th>
        </tr>
      </thead>
      <tr *ngFor="#p of item.people">
        <td>{{ p.name }}</td>
        <td>{{ p.age }}</td>
      </tr>
    </table>
  </div>

  <h4 class="ui horizontal divider header">
    List with index
  </h4>

  <div class="ui list" *ngFor="#c of cities; #num = index">
    <div class="item">{{ num+1 }} - {{ c }}</div>
  </div>

  <non-bindable-demo></non-bindable-demo>
    `
})
class NgForSampleApp {
    cities:Array<string>;
    people:Array<Object>;
    peopleByCity:Object;

    constructor() {
        this.cities = ['Miami', 'Sao Paulo', 'New York'];
        this.people = [
            {name: 'Anderson', age: 35, city: 'Sao Paulo'},
            {name: 'John', age: 12, city: 'Miami'},
            {name: 'Peter', age: 22, city: 'New York'}
        ];
        this.peopleByCity = [
            {
                city: 'Miami',
                people: [
                    {name: 'John', age: 12},
                    {name: 'Angel', age: 22}
                ]
            },
            {
                city: 'Sao Paulo',
                people: [
                    {name: 'Anderson', age: 35},
                    {name: 'Felipe', age: 36}
                ]
            }
        ];
    };
}

bootstrap(NgForSampleApp);