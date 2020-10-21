//declaring all the global variables
var monkey, monkey_img;
var banana, banana_img, obstacle, obstacle_img, bg_img;
var food_group, obstacle_group;
var gameState, PLAY, END;

PLAY = 1;
END = 0;
gameState = PLAY;

//this function is created to load allthe animations and images in it
function preload() {
  monkey_img = loadAnimation("sprite_0.png", "sprite_1.png", "sprite_2.png", "sprite_3.png", "sprite_4.png", "sprite_5.png", "sprite_6.png", "sprite_7.png", "sprite_8.png");
  banana_img = loadImage("banana.png");
  obstacle_img = loadImage("obstacle.png");
  bg_img = loadImage("jungle.jpg");
}

function setup() {
  //create a canvas
  createCanvas(windowWidth, windowHeight);

  //create a image for the background
  bg = createSprite(windowWidth / 2, windowHeight / 2);
  bg.addImage("bg", bg_img);
  bg.scale = windowWidth / 999 + windowHeight / 999 + 0.5;
  bg.x = bg.width / 2;
  bg.velocityX = -4;

  //create a monkey
  monkey = createSprite(100, windowHeight - 100, 20, 20);
  monkey.addAnimation("monkey", monkey_img);
  monkey.scale = 0.2;

  //create an invisible ground  
  invisibleGround = createSprite(width / 2, height - 10, width, 60);
  invisibleGround.velocityX = -4;
  invisibleGround.visible = false;
}

function draw() {
  //background("red");
  
  //create an scrolling background
  if (bg.x < 0 || invisibleGround.x < 0){
    bg.x = bg.width / 2;
    invisibleGround.x = invisibleGround.width / 2;
  }  
  
  monkey.velocityY = monkey.velocityY + 0.1;
  monkey.collide(invisibleGround);
  
  if(keyDown("space") && monkey.y >= height - 240)
  {
    monkey.velocityY = -4;
  }
    
  //call the function drawSprites
  drawSprites();
}

//create a function to create the fruits
function create_fruits() {
  if (frameCount % 80 === 0) {
    fruits = createSprite(windowWidth - 20, 120);
    fruits.addImage("fruits", bananaImg);
    fruits.scale = 0.2;
    fruits.lifetime = 220;
    fruits.velocityX = -4;
    fruits.y = Math.round(random(windowWidth - 20, windowWidth + 100));
    FoodGroup.add(fruits);
  }
} 

//create a function to create the obstacles
function create_obstacle() {
  if (frameCount % 480 === 0) {
    obstacle = createSprite(790, 480);
    obstacle.addImage("obstacle", obstaceImg);
    obstacle.velocityX = -3.5;
    obstacle.scale = 0.3;
    obstacleGroup.add(obstacle);
  }
}