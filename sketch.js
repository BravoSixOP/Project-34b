const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var bgImage;
var ground;
var hero, hero_img;
var Fly;
var block1, block2, block3, block4, block5, block6, block7, block8, block9, block10;
//var block11, block12, block13, block14, block15, block16, block17, block18, block19, block20;
var monster;


function preload() {
  bgImage=loadImage("images/bgimage.png");

  hero_img = loadImage("images/Superhero-01.png");
}

function setup() {
  var canvas =createCanvas(1200, 600);
  engine = Engine.create();
  world = engine.world;

  var groundOptions = {
    isStatic: true
  }

  ground = Bodies.rectangle(600, 590, 1200, 20, groundOptions);
  World.add(world, ground);

  hero = Bodies.rectangle(400, 400, 500, 200);
  World.add(world, hero);

  Fly = new fly(hero, {x: 400, y: 400});

  block1 = new Block(900, 570);
  block2 = new Block(900, 530);
  block3 = new Block(900, 500);
  block4 = new Block(900, 470);
  block5 = new Block(900, 440);
  block6 = new Block(900, 410);
  /*block7 = new Block(900, 380);
  block8 = new Block(900, 350);
  block9 = new Block(900, 320);
  block10 = new Block(900,290);*/
}

function draw() {
  background(bgImage);
  Engine.update(engine);

  push();
  var groundPos = ground.position;
  rectMode(CENTER);
  //noStroke();
  rect(groundPos.x, groundPos.y, 1200, 20);
  pop();

  push();
  var heroPos = hero.position;
  imageMode(CENTER);
  image(hero_img, hero.position.x, hero.position.y, 500, 200);
  pop();

  Fly.display();

  block1.display();
  block2.display();
  block3.display();
  block4.display();
  block5.display();
  block6.display();
  /*block7.display();
  block8.display();
  block9.display();
  block10.display();*/
}

function mouseDragged(){
  Matter.Body.setPosition(hero, {x: mouseX, y:mouseY})
}