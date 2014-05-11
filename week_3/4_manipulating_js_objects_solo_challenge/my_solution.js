// This is a Solo Challenge. 

// There is a section below where you will write your code.
// Do not alter this object here.


var terah = {
  name: "Terah",
  age: 32,
  height: 66,
  weight: 130,
  hairColor: "brown",
  eyeColor: "brown"
};


/* Pseudocode Section - write pseudocode for each challenge below.
1. Define a variable adam and use object literal notation to assign this variable 
   the value of a JavaScript Object object with no properties.
so we would set up var adam and then have nothing inside the curly braces.

2. Give adam a name property with the value "Adam".
we would add a "name" property and set it equal to Adam. 
3. Add a spouse property to terah and assign it the value of adam.
we would add a "spouse" property to terah and set it equal to adam. 
4. Change the value of the terah weight property to 125.
set tarah["weight"] equal to 125
5. Remove the eyeColor property from terah.
delete eyeColor property
6. Add a spouse property to adam and assign it the value of terah.
set adam["spouse"] equal to terah
7. Add a children property to terah and and use object literal notation to assign 
   this variable the value of a JavaScript Object object with no properties
add a children property and have nothing inside the curly braces, 
8. Add a carson property to the value of the terah children property and assign it 
  the value of an object with the property name with a value of "Carson".
inside terah.children add a "carson" property, then add inside terah.children.carson a [name] property and set it equal to "Carson".
9. Add a carter property to the value of the terah children property and assign it 
   the value of an object with the property name with a value of "Carter".
We would go through the same steps with carson just subsituting the name "carter" with "carson"
10. Add a colton property to the value of the terah children property and assign it 
    the value of an object with the property name with a value of "Colton".
Same story here, we would had terah.children["colton"] property and have nothing insdie the braces and then add a name property with "colton"
11. Add a children property to adam and assign it the value of terah children.
We would set adam.children equal to terah.children

*/

// __________________________________________
// Write your code below.
var adam= {};
adam["name" ]='Adam';
terah["spouse"] =adam;
terah["weight"] =125;
delete terah.eyeColor;
adam["spouse"]= terah;
terah["children"]={};
terah.children["carson"]={};
terah.children.carson["name"] = "Carson";
terah.children["carter"]={};
terah.children.carter["name"]="Carter";
terah.children["colton"]={};
terah.children.colton["name"]="Colton"
adam["children"]=terah.children;





// __________________________________________
// Reflection: Use the reflection guidelines
 //"Alrightie here is my reflection. So I thought the idea and basic layout of this challenge was nice because it wasn't too difficult, yet still provided enough structure. Sometimes the wording was a little confusing, but I think I got the hang of it. I also liked this challenge because I started thinking of different ways to complete this.  For example in my mind, it makes sense not to just add more code, but to go back up to the "terah" object and fix some of the dimensions from there. I did look up how to add more values to a property and figure out how to define properties and values outside of the var object { key:value}; format. I'm feeling pretty confident in the learning competencies. I thought the JavaScriptintro sheet was super helpful and sort of wish there was that on the HTML/CSS"

// __________________________________________
// Driver Code:  Do not alter code below this line.
function assert(test, message, test_number) {
  if (!test) {
    console.log(test_number + "false");
    throw "ERROR: " + message;
  }
  console.log(test_number + "true");
  return true;
}

assert(
  (adam instanceof Object),
  "The value of adam should be an Object.",
  "1. "
)

assert(
  (adam.name === "Adam"),
  "The value of the adam name property should be 'Adam'.",
  "2. "
)

assert(
  terah.spouse === adam,
  "terah should have a spouse property with the value of the variable adam.",
  "3. "
)

assert(
  terah.weight === 125,
  "The terah weight property should be 125.",
  "4. "
)

assert(
  terah.eyeColor === undefined,
  "The terah eyeColor property should be removed.",
  "5. "
)

assert(
  terah.spouse.spouse === terah,
  "The terah spouse property's value spouse property should be terah.",
  "6. "
)

assert(
  (terah.children instanceof Object),
  "The value of the terah children property should be an Object.",
  "7. "
)

assert(
  terah.children.carson.name === "Carson",
  "The terah children property should have a carson property with its own property name with a value of 'Carson'.",
  "8. "
)

assert(
  terah.children.carter.name === "Carter",
  "The terah children property should have a carter property with its own property name with a value of 'Carter'.",
  "9. "
)

assert(
  terah.children.colton.name === "Colton",
  "The terah children property should have a colton property with its own property name with a value of 'Colton'.",
  "10. "
)

assert(
  adam.children === terah.children,
  "The value of the adam children property should be the value of the terah children property",
  "11. "
)

console.log("\nHere is your final terah object:")
console.log(terah)