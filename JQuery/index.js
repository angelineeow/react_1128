//array: forEach, filter, map, reduce, push, pop, shift, unshift, reverse, sort, split, splice, slice, indexOf, find, every, some
//slice: sub-array, creating new array
//splice: delete element, replace, in place
//filter: argument: callback function return boolean, return new array,
//find: return one element from that array, evaluated by the callback
//indexOf: argument: anything, return number index
//every: argument: callback, return boolean
//some: argument: callback, return boolean


// const arr = [1,2,3];

// arr.forEach((ele, index)=>console.log(ele));

// console.log(arr.__proto__)

// console.log(Array.prototype === arr.__proto__)

// //prototype, __proto__
// //bind, apply, call

// Array.prototype.myForEach = function (callback) {
//   const length = this.length;
//   for(let i = 0; i < length; i++){
//     const element = this[i];
//     callback(element, i, this);
//   }
// }
// arr.myForEach((ele, index)=>{console.log(ele, index)});


// // const evenArr = arr.filter(ele=>{
// //   if(isNaN(ele)) return false;
// //   /* if(ele % 2 === 0){
// //     return true
// //   }else{
// //     return false
// //   } */
// //   return !(ele % 2);
// // });



// Array.prototype.myFilter = function(callback) {
//   const length = this.length;
//   const result = [];
//   for(let i = 0; i < length; i++){
//     const ele = this[i]
//     const bool = callback(ele, i, this);
//     if(bool){
//       result.push(ele);
//     }
//   }
//   return result
// }

// const evenArr = arr.myFilter(ele=>{
//   if(isNaN(ele)) return false;
//   /* if(ele % 2 === 0){
//     return true
//   }else{
//     return false
//   } */
//   return !(ele % 2);
// });
// console.log(evenArr);

// //object

// const obj = {
//   one:1,
//   two:2,
//   three:3
// }

// //static method, prototype method
// // entries: 2 dimensional array
// console.log(Object.entries(obj));

// Object.myEntries = function(obj){
//   const result = [];
//   for(let key in obj){
//     const value = obj[key];
//     console.log(key, value)
//     result.push([key, value])
//   }
//   //for of 
//   return result
// }

// //Object.values,
// //Object.keys

// console.log(Object.myEntries(obj));


//jQuery: DOM traversal and manipulation, Event handling, Ajax(asynchronous javascript and xml)
//fetch, axios, xmlhttprequest
//polyfill, cross browser compatibility 
//syntax, compatibility


//console.log()

//$ is function
//$ returns an object
//html is from the object that $ returns
//html is a function



//console.log("123")
//cdn, content delivery network, 
//minification, reduce the payload

// dom manipulation and traversal
$( "button.continue" ).html( "Next Step..." )

//event handling
var hiddenBox = $( "#banner-message" );
$( "#button-container button" ).on( "click", function( event ) {
  hiddenBox.show();

});

//ajax
$.ajax({
  url: "https://jsonplaceholder.typicode.com/posts",
  success: function( result ) {
    console.log(result)
    //$( "#weather-temp" ).html( "<strong>" + result + "</strong> degrees" );
  },

});

//react: performance, modularity, single page application(hydration, routing)
//nextjs: server side rendering
