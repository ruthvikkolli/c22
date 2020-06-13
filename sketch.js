const Engine=Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;


var engine,world;
var ground;
var ball

function setup() {
  createCanvas(800,400);
  engine=Engine.create();
  world=engine.world;

object = Bodies.rectangle(200,300,10,40)
World.add(world,object);


var Option2={
   isStatic : true

}

ground=Bodies.rectangle(400,399,10,10,Option2)
World.add(world,ground)

var Option1={
  restitution:1.0
}

ball=Bodies.circle(200,200,10,Option1)
World.add(world,ball)

}






function draw() {
  
  background(0,0,0);  
  rectMode(CENTER)
  rect(object.position.x,object.position.y,10,10)
  
  rectMode(CENTER)
  rect(ground.position.x,ground.position.y,800,30 )

  ellipseMode(RADIUS)
  ellipse(ball.position.x,ball.position.y,10,10)
}