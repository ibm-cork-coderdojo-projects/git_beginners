/*
* 1.1 We want to access component decorator in angular lib
* 1.2 import bootstrap method from angular lib to use in are app.
* */

import { Component } from '@angular/core';                     // 1.1
//import { bootstrap } from '@angular/platform-browser-dynamic'; // 1.2

@Component({
    /*
    * 2.1. Pass in the main index html class selector
    * 2.2. New way of injecting html code
    * 2.3. Old way of injecting html code
    * 2.4. Beginner way to show html code
    * */
    selector: 'my-app',                                     // 2.1
    //template: require('./app.component.html'),                 // 2.2
    templateUrl: './app.component.html',                    // 2.3
    //template: `<h1>Hello_2 {{name}}</h1>`,                // 2.4
})
export class AppComponent {
    /*
    * 3.1 This is where we can define any variables or functions that our components templates can use.
    * */

    name = 'New CoderDojos_2 HTML...';  // 3.1
    colour= 'Blu'

}






