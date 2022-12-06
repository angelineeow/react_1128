/* 1. Write a JavaScript function that reverse a number. */

function reverse(num){
    return num.toString().split("").reverse().join("");
}
var x = 32243;
console.log(reverse(x));

/* 2. Write a JavaScript function that checks whether a passed string is palindrome or not? */

function is_palindrome(str){
    var new_str = str.replace(/\s+/g, ""); // remove any spaces
    var reversed = str.replace(/\s+/g, "").split("").reverse().join("");
    if(new_str === reversed){
        return true;
    }
    return false;
}

console.log(is_palindrome("madam"));
console.log(is_palindrome("nurses run"));

/* 3. Write a JavaScript function that generates all combinations of a string. */

function generate_all_combinations(str){
    var str_len = str.length;
    var results = [];
    for(let i = 0; i < str_len; i++ ){
        for(let j = i+1; j < str_len + 1; j++){
            results.push(str.slice(i,j));
        }
    }
    return results
}

console.log(generate_all_combinations("dog"));

/* 4. Write a JavaScript function that returns a passed string with letters in alphabetical order. */

function alphabetical_order(str){
    return str.split("").sort().join("");
}

console.log(alphabetical_order("abeemrstw"));

/* 5. Write a JavaScript function that accepts a string as a parameter and converts the first letter of each word of the string in upper case. */

function capitalize_each_word(str){
    var array_strings = str.split(" ");
    var new_array = [];
    for(const element of array_strings){
        new_array.push(element.charAt(0).toUpperCase() + element.substr(1));
    }
    return new_array;
}

console.log(capitalize_each_word("the quick brown fox"));

/* 6. Write a JavaScript function that accepts a string as a parameter and find the longest word within the string. */

function find_longest_word(str){
    var arr = str.split(" ");
    return arr.reduce((a,b) => a.length > b.length ? a : b, 0);
}

console.log(find_longest_word("Web Development Tutorial"));

/* 7. Write a JavaScript function that accepts a string as a parameter and counts the number of vowels within the string. */

function count_vowel(str){
    return str.match(/[aeiou]/ig).length;
}

console.log(count_vowel("The quick brown fox"));

/* 8. Write a JavaScript function that accepts a number as a parameter and check the number is prime or not. */

function is_prime(num){
    if(num % 1 === 0 && num % num === 0){
       for (let i = 2; i < num; i++){
           if(num % i === 0){
               return false;
           }
       }
       return true;
    }
    return false;
}

console.log(is_prime(1));
console.log(is_prime(2));
console.log(is_prime(3));
console.log(is_prime(4));
console.log(is_prime(5));
console.log(is_prime(6));
console.log(is_prime(10));

/* 9. Write a JavaScript function which accepts an argument and returns the type. */

function type_arg(argument){
    return typeof(argument);
}

/* 10. Write a JavaScript function which returns the n rows by n columns identity matrix. */

function identity_matrix(num){
    var result = [];
    for(let i = 0; i < num; i++){
        if(!result[i]){
            result[i] = [];
         };
         for(let j = 0; j < num; j++){
            if(i === j){
                result[i][j] = 1;
            }else{
                result[i][j] = 0;
            };
         };
      };
      return result;
}

console.log(identity_matrix(4));

/* 11. Write a JavaScript function which will take an array of numbers stored and find the second lowest and second greatest numbers, respectively. */

function second_lowest_greatest(arr){
    var sorted_arr = arr.sort();
    return [sorted_arr[1], sorted_arr[sorted_arr.length - 2]];
}

console.log(second_lowest_greatest([1,2,3,4,5]));

/* 12. Write a JavaScript function which says whether a number is perfect. */

function perfect_num(num){
    var sum = 0;
    for(let i = 0; i < num; i++){
        if(num % i === 0){
            sum+=i;
        }
    }

    if(sum === num) return true;
    return false;

}

console.log(perfect_num(6));
console.log(perfect_num(28));
console.log(perfect_num(300));
console.log(perfect_num(496));

/* 13. Write a JavaScript function to compute the factors of a positive integer. */

function factors(num){
    var result = [];
    if(num < 0) return false;
    if(num === 0) return 0;
    for(let i = 1; i < num+1; i++){
        if(num % i === 0){
            result.push(i);
        }
    }
    return result;
}

console.log(factors(0));
console.log(factors(6));
console.log(factors(20));
console.log(factors(36));

/* 14. Write a JavaScript function to convert an amount to coins. */

function amountTocoins(num, coins){
    if(num === 0) {return [];}
    else{
        if(num >= coins[0]){
            return [coins[0]].concat(amountTocoins(num - coins[0], coins));
        }
        else{
            coins.shift();
            return amountTocoins(num, coins);
        }
    }
}

console.log(amountTocoins(0, [25, 10, 5, 2, 1]));
console.log(amountTocoins(46, [25, 10, 5, 2, 1]));

/* 15. Write a JavaScript function to compute the value of bn where n is the exponent and b is the bases. Accept b and n from the user and display the result. */

function exponent(b, n){
    //b: bases n: exponent
    var value = 1;
    for(let i = 0; i < n; i++){
        value *= b;
    }

    return value;
}

console.log(exponent(5,2));

/* 16. Write a JavaScript function to extract unique characters from a string. */

