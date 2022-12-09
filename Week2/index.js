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
//public field
//private field
//getter, setter method
/* class Person {
  #salary; //private field
  name; //public field
  constructor(name, salary){
    console.log("constructor")
    //this point to the instance that is created from the class blueprint
    this.name = name;
    this.#salary = salary
  }
  get salary(){
    return this.#salary;
  }
  set salary(newSalary){
    //console.log("setter function")
    this.#salary = newSalary
  }
  showSalary(){
    console.log(this.#salary);
  }
  walk(){
    console.log(this.name, "is walking!")
  }
}
//class object
var obj2 = new Person("adam", 1000); 
obj2.showSalary()
console.log("name",obj2.name, obj2.salary);
obj2.salary = 2000
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

/* var foo;
foo?.();
foo = () => {
  console.log("hello world");
}; */

//rest operator: is the syntax that takes all argument and put them to an array

/* function foo(){
  console.log(arguments);
  console.log(arguments.forEach())
  for (let i = 0; i < arguments.length; i++) {
    console.log(arguments[i])
  }
} */
/* 
foo(1,2,3,4,5) */

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

//spread operator: it's a syntax sugar for shallow copying data from an object or array
//object key override
//==: coercion, ===: type and value(reference)

/* const obj = { name: "adam" };
const obj1 = { ...obj };
console.log(obj, obj1, obj == obj1);
const arr = [1, 2, 3];
const arr1 = [...arr];
console.log(arr, arr1, arr == arr1); */

/* const arr = [1,2,3];
const arr1 = [4,5,6];
const arr2 = [...arr1,7,8, ...arr];//[1,2,3,4,5,6]
console.log(arr2)
const obj = {name:"adam",age:19};
const obj1 = {age:18};
const obj2 = {...obj1, ...obj};
console.log(obj2) */

//copy
//shallow copy: first layer copy(wrapper)
//deep copy: copy all the reference of nested non-primitive value

/* const obj = {name:"adam", item:["key","phone"]};
const obj1 = {...obj};//shallow copy
const obj2 = {...obj, item:[...obj.item]};//deep copy
const obj3 = JSON.parse(JSON.stringify(obj));//deep copy, not recommended
console.log("stringify",obj3 === obj, obj.item === obj3.item);
console.log(obj, obj1, obj === obj1, obj.item === obj1.item);
console.log(obj.item === obj2.item); */

//destructuring: it's syntax sugar for declaring variable and assigning value from value(element) from object(array)
// alias, default value, nested pattern

/* const obj = {name:"adam", age:18, item:["key", "phone"]};
const {name:name1, age, salary=1000, item:[firstItem, secondItem]} = obj;
const arr = [1,2,3,[4,5]];
const [first, second,third,[fourth, fifth],sixth=6] = arr;
console.log(first, second, third, fourth, fifth, sixth); */

/* const name = obj.name
const age = obj.age */

/* console.log(name1, age, salary, firstItem, secondItem) */

//dot notation, bracket notation: syntax for accessing property in object, element in array
/* 
  obj:
    dot notation: use property name directly
    bracket notation: variable of string 
*/

/* const obj = {name1:"adam"};
const key = "name1"
console.log(obj.name1, obj["name1"], obj[key], obj.key);
const arr = [1,2,3];
const key1 = "2"
console.log(arr["1"], arr[key1], arr["0"]); */

//asynchronous programming: multiple tasks concurrently
// javascript is single threaded language, sync task
// java: multi threading
// event loop: web-api(node-api), javascript engine(v8 engine): callstack, message queue
// webapi, callstack, message queue

/* 
  reverse engineering
    a.name //obj
    a[key] //obj, array, key:interger, string
    a() //function
    a()() // function returns function, higher order function(hoc)
*/
/* 
 settimetout:
    function
    args: arrow function, number
*/
/* 
  heap:{
    foo: function(){}
  }
  callstack: put all the code from a function and execute them one by one
  [ 
    console.log("1");
    console.log("2");
    foo()
    GEC
  ]
*/

/* console.log("1");
console.log("2");
function foo(){
  console.log("1");
console.log("2");
}
foo() */

/* 
  1. start a timer(callstack, webapi), register a callback to be executed in the future(callstack)
  2. print out line500(callstack), timer is counting down at the same time(webapi)
  3. approx 1000ms later, line499 is printed(callstack)
  // webapi, callstack, message queue
*/

/* 
  heap:{}
  callstack:
  [
  ]
  webapi: timer: 0ms
  message queue: []
*/

/* setTimeout(()=>{ //do something in the future
  console.log("hello world")//2
}, 0);
console.log("sync") */

/* setTimeout(()=>{
  console.log("1")//1, 1s
  setTimeout(()=>{
    console.log("2")//2, 1s
  }, 0)
}, 1000) */

/* 
 function scope: var
 block scope: const let
*/
/* let i = 0;
while (i < 5) {
  setTimeout(() => {
    console.log(j); //nothing
  }, 1000);
  i++;
}

let i = 0;
while (i < 5) {
  let j = i;
  setTimeout(() => {
    console.log(j); //nothing
  }, 1000);
  i++;
}

let i = 0;
while (i < 5) {
  var j = i;
  setTimeout(() => {
    console.log(j); //nothing
  }, 1000);
  i++;
} */

