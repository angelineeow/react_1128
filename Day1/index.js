// HTTP request: GET | POST | PUT | PATCH | DELETE (CRUD)
// GET: retrieve data from server
// POST: submit data to server, create new resource
// PUT/PATCH: updating, put - update the entire data object, patch - update certain fields
// DELETE: delete

// {name: nicole}
// {name: adam, gender: female} PUT will overwrite while PATCH only add gender

// not best practice:
// we can create new user with GET but its not safe so we use POST to update in the body
// we technically can do POST request to do anything 

// POST, action: create, update, delete...

// Status code
// 100 - informational responses
// 200 - ok, successful
// 300 - redirection
// 400 - client error
// 500 - server error

console.log("hello")

// console.log(this) 
// in browser it will log out the object
// in terminal it will log out empty object

// function foo(){
//     console.log(this) 
// }

// foo();
// browser environment and node environment are different
// ECMAScript: syntax standard, es6 2015
// Javascript - ECMAScript + WebAPI
// NodeJS - ECMAScript + NodeAPI

var element = document.getElementById("root");
console.log(element.id);