// Defining classes is easy, just like defining a function we will use the 'class' keyword insted of 'function' keyword (without the parenthesis)
class Student{
  bioData(){
    console.log("this is the msg \n");
  }
}

// Now to create a new object using the blueprint provided by the class all we have to do is to use the 'new' keyword
let iswar = new Student();

iswar.bioData();

// By default javascript adds a 'constructor' method to the class and use that to define variables
// We can use constructor to create new variables and methods
class Car{
  constructor(color, canFly){
    this.carColor = color;
    this.carCanFly = canFly
  }

  doTheDragRace(){
    if(this.carCanFly){
      console.log(`This car can fly, that's not fair \n`);
      return `This car can fly, that's not fair \n`;
    }else{
      console.log(`This car will not be able to fly, let's do the race!!! \n`);
      return `This car will not be able to fly, let's do the race!!! \n`;
    }
  }
}

// Now create an instant from the Car class
let tesla = new Car("Purple", false)

tesla.doTheDragRace()

// Now the awsome part, we can extent classes to add more flexibility and usefulness to the programm
// To inhereit the properties from the parent class's constructor we have to use the 'super()' method at first in the new 
// constructor with all the arguments of the parent class which we want to inherit
class Bus extends Car{
  constructor(color, canFly, goodForIncome){
    super(color, canFly);
    this.isGoodForIncome = goodForIncome;
  }
  getBusData(){
    console.log(`${super.doTheDragRace()} And this is also ${this.isGoodForIncome} that this is good for fin planing \n`);
  }
}

// Let's create an instant of the Bus class
let redBus = new Bus("Red", false, true);
console.log(redBus.getBusData());