/* 
for (let i = 0; i < 5; i++) {
  setTimeout(() => {
    console.log(i);
  }, 1000 * i);
} */

/* for (var i = 0; i < 5; i++) {
  let j = i
  setTimeout(() => {
    console.log(j);
  }, 1000 * i);
}
 */

//promise: why, what, how

//1st request respnose with some data
//2nd request depends on the data from the 1st request
//3nd request depends on the data from the 2nd request
//4th request respnose with some data
//5th request depends on the data from the 1st request
//6th request depends on the data from the 2nd request

/* const mock1stRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 1st request";
    callback(res);
  },1000)
}
const mock2ndRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 2nd request";
    callback(res);
  },1000)
} */
/* 
const mock3rdRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 3rd request";
    callback(res);
  },1000)
}
const mock4thRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 4th request";
    callback(res);
  },1000)
}
const mock5thRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 5th request";
    callback(res);
  },1000)
}
const mock6thRequest = (callback) => {
  setTimeout(()=>{
    const res = "response from 6th request";
    callback(res);
  },1000)
}
//nested pattern
//callback hell
mock1stRequest((res1)=>{
  console.log("res1", res1)
  mock2ndRequest((res2)=>{
    console.log("res2", res2);
    mock3rdRequest((res3)=>{
      console.log("res3", res3);
      mock4thRequest((res4)=>{
        console.log("res4", res4)
        mock5thRequest((res5)=>{
          console.log("res5", res5);
          mock6thRequest((res6th)=>{
            console.log("res6", res6th)
          })
        })
      })
    })
  })
})
 */

/* const mock1stPromiseRequest = new Promise((resolve, reject) => {
  setTimeout(() => {
    const res1 = "response from 1st request";
    resolve(res1);
  }, 1000);
});
mock1stPromiseRequest
  .then((res1) => {
    console.log("res1", res1)
    const mock2ndPromiseRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        const res2 = "response from 2nd request";
        resolve(res2);
      }, 1000);
    });
    return mock2ndPromiseRequest;
  })
  .then((res2) => {
    console.log("res2",res2)
    const mock3rdPromiseRequest = new Promise((resolve, reject) => {
      setTimeout(() => {
        const res3 = "response from 3rd request";
        resolve(res3);
      }, 1000);
    });
    return mock3rdPromiseRequest
  }).then((res3)=>{
    console.log("res3", res3)
  }); */

/* console.log(1);// sync
const promise = new Promise((resolve, reject) => {
  console.log(2)//sync
  setTimeout(() => {
    console.log(3); //async
    //pending
    reject("error");
    resolve("successful!");
  }, 5000);
  console.log(4)//sync
})
  .then((res) => {
    console.log(5);//async
  })
  .catch((err)=>{
    console.log(6)//async
  })
  console.log(7)//sync */
//1, 2, 4, 7, 3, 6

/* setTimeout(() => {
  console.log("3", promise)
}, 6000);
console.log(1, promise); */
//object, Promise, then,
//promise state: fulfilled, pending, rejected

/* console.log(1); //sync
new Promise((resolve, reject) => {
  console.log(2); //sync
  setTimeout(() => {
    console.log(3);
    resolve("resolved!");
    console.log(4);
  }, 1000);
  console.log(5); //sync
})
  .then((result1) => {
    console.log(6, result1);
    return new Promise((resolve, reject) => {
      console.log(7);
      setTimeout(() => {
        console.log(8);
        reject("rejected!");
        console.log(9);
      }, 1000);
      console.log(10);
    });
  })
  .finally(() => {
    console.log(10.5);
  })
  .then(
    (result2) => {
      console.log(11, result2);
    },
    (err) => {
      console.log(11.5, err);
    }
  )
  .catch((err) => {
    console.log(12, err);
  }).finally(()=>{
    console.log(12.5)
  });
console.log(13); //sync */

//1,2,5,13 after 1s
//3,4,6,7,10 after 1s
//8,9, 11.5,

//dialog, modal
//promise

/* Promise.all()//static method */

//promise higher priority than other async process
// micro queue(promise), macro queue
/* setTimeout(() => {
  console.log(0); //async
}, 0);
console.log(1);
new Promise((resolve, reject) => {
  console.log(2); //sync
  setTimeout(() => {
    resolve(1);
  }, 500);
  console.log(3); //sync
})
  .then(() => {
    console.log(4); //async
    return 2;
  })
  .then((res) => {
    console.log(5, res); //async
  });
console.log(6); */

//1, 2, 3, 6, 0, 4, 5,

//Promise.all, Promise.race, Promise.allSettled

//fetch: function that makes http request, webapi 
fetch("https://jsonplaceholder.typicode.com/posts")
  .then((res) => {
    return res.json();
  })
  .then((res) => {
    console.log("res", res);
  });
//axios(like fetch): cancel token, interceptor

//build your own fetch(myFetch) method, by using xmlhttprequest(xhr)