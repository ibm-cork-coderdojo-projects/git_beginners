"use strict";
/*
* 1.1 We want to access component decorator in angular lib
* 1.2 import bootstrap method from angular lib to use in are app.
* */
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
var core_1 = require("@angular/core"); // 1.1
//import { bootstrap } from '@angular/platform-browser-dynamic'; // 1.2
var AppComponent = (function () {
    function AppComponent() {
        /*
        * 3.1 This is where we can define any variables or functions that our components templates can use.
        * */
        this.name = 'New CoderDojos_2 HTML...'; // 3.1
        this.image = 'assets/img/coderdojo_trans.png';
        this.colour = 'Blu';
    }
    AppComponent = __decorate([
        core_1.Component({
            /*
            * 2.1. Pass in the main index html class selector
            * 2.2. New way of injecting html code
            * 2.3. Old way of injecting html code
            * 2.4. Beginner way to show html code
            * */
            selector: 'my-app',
            //template: require('./app.component.html'),                 // 2.2
            templateUrl: './app.component.html',
        })
    ], AppComponent);
    return AppComponent;
}());
exports.AppComponent = AppComponent;
