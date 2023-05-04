var trex, trex_running, trex_collided;
var ground, invisibleGround, groundImage;




var score;


function preload(){
  trex_running = loadAnimation("trex1.png","trex2.png","trex3.png");
  trex_collided = loadImage("trex_collided.png");
  
  groundImage = loadImage("ground2.png");
  cloudImage= loadImage("cloud.png")
 obstacle1=loadImage("obstacle1.png")
 obstacle2=loadImage("obstacle2.png")
 obstacle3=loadImage("obstacle3.png")
 obstacle4=loadImage("obstacle4.png")
 obstacle5=loadImage("obstacle5.png")
 obstacle6=loadImage("obstacle6.png")


}

function setup() {

  createCanvas(600,200)
  
  //create a trex sprite
  trex = createSprite(50,160,20,50);
  trex.addAnimation("running", trex_running);
  trex.scale = 0.5;
  
  //create a ground sprite
  ground = createSprite(200,180,400,20);
  ground.addImage("ground",groundImage);
  ground.x = ground.width /2;
  ground.velocityX = -4;
  
  //creating invisible ground
  invisibleGround = createSprite(200,190,400,10);
  invisibleGround.visible = false;
  
  //generate random numbers
  var rand =  Math.round(random(1,100))
  console.log(rand)

}

function draw() {
  //set background color
  background(180);
  
  console.log(trex.y)
  
  
  
  // jump when the space key is pressed
  if(keyDown("space")&& trex.y >= 100) {
    trex.velocityY = -10;
  }
  
  trex.velocityY = trex.velocityY + 0.8
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  //stop trex from falling down
  trex.collide(invisibleGround);
  
  //Spawn Clouds and Obsticles
  spawnClouds()
  spawnObstacles()
  
  drawSprites();
}

//function to spawn the clouds
function spawnClouds(){
  if(frameCount%60===0)
  {
    cloud=createSprite(600,100,40,10)
    cloud.velocityX=-3
    cloud.addImage(cloudImage)
    cloud.lifetime=200
    cloud.scale=0.5
    cloud.y=Math.round(random(10,60))
    cloud.depth=trex.depth
    trex.depth=cloud.depth+1
  }
 
}


function spawnObstacles(){
  if(frameCount%60===0)
  {
    obstacle=createSprite(600,160,10,40)
    obstacle.velocityX=-6 
  
  // Generate random obstacles
  var rand=Math.round(random(1,6))
switch(rand){
case 1: obstacle.addImage(obstacle1);
break;
case 2: obstacle.addImage(obstacle2);
break;
case 3: obstacle.addImage(obstacle3);
break;
case 4: obstacle.addImage(obstacle4);
break;
case 5: obstacle.addImage(obstacle5);
break;
case 6: obstacle.addImage(obstacle6);
break;
default:break;
}
obstacle.scale=0.5
  obtacle.lifetime=100
  }
}



