var player;
var monster1;
var monster2;
var monster3;
var monster4;
var monster5;


function preload(){
  player = loadImage("assets/player.png");
  monster1 = loadImage("assets/mons-1");
  monster2 = loadImage("assets/mons-2");
  monster3 = loadImage("assets/mons-3");
  monster4 = loadImage("assets/mons-4");
  monster5 = loadImage("assets/mons-5")
  
}

function setup() {
  createCanvas(600, 600);
  ;

  
}

function draw() {
  background(200);
  
 

    drawSprites();

 }

  