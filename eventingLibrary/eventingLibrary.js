/*
 * Make an eventing system mix-in that adds .trigger() and .on() to any input
 * object.
 *
 * Example usage:
 * var obj = mixEvents({ name: 'Alice', age: 30 });
 * obj.on('ageChange', function(){ // On takes an event name and a callback function
 *    console.log('Age changed');
 * });
 * obj.age++;
 * obj.trigger('ageChange'); // This should call our callback! Should log 'age changed'.
 *
 * Caveats:
 * - mixEvents should return the original object it was passed after extending it.
 * - If we repeatedly call .on with the same event name, it should
 *   continue to call the old function as well. That is to say, we can have multiple
 *   listeners for an event.
 * - If `obj.trigger` is called with additional arguments, pass those to the
 *   listeners.
 * - It is not necessary to write a way to remove listeners.
 */

var mixEvents = function(obj) {
  //create obj.on function that takes a eventName and a callback function as parameters
  obj.on = function(eventName, callback) {
  	//if eventName already exists
  	if (typeof this[eventName] === 'function') {
  		let func = Array.of(this[eventName]);
  		func.push(callback);
  		this[eventName] = func;
  		return this[eventName];
  	//if eventName is an array
  	} else if (Array.isArray(this[eventName])) {
  		//push callback to array
  		this[eventName].push(callback);
  		return this[eventName];
  	} else {
  	//adds the eventName and function to current object
  		this[eventName] = callback;
  	}
  }
  //create obj.trigger function takes a eventname and runs its function
  obj.trigger = function(eventName, ...arguments) {
  	//if eventName is array
  	if (Array.isArray(this[eventName])) {
  		//invoke each function in the array
  		this[eventName].forEach((element) => {
  			element.call(this, ...arguments);
  		})
  	} else {
  		//invoke eventName function
  		this[eventName].call(this, ...arguments);
  	}
  }
  return obj;
};

var obj = mixEvents({ name: 'Alice', age: 30 });
