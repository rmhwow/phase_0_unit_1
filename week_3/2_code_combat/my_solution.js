// I worked on this challenge by myself!
 
// For each mission, write the title as a comment. (Shown here). Also include pseudocode as a comment. 
// Note: to make commenting easier, you can highlight the section you want to comment and hold 
// command + / This will comment the line. 

 //Rescue Mission
#  move down x2
#  move right
#  move up x2
#  move right x2
#  move down
#  attack!
#  
 this.moveDown();
this.moveDown();
this.moveRight();
this.moveUp();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
this.attackNearbyEnemy();

 //Grab the Mushroom!
#  move up
#  move right
#  move left
#  move up
#  attack!
 
this.moveUp();
this.moveRight();
this.moveLeft()
this.moveUp();

this.attackNearbyEnemy();

//Drink Me
# attack enemy 
# move right
# move down
# move up
# move right
# attack!


 this.attackNearbyEnemy();
this.moveRight();
this.moveDown();
this.moveUp();
this.moveRight();
this.attackNearbyEnemy();

//Taunt the Guards
// # move right
// # say "follow"
// # move right x2
// # move up
// # move right
// # say "hey ogre"
// # move down
// # move right
// # move up
// # move right x2
// # move down


this.moveRight();
this.say("Follow me.");
this.moveRight();
this.moveRight();
this.moveUp();
this.moveRight();
this.say("hey there!");
this.moveDown();
this.moveRight();
this.moveUp();
this.moveRight();
this.moveRight();
this.moveDown();
 
 //It's a Trap
//  move down x2
//  taunt ogre
//  move up x2
 
 this.moveDown();
this.moveDown();
this.say("hey ogre!");
this.moveUp();
this.moveUp();

//Taunt
//Say stuff to lure the ogre in

this.say("Hey!");
this.say("What are you doing here fatso?");
this.say("You're an ugly mean ogren!");
this.say("You should come here and fight me!");
this.say("You should!");

 //Cowardly taunt
 //move out from safe spot
 //yell something
 //move back to safe spot
 this.moveXY(61, 29);
 this.say("hey ogres!");
 this.moveXY(69, 15);
 
 //Commanding Followers
 //get soliders to follow
 //make them attack
 //move out of the way
 
 this.say("Follow me friends!");
this.moveXY(64, 38);
this.say("Attack");
this.moveXY(49, 66);
 
 //Mobile artillery
//  move cannon
//  attack x 2
//  move cannon 
//  attack x2

this.moveXY(48, 43);
this.attackXY(49, 65);
this.attackXY(48, 56);
this.moveXY(69, 29);
this.attackXY(70 , 56);
this.attackXY(69, 44);

 //Release 3
 this - is referring to the object 
 () sets up the parameters of the function- when you get to the coordinates one it's important but for moving initially since there are no parameters it's empty, but javascript requires the parens regardless. 
 it completes the statement and let's javascript know that that's the end of the action. 
 
 
// Reflection:
// Write your reflection here.
I thought this whole challenge was great, I really enjoyed learning with a fun video game twist. My biggest problem was in the escaping the prison challenge. I kept wanting to go in what seemed like the most direct route, but the players kept dying. Then I realized I could go around the square just as easily and still pass the ogres.  I thought this challenge really solidfied some of hte basic Javascript objects and variables concepts. It was really fantastic and I feel very confident about the work I put in here. 