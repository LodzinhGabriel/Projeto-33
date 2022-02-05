const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var box1, rect1, rect2, circle1;
var platform;
var ground;

function setup() {
  createCanvas(800,400);
  engine = Engine.create();
  world = engine.world;

  box1 = new RectProp(450, 60, 40, 40, {'friction': 10, 'restitution': 0.5, 'density':5});
  rect1 = new RectProp(350, 20, 80, 40, {'friction': 20, 'restitution': 0.1, 'density':16});
  rect2 = new RectProp(200, 40, 60, 40, {'friction': 3, 'restitution': 0.8, 'density':1});
  circle1 = new BallProp(300, 40, 30, {'friction': 0.5, 'restitution': 1, 'density':1});
  ground = new RectProp(windowWidth / 2, 190, windowWidth, 40, {'friction': 0.5, 'restitution': 0.8, 'density':1, isStatic:true});
}

function draw() {
  background(255,255,255);  
  Engine.update(engine);
  box1.display();
  rect1.display();
  rect2.display();
  ground.display();
  drawSprites();
  circle1.display();
}