function extract_unique(str){
    var unique_char = "";
    for(let i = 0; i < str.length; i++){
        if(unique_char.indexOf(str.charAt(i)) == -1){
            unique_char += str[i];
        }
    }
    return unique_char;
}

console.log(extract_unique("thequickbrownfoxjumpsoverthelazydog"));

/* 17. Write a JavaScript function to get the number of occurrences of each letter in specified string. */

function num_occur(str){
    var arr = str.split("");
    result = arr.reduce((string, index) => {
        string[index] = string[index] ? ++string[index]:1;
        return string;
    }, {});
    return result;
}

console.log(num_occur("nursesrun"));

/* 18. Write a function for searching JavaScript arrays with a binary search. */

function binary_search(arr, x){
    var start = 0;
    var end = arr.length-1;

    while (start <= end){
        let mid = Math.floor((start + end)/2);

        if(arr[mid] === x) {return true;}
        else if(arr[mid] < x){
            start = mid + 1;
        } else {
            end = mid - 1;
        }
    }
    return false;
}

console.log(binary_search([1,3,4,5,6,7], 5));

/* 19. Write a JavaScript function that returns array elements larger than a number. */

function compare(arr, x){
    var result = [];
    for(const element of arr){
        if(element > x){
            result.push(element);
        }
    }
    return result;
}

console.log(compare([2,3,4,5,6,7,8,9], 4));

/* 20. Write a JavaScript function that generates a string id (specified length) of random characters. */

function generate_random_id(len){
    var result = "";
    var character_list = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789";
    for(let i = 0; i < len; i++){
        result += character_list.charAt(Math.floor(Math.random() * character_list.length));
    }
    return result;
}

console.log(generate_random_id(8));

/* 21. Write a JavaScript function to get all possible subset with a fixed length (for example 2) combinations in an array. */

function subsetOfSize(array, n) {

    var result = [[]];

    for (var i = 0; i < array.length; i++) {
      
      var len = result.length; 
      
      for (var j = 0; j < len; j++) { 
        result.push(result[j].concat(array[i]));
      }
    }
    return result.filter(element => element.length === n);
 }

 console.log(subsetOfSize([1, 2, 3],2));

 /* 22. Write a JavaScript function that accepts two arguments, a string and a letter and the function will count the number of occurrences of the specified letter within the string. */

 function countLetter(str, letter){
    return str.split("").filter(e => e === letter).length;
 }

 console.log(countLetter("microsoft.com", "o"));

 /* 23. Write a JavaScript function to find the first not repeated character. */

 function firstNotRepeat(str){
    for (let i = 0; i < str.length; i++) {
        var char = str.charAt(i);
        if (str.indexOf(char) == i && str.indexOf(char, i + 1) == -1) {
          return char;
        }
      }
    return null;
 }

 console.log(firstNotRepeat("abacddbec"));

 /* 24. Write a JavaScript function to apply Bubble Sort algorithm. */

 function bubbleSort(arr){
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length - i - 1; j++){
            if(arr[j] < arr[j+1]){
                var temp = arr[j];
                arr[j] = arr[j+1];
                arr[j+1] = temp;
            }
        }
    }
    return arr;
 }

 console.log(bubbleSort([12, 345, 4, 546, 122, 84, 98, 64, 9, 1, 3223, 455, 23, 234, 213]));

 /* 25. Write a JavaScript function that accept a list of country names as input and returns the longest country name as output. */

function Longest_Country_Name(arr){
    var result = "";
    for(let i = 0; i < arr.length; i++){
        for(let j = 0; j < arr.length-1; j++){
            if(arr[i].length > arr[j].length){
                result = arr[i];
            } else {
                result = arr[j];
            }
        }
    }
    return result;
}

console.log(Longest_Country_Name(["Australia", "Germany", "United States of America"]));

/* 26. Write a JavaScript function to find longest substring in a given a string without repeating characters. */

function longest_substring(str){
    let substr = "";
    for (let i = 0; i < str.length; i++) {
        if (substr.includes(str[i]) === false) {
            substr += str[i];
        }
    }
    return substr;
};

console.log(longest_substring("microsoft.com"));
console.log(longest_substring("abcabcbb"));

/* 27. Write a JavaScript function that returns the longest palindrome in a given string. */

function longest_palindrome(str){

    function isPalindrome(str) {
      var newStr = str.split("").reverse().join("");
      return str === newStr;
    }
  
    var max_length = 0;
    var result = "";
  
    for(let i = 0; i < str.length; i++){
      var subs = str.substr(i, str.length);
      
      for(let j = subs.length; j >= 0; j--){
        var sub_subs_str = subs.substr(0, j);
        
        if (sub_subs_str.length <= 1)
          continue;
        
        if (isPalindrome(sub_subs_str)){
          if (sub_subs_str.length > max_length){
            max_length = sub_subs_str.length;
            result = sub_subs_str;
          }
        }
      }
    }
  
  return result;
  }
  
  console.log(longest_palindrome("bananas"));

/* 28. Write a JavaScript program to pass a 'JavaScript function' as parameter. */

function sayHello() {
    return "Hello";
}

function person(name, func){
    console.log(func() + " " + name);
}

person("Angeline", sayHello);
person("Rachel", sayHello);

/* 29. Write a JavaScript function to get the function name. */

function teddy() { 
    console.log(arguments.callee.name);
}
  
teddy();