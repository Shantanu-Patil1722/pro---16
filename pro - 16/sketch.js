var monkey,monkey_running,banana,bananaImage,obstacle,obstacleImage;
var obstacleGroup,bananaGroup;
var score;
var ground;
var jungle,jungleImg;

function preload(){
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
  jungleImg = loadImage("jungle.jpg");
}

function setup() {
  createCanvas(600,400);
  
  monkey = createSprite(80,315,20,20);
  monkey.addAnimation("moving" ,monkey_running);
monkey.scale = 0.1;
  
  ground = createSprite(400,350,900,10);
  ground.velocityX = -4;
  
  obstacleGroup = createGroup();
  bananaGroup = createGroup();
  
  score = 0;
}

function draw() {
background(jungleImg);
   ground.x = ground.width /2;
  //console.log(ground.x);
  
  text("score :" + score,10,50);  
  if(keyDown("space") && monkey.y >= 200){
      monkey.velocityY = -5;
     }

  ground.visible = false;
  
  monkey.velocityY = monkey.velocityY+0.5;
  monkey.collide(ground);
  
if(bananaGroup.isTouching(monkey)){
  bananaGroup.destroyEach();
  score = score + 2;
}
  
  if(obstacleGroup.isTouching(monkey)){
    monkey.setvelocityY = 0;
    ground.setvelocityY = 0;
  }
  
  spawnbananas();
   spawnobstacles();
  
  drawSprites();
}

function spawnbananas(){
  if(frameCount % 100 === 0){
 var banana = createSprite(600,50,1,1);
    banana.y = Math.round(random(120,200));
    banana.addImage(bananaImage);
    banana.scale =0.100;
    banana.velocityX = -3;
    banana.lifetime = 200;
     bananaGroup.add(banana);
  }
}

function spawnobstacles(){
if(frameCount % 300 === 0){
  var obstacle = createSprite(600,330,20,20);
  obstacle.velocityX = -6;
  obstacle.addImage(obstacleImage);
  obstacle.scale = 0.100;
  obstacle.lifetime = 200;
   obstacleGroup.add(obstacle);
   }
}