
function myFetch(url){
    return new Promise((resolve, reject) => {
        let xhr = new XMLHttpRequest();
        xhr.open("GET", url);
        xhr.responseType = "json";
        xhr.onload = function() {
            resolve(xhr.response);
        };
        xhr.onerror = function(){
            reject(xhr.response);
        }
        xhr.send();
      });
}

myFetch("https://jsonplaceolder.typicode.com/posts")
  .then((response) => console.log(response))
  .catch((err) => console.error(err));