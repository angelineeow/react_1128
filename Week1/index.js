/* 
  runtime: browser, node
  ecmascript: syntax standard
  javascript: browser, ecmascript + webapi(like getElementById)
  node.js: node, ecamscript + nodeapi(fs, global)
*/

/* console.log("hello world!")
console.log(typeof 1); //number
console.log(typeof 'hello'); //string
console.log(typeof []); // object
console.log(typeof {}); // object
console.log(typeof null); //object
console.log(typeof function(){}) //object
console.log(typeof undefined); //undefined
console.log(typeof true); //boolean
console.log(typeof (typeof true)); // string */

//hoisting

/* var a = 1;
console.log("a:",a)
foo(a);
console.log("a2:", a);
//pass by value
function foo(input){
  input = 2
  console.log("input:",input)
}
 */

/* var b = {name:"adam"};
console.log("b:",b); //{name:"adam"}
boo(b);
console.log("b2:", b);//{name:"adam"}
function boo(input){
 console.log(input === b); //true
  input = {name:"john"};
  console.log(input === b); //false
  console.log("input:", input); // {name:"john"}
} */

/* 
  reassignment
  mutation
  pass by reference and pass by value
*/

/* var b = {name:"adam"};
console.log("b:",b); //{name:"adam"}
boo(b);
console.log("b2:", b);//{name:"john"}
function boo(input){
  //input = {name:"john"};
  console.log(input === b);//true;
  input.name = "john"
  console.log(input === b);//true
  console.log("input:", input); // {name:"john"}
}  */

/* const foo1 = () => {
}
 */
/* 
  reference: pointer, address
  value: value
*/
/* var b = 1; //b=1
var c = b; //b=1, c=1
b = 2 //b=2, c=1 */

/* 
  primitive type
    number, string, boolean
  non-primitive type
    object: object, array, function
*/

/* //non-primitive type
var a = {name:"adam"};
var b = {name:"adam"};
console.log(a===b);//false;
console.log(a.name === b.name);//true
//primitive type
var a = 1;
var b = 1;
console.log(a === b);//true */

/* var b = {name:"adam"}; // b: {name:"adam"}
var c = b; //b:{name:"adam"}, c: {name: "adam"}
b.name = "john"//b: {name:"john"}, c:{name:"adam"}
console.log("c:",c)
 */
/* var b = {name:"adam"}; // b: {name:"adam"}
var c = b; //b:{name:"adam"}, c: {name: "adam"}
b = {name:"john"} //b: {name:"john"}, c:{name:"adam"}
console.log("c:",c) */

//coercion,
/* var a = "";
var b = 0;
console.log(a == b, a, b);//true */

//eat up bug, also create unpredictable issue
//"===" "==": compare with value, compare with coercion

//trusy and falsy value
//if condition, &&, ternary expression
/* 
  1
  0
  "1"
  "0"
  true false
  undefined null
  -1
*/
/* if (null) {
  console.log("truthy");
} else {
  console.log("falsy");
} */
//plain object
/* var obj = {};
console.log("obj", obj);
var obj1 = Object.create({})
console.log("obj1", obj1); */

//blueprint of the instance of object
//syntax/syntatic sugar
//method: function from class, that will be inherited by the instance of the object

/* class Person {
  constructor(name){
    console.log("constructor")
    //this point to the instance that is created from the class blueprint
    this.name = name
  }
  walk(){
    console.log(this.name, "is walking!")
  }
}
//class object
var obj2 = new Person("adam");
obj2.walk()
console.log("obj2", obj2); */
/* 
  oop:
    inheritance
    abstraction
    polymorphism
    encapsulation
*/
// prototype chain: is how javascript handle inheritance
/* 
class Employee extends Person{
  constructor(salary, name){
    super(name)
    this.salary = salary
  }
  walk(){
    console.log(this.name,"walks!")
  }
}
var employee = new Employee(100, "john");
//3 prototypes in prototype chain
employee.walk();//john is walks!
employee.walk(1);
console.log("employee", employee); */
/* 
  overriding: child class method override parent class method
  overloading:javascript doesn't have overloading
*/
/* 
  Human
  Person
  Employee
  employee.walk() //error
*/

/* function Person(name){//constructor function
  this.name = name;
}
Person.prototype.walk = function(){ //how you visit prototype from constructor function
  console.log(this.name,"is walking!")
}
var person = new Person("adam");
person.__proto__.walk = function(){ //how you visit prototype from instance object
  console.log(this.name,"is walking!")
}
person.walk()
console.log("person", person);
console.log(typeof person);
console.log(person instanceof Person) */

//ecmascript, es5, es6, es2017, es2020

// class, arrow function, let const, promise, rest, spread, destructuring

/* 
  javascript allow inner scope to access variable from outter scope all the time, but not the opposite way
  arrow function: this keyword, is the same as the this from it's lexical scope, it's the same as the this keyword from it's outter scope
  regular function: this keyword: is the object that invokes the function
  hoisting
*/
/* 
const a = 1;
const foo = (arg) => {
  console.log("hello world", this);//window 
};
function boo (){
  const boo1 = () => {
    console.log("boo1",this)//window
  }
  boo1()
}
boo(); */

/* 
  scope:
    function:
    block:
      if while for try catch
*/
/* console.log(this);//window
const obj = {
  arrowFun: () => {
    console.log("arrowFun", this)
  },
  regularFun: function(){
    //console.log("regularFun", this);
    const arrowFun1 = () => {
      console.log("arrowFun1", this);//obj
      const arrowFun2 = () => {
        console.log("arrowFun2", this)//obj
      }
      arrowFun2()
    }
    arrowFun1()
  }
}
obj.arrowFun(); //window
obj.regularFun(); //obj
const obj1 = {
  name:"adam"
};
obj1.regularFun = obj.regularFun;
obj1.regularFun();//obj1
//obj.regularFun()//obj */

/* function foo1() {
  console.log("hello world", this);
}
foo(); */

/* let const
   var: hoisting: you can access the variable before the declaration
   function keyword: hoisting
   declaration: create memory, create namespace
   initialization: initial value, first assignment
   re-assignment: give it another value 
*/
/* console.log(a);//undefined
var a = 1; */

/* var a;
console.log(a);//undefined
a=1; */

/* a=1;
console.log(a);//reference error
let a;
 */

/* 
const a = 1;
a=2;
console.log(a);//type error */

/* foo();
function foo(){
  console.log("hello world")
} */

var foo;
foo?.();
foo = () => {
  console.log("hello world");
}; 

//rest operator: is the syntax that takes all argument and put them to an array


// function foo(){
//     console.log(arguments);
//     console.log(arguments.forEach())
//     for (let i = 0; i < arguments.length; i++) {
//       console.log(arguments[i])
//     }
//   }
  
//   foo(1,2,3,4,5)
  
  /* function foo(...args) {
    console.log(args);
  }
  foo(1, 2, 3, 4);
  function sum(...args) {
    let sum = 0;
    for (let i = 0; i < args.length; i++) {
      sum += args[i];
    }
    return sum;
  }
  console.log(sum(1, 2, 3, 4, 5, 6)); */