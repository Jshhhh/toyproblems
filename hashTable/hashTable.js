/**
 * Create a hash table with `insert()`, `retrieve()`, and `remove()` methods.
 * The hashtable does not need to resize but it should still handle collisions.
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
  var storage = [];
  var storageLimit = 1000;
  result.insert = function(str, value) {
    //run str through hash function
      //add str to index returned from hash function
    //if index exists already
      //change existing str to array
      //push new str to
    var index = getIndexBelowMaxForKey(str, storageLimit);
    let obj = {};
    obj[str] = value;
    if (storage[index]) {
      storage[index].push(obj);
    } else {
      storage[index] = [obj];
    }
    return storage[index];
  };

  result.retrieve = function(str) {
    //run str through hash function
      //return str
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    
    if (bucket) {
      return bucket.forEach(elem => {
        if (elem[str]) {
          return elem[str];
        }
      });
    } else {
      return null;
    }
  };

  result.remove = function(str) {
    var index = getIndexBelowMaxForKey(str, storageLimit);
    var bucket = storage[index];
    if (bucket) {
      bucket.splice(bucket.indexOf(str, 1));
    } else {
      return null;
    }
  };

  return result;
};

var a = new makeHashTable();
a.insert('b', 1);
console.log(a.retrieve('b'));

