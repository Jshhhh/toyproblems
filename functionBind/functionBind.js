/*
 * function bind():
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = bind(alice.shout, alice);
 * boundShout(); // alerts 'alice'
 * boundShout = bind(alice.shout, {name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = bind(func, null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

var bind = function(func, obj) {
  	//return a function
  	return function() {
  		//if obj argument is defined
  		if (obj) {
  			//apply/call "this" parameter and arguments given
  			func.apply(obj, arguments)
  		} else {
  			//if obj argument isnt defined
  			//call/apply arguments with out "this"
  			func.call(null, ...arguments)
  		}
  	}
};

/*
 * Function.prototype.bind:
 *
 * example 1:
 *
 * var alice = {
 *   name: 'alice',
 *   shout: function(){
 *     alert(this.name);
 *   }
 * }
 * var boundShout = alice.shout.bind(alice);
 * boundShout(); // alerts 'alice'
 * boundShout = alice.shout.bind({name: 'bob'});
 * boundShout(); // alerts 'bob'
 *
 * example 2:
 *
 * var func = function(a, b){ return a + b };
 * var boundFunc = func.bind(null, 'foo');
 * var result = boundFunc('bar');
 * result === 'foobar'; // true
 *
*/

Function.prototype.bind = function(obj) {
  let func = this;
  let bindArgs = Array.of(...arguments).slice(1);
  //return a function
  return function(obj) {
  	//if obj is defined
  	let funcArgs = Array.of(...arguments);
  	console.log(arguments);
  	if (obj) {
  		//apply/call "this" function with specified context object
  		return func.call(obj, ...bindArgs, ...funcArgs);
  	} else {
  		//apply/call "this" function with no context
  		return func.apply(null, funcArgs.concat(bindArgs));
  	}
  }
};

