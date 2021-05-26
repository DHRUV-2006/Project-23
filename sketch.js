const Engine = Matter.Engine
const World = Matter.World
const Bodies = Matter.Bodies
var ground;
var ball;
var myengine;
var myworld;


function setup() {
  createCanvas(400,400);
  myengine = Engine.create();
  myworld = myengine.world;
  var options = {isStatic:true};
  ground = Bodies.rectangle(200,380,400,10,options);
  console.log(ground);
  World.add(myworld,ground);
  var bop = {restitution:0.8};
  ball = Bodies.circle(100,100,20,bop);
  World.add(myworld,ball);
}

function draw() {
  background(0,0,0);
  Engine.update(myengine);  
  rectMode(CENTER);
  rect(ground.position.x ,ground.position.y, 400 , 10 );
  ellipseMode(RADIUS);
  ellipse(ball.position.x , ball.position.y, 20 ,20 );
  drawSprites();
}