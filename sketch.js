const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,ball;


function setup() {
  var Canvas = createCanvas(400,400);
  engine=Engine.create();
  world=engine.world;
  box1=new Box(200,300,50,50);
  ground=new Ground(200,height,400,20);
  box2=new Box(240,100,50,100);
  box3=new Box(220,150,50,100);

}
  
  
function draw() {
  background("pink");
  Engine.update(engine);
 box1.display();
 ground.display();
 box2.display();
 box3.display();

}




