/**
 * Created by xiachuan on 2016/12/29.
 */
import {Component,EventEmitter} from 'angular2/core';

import {bootstrap} from 'angular2/platform/browser';

/**
 * Provides a Product object
 */
class Product{
    constructor(
        public sku:string,
        public name:string,
        public imageUrl:string,
        public department:string[],
        public price:number
    ){}
}

/**
 * @ProductImage: A component to show a single Product's image
 */
@Component({
    selector:'product-image',
    host:{class:'ui small image'},
    inputs:['product'],
    template:`
    <img class="product-image" [src]="product.imageUrl"/>
    `
})
class ProductImage{
    product:Product;
}

/**
 * @ProductDepartment: A component to show the breadcrumbs to a
 * Product's department
 */
@Component({
    selector:'product-department',
    inputs:['product']
})
class ProductDepartment{

}


@Component({
    selector:'inventory-app',
    template:`
    <div class="inventory-app">
       <h1> {{ product.name }}</h1>
       <span> {{ product.sku }}</span>
    </div>
    `
})
class InventoryApp{
    product:Product;

    constructor(){
        let newProduct = new Product(
            'NICEHAT',
            'A Nice Black Hat',
            '/resources/images/products/black-hat.jpg',
            ['Men', 'Accessories', 'Hats'],
            29.99
        );

        this.product = newProduct;
    }
}

bootstrap(InventoryApp);


