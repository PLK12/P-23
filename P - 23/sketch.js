const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var myEngine, myWorld;
var canvas;

var base2, base1, player, computer

function setup() {
  canvas = createCanvas(windowWidth, windowHeight);
  
   //Initialising Engine
  myEngine = Engine.create();
  myWorld = myEngine.world;

	
   //Create Player Base and Computer Base Object
    
  base2 = new ComputerBase(50,random(200,windowHeight/2),10,10);
  computer = new ComputerPlayer(400,base2.body.position.y/2,60,300);
  base1 = new Playerbase(250,random(450, windowHeight/3),180,150);
  player = new Player(50, base1.body.position.y/3,50,180);

  


 }

function draw() {

  background(180);

  Engine.update(myEngine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("EPIC ARCHERY", windowWidth/2, 100);

 

   //Display Playerbase and computer base 
   base2.display();
   base1.display();
   player.display();
   computer.display();

  base2.scale = 0.5
  computer.scale = 0.1
  base1.scale = .2
  player.scale = .5


   //display Player and computerplayer


}
