const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;
var engine, world,dog1,dog2,dog3;

function preload() {
    backgroundImg = loadImage("sprites/background.png");
    playerImg = loadImage("sprites/player6.png");

}

function setup(){
  var canvas = createCanvas(1200,400);
  engine = Engine.create();
  world = engine.world;
  dog1  = new Dog(950,350,100,80);
  dog2  = new Dog(920,350,100,80);
  dog3  = new Dog(890,350,100,80);
  book = new Book(1000,350,50,100);
  stone = new Stone(160,290,20,20);
  launcher = new Launcher(stone.body,{x:180,y:300});
  ground = new Ground(600,390,1200,10)
}

function draw(){
  background(backgroundImg);
  image(playerImg,100,250,100,150);
  Engine.update(engine);
  dog1.display();
  dog2.display();
  dog3.display();
  stone.display();
  book.display();
  launcher.display();
  ground.display();
}


function mouseDragged(){
  Matter.Body.setPosition(stone.body, {x:mouseX,y:mouseY});
}


function mouseReleased(){
  launcher.launch();
}

function keyPressed(){
  if(keyCode===32){
    Matter.Body.setPosition(stone.body,{x:160,y:290});
    launcher.attach(stone.body);
  }
}