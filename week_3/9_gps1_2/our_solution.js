// GPS 1.2 - JavaScript

// YOUR FULL NAMES:
//  1. Morgan O'Leary	
//  2. Chandler HC Smith

var blankspace = "";

var client1= {};

var client2= {};

var client3= {};

var client4= {};

var client5= {};

client1.name="Morgan"
client1.age=21
client1.quote="We'll meet again in another life when we are both dogs."

client2.name= "Chandler"
client2.age=37
client2.quote="An uninspected life is not worth living."

client3.name = "Adam Sandler"
client3.age = 47
client3.quote ="That's your home! Are you too good for your home?!"

client4.name= "Kristen Bell"
client4.age=33
client4.quote="Do you wanna build a snowman?"

client5.name = "Jim Carrey"
client5.age = 52
client5.quote = "...So you're telling me there's a chance? YEAH!"

var Client = function(name, age, quote,trending_rating){
  this.name=name;
  this.age=age;
  this.quote=quote;
  this.trending_coders = trending_rating;
}



var morgan = new Client("Morgan", 21, "We'll meet again in another life when we are both dogs.", 95);

var chandler = new Client("Chandler", 37,"An uninspected life is not worth living.", 91);

var kristen_bell= new Client("Kristen Bell", 33, "Do you wanna build a snowman?", 54);

var adam_sandler= new Client("Adam Sandler", 47, "That's your home! Are you too good for your home?!", 120);

var jim_carrey = new Client("Jim Carrey", 52, "...So you're telling me there's a chance? YEAH!", 32);


console.log(morgan, chandler, kristen_bell, adam_sandler, jim_carrey);

console.log(blankspace);


morgan.showQuote = function(quote){
  console.log(quote);
};

morgan.showQuote(morgan.quote);

//  6.  Your Reflection: Wow. This was fun. For the first time I felt like "yes, I definitely know what direction I need to head towards and I now am building tools to get there".  Which was just a great feeling.  Chandler and I really had compatible personalities and I find the more involved I get with DBC and the more I partner code the easier communication gets. We definitely had our issues- we struggled trying to get the function to work, but we were both willing to be patient and try multiple different solutions.  I think that's what I loved about this pairing session was that for the first time it wasn't about getting the right answer it was seeing how many right answers we could come up with and seeing which solution worked best for us.  I thought it was a great way to end the unit.  
