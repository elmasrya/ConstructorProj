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
