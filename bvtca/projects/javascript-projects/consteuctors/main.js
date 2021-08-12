

// // ES5 syntax
// //constructor
// function Car(year){
//     this.make = "ford";
//     this.model = "escort";
//     this.year = year;
// this.isOlderThan2000 = function(){
//     return(2000 > this.year);
// }

//     return this;*/
// }




// const myCar = new Car(1990);
// console.log(myCar);
// console.log(olderThan2000);


// const ourCars = [];
// for (let i = 0; i < 20; i++){
//     ourCars.push(new Car(2000 + i));
// }



// //Regular object
// const aCar = {
//     make: "ford",
//     model: "escort"
// };




//ES6 syntax

class Car{
    make = "ford";
    model = "escort";
    constructor(year){
        this.year = year;
    }
    drive(){
        console.log(`I'm Driving a ${this.year} ${this.make} ${this.model}`)
    }
    sell(){
        console.log('sell car');
    }
    buy(){
        console.log('buy car');
    }
}

//cannot use ==> for drive function because the class will see it as a property 




//Inheretance
class Lambo extends Car{  //extendsis super important  // cannot inheret from multiple classes // lambo and newCar will have access to all funvtions inside car
    constructor(){
        super(2020);   //this syntax assumes this is passed in only need to pass super constructor  // refers to the Car's constructor method
        this.make = "Audi";
        this.model = "Lamborghini";
        this.topSpeed = 300;
    }

    describe(){
        console.log(this.make, this.model);
    }
}

const myCar = new Car(2000);
console.log(myCar);

const newCar = new Lambo();
newCar.describe();