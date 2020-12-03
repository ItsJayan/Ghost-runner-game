 
var gameOver,gameOverImage
var towerImage, tower;
var doorImg, door, doorsGroup;
var climberImg, climber, climbersGroup;
var ghost, ghostImg;
var invisibleBlockGroup, invisibleBlock;
var gameState = "play"
var fire, lavaImage;

function preload(){
  towerImage =  loadImage("tower.png")
  doorImg = loadImage("door.png");
  climberImg = loadImage('climber.png');
  ghostImg = loadImage("ghost-standing.png");
  spookySound = loadSound("spooky.wav") 
 fireImage=loadImage("firebg.png")
 gameOverImage=loadImage("gameOver.png")
  
}

function setup(){
  createCanvas(600,500);
  
  //create the tower sprite, image and velocity
  tower = createSprite(300,300);
  tower.addImage(towerImage)
  tower.velocityY=1
  fire=createSprite(300,480);
  fire.addImage(fireImage)
  fire.scale=2;
  //create the ghost sprite, image 
  ghost=createSprite(300,250)
  ghost.addImage(ghostImg)
  ghost.scale=0.3
  //make the groupsprites-door, climber
  doorsGroup=createGroup();
  climbersGroup=createGroup();
  fire.setCollider("rectangle",0,0,600,20)
 // gameOver=createSprite(300,250);
  //gameOver.addImage(gameOverImage);
  
  
}

function draw(){
  background('red')
  if (gameState === "play") {
    //gameOver.visible=false
    //bring the tower back to original position 
    if(tower.y>400){
      tower.y=height/2
    }
    //with left_arrow, make ghost shift to the left
    if(keyDown('A')){
      ghost.x-=4
    }
    //with right arrow , move ghost to the right
    if(keyDown('D')){
    ghost.x+=4
    }
    
    //make the ghost jump with space and apply gravity
     if(keyDown('space')){
       ghost.velocityY=-3;   
  }
    ghost.velocityY+=0.8 ;
    spawnDoors();

    
    if(climbersGroup.isTouching(ghost)||fire.isTouching(ghost)){
 gameState='end'
  spookySound.play();
      
    }
    
    //if(invisibleBlockGroup.isTouching(ghost) || ghost.y > 600){
      
   // }
    
    drawSprites();
  }
  
  if (gameState === "end"){
  // gameOver.visible=true
   doorsGroup.setVelocityYEach(0)
   climbersGroup.setVelocityYEach(0)
   ghost.destroy();
   textSize(40)
   fill('black') 
   text('Game Over',230,250)
  }

}

function spawnDoors() {
  //write code here to spawn the doors Periodically in the tower 
  if(frameCount%250===0){
    door=createSprite(random(100,400),-50)
    door.addImage(doorImg)
    door.velocityY=1;
    climber=createSprite(door.x,10)
    climber.addImage(climberImg)
    climber.velocityY=1;
    climbersGroup.add(climber)
    doorsGroup.add(door)
  }
     
   
    //create the door, climber, invisibleBlock sprite and image, velocity
    
    //door.x to be random - give same x position to climber and Invisiblegroup 
    
     
    //depth of the ghost 
    
     
     
    //assign lifetime to all three sprites
     

    
    //add each door, invisibleBlock and climber to the group
     
  
}

