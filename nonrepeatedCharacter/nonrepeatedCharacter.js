/**
 * Given an arbitrary input string, return the first nonrepeated character in
 * the string. For example:
 *
 *   firstNonRepeatedCharacter('ABA'); // => 'B'
 *   firstNonRepeatedCharacter('AACBDB'); // => 'C'
 */

var firstNonRepeatedCharacter = function(string) {
  // TODO: your solution here
  //create array to hold single repeated character
  //let boolean = false
  //iterate through string
    //if array holder doesnt inclued curr char
      //iterate through rest of string
        //if there are matching chars
          //set boolean to true
      //if boolean is true
        //push current char to array
  //if boolean is false
    //return null
  for (var i = 0; i < string.length; i++) {
    if (string.indexOf(string[i]) === i && string.lastIndexOf(string[i]) === i) {
      return string[i];
    }
  }
  return null;
};