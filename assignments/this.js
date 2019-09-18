/* The for principles of "this";
* in your own words. explain the four principle for the "this" keyword below.
*
* 1. Window Binding: when used in the global content 'this' binds to the entire
*    window object. This is bad, 'use strict;' to prevent this behavior and set
*    such instances of 'this' to undefined.
* 2. Implicit Binding: 'this' is bound to the object reference to the left of
*    the '.', for example: Array.forEach(), 'this' is the array and forEach is
*    the method.
* 3. New Binding: new bindings use the new keyword to assign 'this' as the
*    object passed into the function parameter.
* 4. Explicit Binding: 'this' is bound using bind, apply, call functions. This
*    allows us to call a method from another object while using the values from
*    a different object as 'this'. (Not really sure where I would use this. I
*    feel like prototypical inheritance is safer.)

*
* write out a code example of each explanation above
*/

// Principle 1

// code example for Window Binding
console.log(this);

// Principle 2

// code example for Implicit Binding
const obj = {
  name: "MyObj",
  myName: function() {
    return `My name is ${this.name}`;
  }
};
console.log(obj.myName());

// Principle 3

// code example for New Binding
function Binding(attr) {
  this.name = attr;
}

const myBinding = new Binding("MyBindingName");
console.log(myBinding.name);

// Principle 4

// code example for Explicit Binding
const newObj = {
  name: "ThisIsATest"
};

function explicitBinding() {
  return `My explicit name is ${this.name}.`;
}

console.log(explicitBinding.call(newObj));
