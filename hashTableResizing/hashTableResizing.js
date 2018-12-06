/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * Be sure to handle hashing collisions correctly.
 * Set your hash table up to double the storage limit as
 * soon as the total number of items stored is greater than
 * 3/4th of the number of slots in the storage array.
 * Resize by half whenever utilization drops below 1/4.
 */

// This is a "hashing function". You don't need to worry about it, just use it
// to turn any string into an integer that is well-distributed between
// 0 and max - 1
var getIndexBelowMaxForKey = function(str, max) {
  var hash = 0;
  for (var i = 0; i < str.length; i++) {
    hash = (hash << 5) + hash + str.charCodeAt(i);
    hash = hash & hash; // Convert to 32bit integer
    hash = Math.abs(hash);
  }
  return hash % max;
};

var makeHashTable = function() {
  var result = {};
  result.storage = [];
  result.storageLimit = 4;
  result.size = 0;
  
  result.insert = function(str) {
    //let index = run hash function with str and storageLimit
    let index = getIndexBelowMaxForKey(str, result.storageLimit);
    //if index exists in storage
    if (result.storage[index] && result.storage[index].indexOf(str) === -1) {
      //push str into index of storage
      result.storage[index].push(str);
    } else {
      //set storage[index] to the value of string as array
      result.storage[index] = [str];
    }
    //increment size
    result.size++;
    //result.resize();
    return  result.storage[index];
  };

  result.retrieve = function(str) {
    //let index = result of hashfunc(str)
    let index = getIndexBelowMaxForKey(str, result.storageLimit);
    //if index has collisions
    if (result.storage[index].length > 1) {
      //get index of str in collision array
      let strIndex = result.storage[index].indexOf(str);
      return result.storage[index][strIndex];
    } else {
      //return the value of key in result
      return result.storage[index][0];
    }
  };

  result.remove = function(str) {
    //let index = result of hashfunc(str)
    let index = getIndexBelowMaxForKey(str, result.storageLimit);
    //if storage[index] length is greater than 1
    if (result.storage[index].length > 1) {
      //find index of str in that array
      let strIndex = result.storage[index].indexOf(str);
      result.storage[index].splice(strIndex, 1);
    } else {
      //splice the str out
      result.storage[index].pop();
    }
    //decrement size
    result.size--;
    //result.resize();
    return result.storage[index];
  };

  result.resize = function() {
    let newStorage = [];
    if (result.size / result.storageLimit > 0.75) {
      result.storageLimit *= 2;
    } else if (result.size / result.storageLimit < 0.25) {
      result.storageLimit /= 2;
    }
    //iterate through all values in storage
      //set new hash index and value to newStorage
    //set result.storage to newStorage;

    // result.storage.forEach(table => { 
    //   table.forEach(elem => {         
    //     result.insert(elem);         //func needs to insert into newStorage and not result.storage
    //   })
    // });
    // result.storage = newStorage;
    // return result.storage;
  };

  return result;
};
