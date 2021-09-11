"use strict";
class Vehicle {
    constructor(year) {
        this.year = year;
    }
    printYear() {
        console.log('This vehicle has a year of', this.year);
    }
    static printSomething() {
        console.log('Something');
    }
}
const fordFocus = new Vehicle(2006);
const toyotaYaris = new Vehicle(2011);
fordFocus.printYear();
toyotaYaris.printYear();
Vehicle.printSomething();
