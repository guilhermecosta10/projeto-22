const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var engine, world;
var canvas;
var player, playerImage, playerBase, playerArcher;
var baseImage;

function preload() 
{
  backgroundImg = loadImage("./assets/background.png");
  baseImage = loadImage("./assets/base.png");
  playerImage = loadImage("./assets/player.png");
}

function setup() 
{
  canvas = createCanvas(windowWidth, windowHeight);

  engine = Engine.create();
  world = engine.world;
  angleMode(DEGREES);

  var options = {isStatic: true}
  playerBase = Bodies.rectangle(100,400,200,200,options);
  World.add(world, playerBase);

  player = Bodies.rectangle(150,265,100,150,options);
  World.add(world, player);


}

function draw() 
{
  background(backgroundImg);

  image(playerImage, player.position.x, player.position.y,100,150);


  image(baseImage, playerBase.position.x, playerBase.position.y,200,200);


  Engine.update(engine);

  // Title
  fill("#FFFF");
  textAlign("center");
  textSize(40);
  text("ARQUEIRO ÉPICO", width / 2, 100);
}
