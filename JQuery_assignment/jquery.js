
Array.prototype.myReduce = function(callback, initialValue) {
  const length = this.length;
  if(initialValue){ // with an initial value 
    for(let i = 0; i < length; i++){
        const currentValue = this[i];
        initialValue = callback(initialValue, currentValue, i, this);
      }
  } else { // without an initial value
    initialValue = this[0];
    for(let i = 0; i < length; i++){
        const currentValue = this[i];
        initialValue = callback(initialValue, currentValue, i, this);
      }
  }
  return initialValue;
}

Array.prototype.myMap = function(callback) {
    const length = this.length;
    const result = [];
    for(let i = 0; i < length; i++){
      const ele = this[i]
      result.push(callback(ele, i, this)); 
    }
    return result; // return new array
}

Array.prototype.mySome = function(callback) {
    const length = this.length;
    for(let i = 0; i < length; i++){
      const ele = this[i]
      if(callback(ele, i, this)) return true; // at least one element 
    }
    return false;
}

Object.myKeys = function(obj) {
    const length = obj.length;
    const result = [];
    for(const key in obj){
        result.push(key);
    }
    return result;
} 