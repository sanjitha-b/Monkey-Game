
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var FoodGroup, obstacleGroup,ground
var score,bananaGroup,obstacleGroup

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstaceImage = loadImage("obstacle.png");
 
}



function setup() {
  
monkey = createSprite(80,315,20,20)
  monkey.addAnimation("moving",monkey_running)
  monkey.scale = 0.1;
    ground = createSprite(400,350,900,10);
  ground.velocityX=-4;
  ground.x=ground.width/2;
   console.log(ground.x)
  
  bananaGroup = new Group();
  obstacleGroup = new Group();

 var score=0;

}


function draw() {
background(200);
  if(ground.x<0){
    ground.x = ground.width/2; 
  }
  if(keyDown('space')){
  monkey.velocityY = (-7);
    
  }
    monkey.velocityY=monkey.velocityY+0.8;
    monkey.collide(ground)
  
  stroke("black")
  textSize(20)
  fill("black")
  survivalTime=Math.ceil(frameCount/frameRate()) 
  text("Survival Time:"+survivalTime, 100,50)

  if(obstacleGroup.isTouching(monkey)){
    ground.velocityX=0;
    obstacleGroup.setVelocityXEach(0);
        bananaGroup.setVelocityXEach(0);
   // obstacleGroup.setLifetimeEach(-1)
    //bananaGroup.setLifetimeEach(-1)
    monkey.velocityY = 0
    

  }
  
  spawnthefood()
   spawnObstacles()
  drawSprites()
}

function spawnthefood() {
if(frameCount%80===0){
  banana=createSprite(600,250,40,10)
  
       banana.scale=0.05;

  banana.y=random(120,200);
  banana.addImage(bananaImage);
  banana.velocityX=-5;
bananaGroup.add(banana);
  banana.lifetime = 300;
}
}

function spawnObstacles() {
  if(frameCount%300===0) {
    obstacle=createSprite(80,320,10,40)
    obstacle.velocityX=-2
    obstacle.addImage(obstaceImage)
    obstacleGroup.add(obstacle)
    obstacle.lifetime= 300
        obstacle.scale=0.15;


  }
}

