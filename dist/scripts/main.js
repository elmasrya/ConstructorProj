// Hey Iron Yard Hackers! Enjoy!
// Make sure to open your js consoles!

//          __  _ ___ __  _
//   __  __/ /_(_) (_) /_(_)__  _____/
// / /_/ / /_/ / / / /_/ /  __(__  )
// \__,_/\__/_/_/_/\__/_/\___/____/

/*....ANDREW!!! DO NOT TOUCH THIS CODE YOU IDIOT!!!.....*/
/*......................................................*/

// a simple "it" function for naming groups of expectations
function it(description, contents){
  console.log('\n\n"It '+ description + '"');
  contents();
}

// A simple function for expecting values
// Ex: expect(sadie.color).toBe('black'); // should return true

/*....ANDREW!!! DO NOT TOUCH THIS CODE YOU IDIOT!!!.....*/
/*......................................................*/

function expect(target) {
  return {
    toBe: function(expectation) {
      if (target === expectation) {
        console.log('\n     %cPASSED', 'color:green;', 'Expected', target, 'to be', expectation );
        return true;
      } else {
        console.log('\n     %cFAILED', 'color:red;', 'Expected', target, 'to be', expectation );
        return false;
      }
    }
  }
}

//                          __                  __
//   _________  ____  _____/ /________  _______/ /_____  __________
//  / ___/ __ \/ __ \/ ___/ __/ ___/ / / / ___/ __/ __ \/ ___/ ___/
// / /__/ /_/ / / / (__  ) /_/ /  / /_/ / /__/ /_/ /_/ / /  (__  )
// \___/\____/_/ /_/____/\__/_/   \__,_/\___/\__/\____/_/  /____/
//
// Only add code to *THIS* section!

// ????????
// ????????
// ????????




 var Dog = function (options){
  var options = options || {};
  this.color = options.color;
  this.name = options.name;
  this.status = 'normal';

  if(options.hungry === undefined) {
    this.hungry =true
    }
  else{ this.hungry=options.hungry;
  }
};





var Human = function (options){
  var options = options || {};
  this.pet = function(x){
    x.status = 'happy';
  };

  this.feed = function(x){
    x.hungry = false;
  };

  this.cool = (options.cool === undefined) ? false: options.cool;

  };





/*....ANDREW!!! DO NOT TOUCH THIS CODE YOU IDIOT!!!.....*/
/*......................................................*/

var sadie = new Dog({
  color: "black",
  hungry: false,
});

var moonshine = new Dog({
  color: "blue-red"
});

var atticus = new Dog();

/*....ANDREW!!! DO NOT TOUCH THIS CODE YOU IDIOT!!!.....*/
/*......................................................*/

var mason = new Human();

var julia = new Human({
  cool: true
});

/*....ANDREW!!! DO NOT TOUCH YOU IDIOT!!!.....*/
/*............................................*/


//                     __           __  __    _                             __
//    ____ ___  ____ _/ /_____     / /_/ /_  (_)____   _      ______  _____/ /__
//   / __ `__ \/ __ `/ //_/ _ \   / __/ __ \/ / ___/  | | /| / / __ \/ ___/ //_/
//  / / / / / / /_/ / ,< /  __/  / /_/ / / / (__  )   | |/ |/ / /_/ / /  / ,<
// /_/ /_/ /_/\__,_/_/|_|\___/   \__/_/ /_/_/____/    |__/|__/\____/_/  /_/|_|
//
// Don't edit this section. Instead make these tests pass by writing
// constructors in the constructor section above ;D

it("should make Sadie happy when Mason pets her", function(){
  expect(sadie.status).toBe('normal');
  mason.pet(sadie);
  expect(sadie.status).toBe('happy');
});

it("should make Sadie black", function(){
  expect(sadie.color).toBe('black');
});

it("should be make Moonshine hungry and Sadie not hungry", function(){
  expect(moonshine.hungry).toBe(true);
  expect(sadie.hungry).toBe(false);
});

it("should make Moonshine no longer hungry when you feed him", function(){
  julia.feed(moonshine);
  expect(moonshine.hungry).toBe(false);
});


it("should not affect Atticus and Moonshine's owner properties when setting Mason as Sadie's owner ", function(){
  sadie.owner = mason;
  expect(moonshine.owner).toBe(undefined);
  expect(atticus.owner).toBe(undefined);
});

it("should make Julia cool and Mason not cool", function(){
  sadie.owner = mason;
  expect(julia.cool).toBe(true);
  expect(mason.cool).toBe(false);
});

//
//
// var Person = function(options) {
//   var options=options || {};
//   this.name=options.name;
//   this.age=options.age;
//
// this.drive = function(driven,updatedCondition) {
// driven.condition=updatedCondtion;
// };
// };
//
// Person.prototype.greeting = function () {
//   console.log('Hi, ' + 'my name is ' + this.name);
// };
//
// var tim = new Person({name: "Tim", age:30});
// var bob = new Person({name: "Bob", age:96});
//
// var Car = function(option) {
//   var options=options || {};
//   this.make=options.make;
//   this.color=options.color;
//   this.condition = options.condition || 'New';
//
// };
//
//
//
//
//
//
// var Animal = function(name, species) {
//   this.name=name;
//   this.species=species;
//   this.des = function () {
//     return 'I am a '+ this.species + 'and my name is ' + this.name;
//   }
// };
//
// var Dog = function(name) {
//   Animal.call(this, name, "Dog");
// };
//
// Dog.prototype.noise = function () {
//   return 'Woof Woof';
// };
//
//
// var goat=new Animal('Bolt','Goat');
// var dog=new Dog('Ralph','Dog');
