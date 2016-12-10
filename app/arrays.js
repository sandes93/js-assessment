exports = typeof window === 'undefined' ? global : window;

exports.arraysAnswers = {
  indexOf: function(arr, item) {
      for (var i = 0; i < arr.length; i++) {
        if (arr[i] === item){
          return i;
        }
      }
      return -1;
  },

  sum: function(arr) {
    sum = 0
    for (var i = 0; i < arr.length; i++) {
      sum +=arr[i]
    }
    return sum;
  },

  remove: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]=== item){
        arr.splice(i,1);
        i-=1;
      }
    }
    return arr;

  },

  removeWithoutCopy: function(arr, item) {
    for (var i = 0; i < arr.length; i++) {
      if (arr[i]=== item){
        arr.splice(i,1);
        i-=1;
      }
    }
    return arr;

  },

  append: function(arr, item) {
     arr.push(item);
    return arr;

  },

  truncate: function(arr) {
    arr.pop();
    return arr;
  },

  prepend: function(arr, item) {
    arr.unshift(item);
    return arr;

  },

  curtail: function(arr) {
    arr.shift();
    return arr;
  },

  concat: function(arr1, arr2) {
    return arr1.concat(arr2);

  },

  insert: function(arr, item, index) {
    let arr1 = arr.slice(0,index);
    let arr2 = arr.slice(index);
    return arr1.concat([item]).concat(arr2)

  },

  count: function(arr, item) {
    let count = 0;
    for (var i = 0; i < arr.length; i++) {
      if (arr[i] === item) {
        count +=1;
      } 
    }
    return count;
  },

  duplicates: function(arr) {
     arr.sort();
    let duplicates = [];
    console.log(arr)
    for (var i = 0; i < arr.length; i++) {
      if ((arr[i]===arr[i+1]) && !duplicates.includes(arr[i])){
        duplicates.push(arr[i]);
      }
    }
    return duplicates;
  },

  square: function(arr) {
    return arr.map((item)=> {return item*item
    })
     
  },

  findAllOccurrences: function(arr, target) {
     let occ = [];
     for (var i = 0; i < arr.length; i++) {
       if (arr[i] === target) {
         occ.push(i);
       }
     }
     return occ; 

  }
};












