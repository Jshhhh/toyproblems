/*
 * Implement a linked list using the pseudoclassical instantiation pattern.
 *
 * Your linked list should have methods called "addToTail", "removeHead", and "contains."
 *
 */

// EXAMPLE USAGE:


var LinkedList = function() {
  this.head = null;
  this.tail = null;
};

//write methods here!

LinkedList.prototype.addToTail = function(value) {
  //makeNode of value
  var newNode = this.makeNode(value);
  //if this head is null
  this.tail = newNode;
  
  function searchTail(node) {
    if (node.next) {
      search(node.next);
    } else {
      node.next = newNode;
      return node;
    }
  };
  
  if (this.head === null) {
    //set head as new node
    this.head = newNode;
  } else {
    searchTail(this.head);
  }
};

LinkedList.prototype.removeHead = function() {
  if (this.head !== null) {
    var removedValue = this.head.value;
    this.head = this.head.next;
    return removedValue;
  }
  return null;
};

LinkedList.prototype.contains = function(value) {
  function searchList(node, value) {
    if (node.value === value) {
      return true;
    } else if (node.next !== null) {
      return searchList(node.next, value);
    } else {
      return false;
    }
  }
  return searchList(this.head, value);
};

LinkedList.prototype.makeNode = function(value) {
  var newNode = {
    value: value,
    next: null
  };
  return newNode;
};