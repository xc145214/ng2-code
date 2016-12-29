/**
 * Created by xiachuan on 2016/12/28.
 */

var name:string = "Felipe";

var age:number = 36;

var married:boolean = false;

var jobs:Array<string> = ['IBM', 'Microsoft', 'Google'];

var fruits:string[] = ['Apple', 'Orange'];

var ages:Array<number> = [1, 2, 3, 4, 5];
var nums:number[] = [5, 6, 7];


enum Role {Employee, Manager, Admin}
;
var role:Role = Role.Employee;

function hello(name:string):string {
    return "Hello " + name;
}

hello("angular2");


class Person {
    first_name:string;
    last_name:string;
    age:number;

    constructor(first_name:string,last_name:string,age:number){
        this.first_name = first_name;
        this.last_name = last_name;
        this.age = age;
    }

    greet() {
        console.log("hello", this.first_name);
    }

    addInYears(years:number):number {
        return this.age +years;
    }
}

var p:Person;

p = new Person;


p.first_name = "filip";

p.greet();


p.age = 6;

p.addInYears(6);

