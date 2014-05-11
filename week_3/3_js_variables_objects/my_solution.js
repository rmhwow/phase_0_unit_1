// I paired [with:Tanner Blumer & Morgan O'Leary] on this challenge.




// Pseudocode
// Error: The value of secretNumber should be a number.
// set secretNumber to a number!
//
//"ERROR: The value of secretNumber should be 7."
//set secretNumber to 7
// 
//"ERROR: The value of password should be a string."
// set password to a string
//
//"ERROR: The value of password should be 'just open the door'."
//set password to a string
//
//"ERROR: The value of allowedIn should be a boolean."
//set allowedIn a boolean
//
//"ERROR: The value of allowedIn should be false."
// set allowedIn to false
//"ERROR: members is not defined"
//set members equal to an array
//"ERROR: the first element in the value of members should be 'John'"
//set first value in the array to equal John
//"ERROR: the fourth element in the value of members should be 'Mary'".
//set the fourth value in the members array equal to Mary. 

//Refactoring
//delete first value of secretNumber
//delete first defined string of the variable 'password'
//delete the value 'true' from the boolean allowedIn
// combining the members array on one line
__________________________________________
// Write your code below.
var secretNumber = 11;
var secretNumber = 7;
var password = "Not cheating";
var password = "just open the door";
var allowedIn = true;
var allowedIn= false;
var members = [ ];
var members=["John"];
members[3]="Mary";



// __________________________________________
// Refactored Code: Include a refactored version (or justification of your original code) here. 

var secretNumber= 7;
var password="just open the door";
var allowedIn=false;
var members =["John",4,"Sally","Mary"];



//Reflection
//Tanner and I were really good about taking things one step at a time and not getting ahead of ourselves.  At first it seemed a little tedious, but I'm glad we stuck with this approach because we ended up getting the code in a much quicker and simpler format. The only real trouble we had was initially getting our boolean to work, but it was just because we had spelled the variable name incorrectly. I'm pretty confident in my learning competencies with this challenge. There was definitely a lot in this challenge that could be applied to the solo challenge such as defining specific array elements. I thought this challenge went super well. 












function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (typeof secretNumber === 'number'),
  "The value of secretNumber should be a number.",
  "1. "
)

assert(
  secretNumber === 7,
  "The value of secretNumber should be 7.",
  "2. "
)

assert(
  typeof password === 'string',
  "The value of password should be a string.",
  "3. "
)

assert(
  password === "just open the door",
  "The value of password should be 'just open the door'.",
  "4. "
)

assert(
  typeof allowedIn === 'boolean',
  "The value of allowedIn should be a boolean.",
  "5. "
)

assert(
  allowedIn === false,
  "The value of allowedIn should be false.",
  "6. "
)

assert(
  members instanceof Array,
  "The value of members should be an array",
  "7. "
)

assert(
  members[0] === "John",
  "The first element in the value of members should be 'John'.",
  "8. "
)

assert(
  members[3] === "Mary",
  "The fourth element in the value of members should be 'Mary'.",
  "9. "
)
