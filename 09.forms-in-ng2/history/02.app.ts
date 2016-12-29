/**
 * Created by xiachuan on 2016/12/29.
 */
import { Component } from 'angular2/core';
import {
    FORM_DIRECTIVES,FormBuilder,ControlGroup
} from 'angular2/common';
import { bootstrap } from 'angular2/platform/browser';

@Component({
    selector:'demo-form-sku-builder',
    template:`
    <div class="ui raised segment">
       <h2 class="ui header">Demo Form: Sku with Builder</h2>

        <form [ngFormModel]="myForm"
        (ngSubmit)="onSubmit(myForm.value)"

        class="ui form">

             <div class="field">
                <label for="skuInput">SKU</label>
                    <input type="text"
                    id="skuInput"
                    placeholder="SKU"
                    [ngFormControl]="myForm.controls['sku']"
                    />
            </div>

             <button type="submit" class="ui button">Submit</button>
        </form>
    </div>
    `
})
class DemoFormSkuBuilder{
    myForm:ControlGroup;

    constructor(fb:FormBuilder){
        this.myForm = fb.group({
            'sku':['ABC123']
        });
    }

    onSubmit(value:string):void{
        console.log("you submitted value:",value);
    }
}

bootstrap(DemoFormSkuBuilder);