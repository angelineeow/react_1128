// definition of boilerplate, bundler, and transpiler
// Boilerplate is a part of code that is reused multiple times with no to a little modification. Since there is many great quality snippets of codes created today, boilerplate code is useful to create a similar project which requires us to just modify the existing codes.
// Bundler is a tool that combines multiple JavaScript code files into a single JavaScript code file that can be executed in browser.
// Transpiler is a translator that translates a programming language to another programming language. For instance, we can use Babel which is a transpiler to translate ECMAScript 2015+ code to older version that is compatible to browsers and environments.
  
// Basic: Get an object with properties including url, data, and success. 
$.myAjax = function (settings){
    let xhr = new XMLHttpRequest();
    xhr.open(settings.method, settings.url);
    xhr.responseType = settings.dataType;
    xhr.onload = () => {
        settings.success(xhr.response);
    } 
    xhr.onerror = () => {
        settings.error(xhr.response);
    }
    xhr.send()
}

// success case
$.ajax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    dataType: "json",
    success: function( result ) {
      console.log(result)
    },
    error: () => {
        console.error("ERROR for $.ajax")
    }
});

$.myAjax({
    url: "https://jsonplaceholder.typicode.com/posts",
    method: "GET",
    dataType: "json",
    success: function( result ) {
        console.log(result)
    },
    error: () => {
        console.error("ERROR for $.myAjax")
    }
});

//error case
$.ajax({
    url: "https://errorjson.com",
    method: "GET",
    dataType: "json",
    success: function(result) {
        console.log(result)
    },
    error: () => {
        console.error("ERROR for $.ajax")
    }
});

$.myAjax({
    url: "https://errorjson.com",
    method: "GET",
    dataType: "json",
    success: function(result) {
        console.log(result)
    },
    error: () => {
        console.error("ERROR for $.myAjax")
    }
});