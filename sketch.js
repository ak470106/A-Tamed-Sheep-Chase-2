var farmerImgUp, farmerAniUp, farmerImgDown, farmerAniDown, farmerImgLeft, farmerAniLeft, farmerImgRight, farmerAniRight;
var foxImgUp, foxAniUp, foxImgDown, foxAniDown, foxImgLeft, foxAniLeft, foxImgRight, foxARight;
var sheepImg;
var farmer, sheep, wolf1, wolf2, wolf3, wolf4, wolf5;
var bgStory, bgL1;
var gamestate = "Level 2 Rules";
var nameInput, nameButton;
var missionAcceptButton;
var tp1Img;
function preload () {
  farmerAniUp = loadAnimation("assets/upright.png","assets/upstop.png","assets/upleft.png","assets/upstop.png");
  farmerImgUp = loadAnimation("assets/upstop.png");
  farmerAniDown = loadAnimation("assets/downright.png","assets/downstop.png","assets/downleft.png","assets/downstop.png");
  farmerImgDown = loadAnimation("assets/downstop.png");
  farmerAniLeft = loadAnimation("assets/leftright.png","assets/leftstop.png","assets/leftleft.png","assets/leftstop.png");
  farmerImgLeft = loadAnimation("assets/leftstop.png");
  farmerAniRight = loadAnimation("assets/rightright.png","assets/rightstop.png","assets/rightleft.png","assets/rightstop.png");
  farmerImgRight = loadAnimation("assets/rightstop.png");
  foxAniUp = loadAnimation("assets/foxup1.png","assets/foxup2.png","assets/foxup3.png","assets/foxup4.png");
  foxImgUp = loadAnimation("assets/rightstop.png");
  foxAniDown = loadAnimation("assets/foxdown1.png","assets/foxdown2.png","assets/foxdown3.png","assets/foxdown4.png");
  foxImgDown = loadAnimation("assets/rightstop.png");
  foxAniLeft = loadAnimation("assets/foxleft1.png","assets/foxleft2.png","assets/foxleft3.png","assets/foxleft4.png");
  foxImgLeft = loadAnimation("assets/rightstop.png");
  foxAniRight = loadAnimation("assets/foxright1.png","assets/foxright2.png","assets/foxright3.png","assets/foxright4.png");
  foxImgRight = loadAnimation("assets/rightstop.png");
  sheepImg = loadImage("assets/sheep.png");
  bgStory = loadImage("assets/storybg.png");
  tp1Img = loadImage("assets/tp1.png");
  bgL1 = loadImage("assets/bgL1.png");
  bgL2 = loadImage("assets/bgL2.png");
}
function setup() {
  createCanvas(displayWidth,displayHeight);
  nameInput = createInput();
  nameInput.position(20, 65);
  nameInput.hide();
  nameButton = createButton("That's my name!");
  nameButton.position(20, 100);
  nameButton.hide();
  missionAcceptButton = createButton('Look for the sheep');
  missionAcceptButton.hide();
  missionAcceptButton.position(35, 35);
  missionAcceptButton.size(100, 50);
  l1RulesButton = createButton('Got it!');
  l1RulesButton.position(35, 35);
  l1RulesButton.hide();
  l2RulesButton = createButton('Got it!');
  l2RulesButton.position(35, 35);
  l2RulesButton.hide();
  farmer = createSprite(width/2, height-80);
  farmer.addAnimation("upStop", farmerImgUp);
  farmer.addAnimation("up", farmerAniUp);
  farmer.addAnimation("down", farmerAniDown);
  farmer.addAnimation("left", farmerAniLeft);
  farmer.addAnimation("right", farmerAniRight);
  farmer.addAnimation("downStop", farmerImgDown);
  farmer.addAnimation("leftStop", farmerImgLeft);
  farmer.addAnimation("rightStop", farmerImgRight);
  farmer.scale = 0.3;
  farmer.visible = false;
  line1 = createSprite(468, 432, 5, 600);
  line1.visible = false;
  line1.shapeColor = "white";
  line2 = createSprite(1068, 432, 5, 600);
  line2.visible = false;
  line2.shapeColor = "white";
  line3 = createSprite(668, 732, 400, 5);
  line3.visible = false;
  line3.shapeColor = "white";
  line4 = createSprite(1018, 732, 100, 5);
  line4.visible = false;
  line4.shapeColor = "white";
  line5 = createSprite(918, 132, 300, 5);
  line5.visible = false;
  line5.shapeColor = "white";
  line6 = createSprite(568, 132, 200, 5);
  line6.visible = false;
  line6.shapeColor = "white";
  line7 = createSprite(968, 632, 200, 5);
  line7.visible = false;
  line7.shapeColor = "white";
  line8 = createSprite(768, 632, 5, 200);
  line8.visible = false;
  line8.shapeColor = "white";
  line9 = createSprite(868, 532, 200, 5);
  line9.visible = false;
  line9.shapeColor = "white";
  line10 = createSprite(968, 382, 5, 300);
  line10.visible = false;
  line10.shapeColor = "white";
  line11 = createSprite(918, 232, 100, 5);
  line11.visible = false;
  line11.shapeColor = "white";
  line12 = createSprite(768, 282, 5, 300);
  line12.visible = false;
  line12.shapeColor = "white";
  line13 = createSprite(818, 332, 100, 5);
  line13.visible = false;
  line13.shapeColor = "white";
  line14 = createSprite(918, 432, 100, 5);
  line14.visible = false;
  line14.shapeColor = "white";
  line15 = createSprite(718, 432, 100, 5);
  line15.visible = false;
  line15.shapeColor = "white";
  line16 = createSprite(668, 482, 5, 100);
  line16.visible = false;
  line16.shapeColor = "white";
  line17 = createSprite(718, 632, 100, 5);
  line17.visible = false;
  line17.shapeColor = "white";
  line18 = createSprite(518, 632, 100, 5);
  line18.visible = false;
  line18.shapeColor = "white";
  line19 = createSprite(568, 532, 5, 200);
  line19.visible = false;
  line19.shapeColor = "white";
  line20 = createSprite(618, 332, 100, 5);
  line20.visible = false;
  line20.shapeColor = "white";
  line21 = createSprite(668, 282, 5, 100);
  line21.visible = false;
  line21.shapeColor = "white";
  line22 = createSprite(718, 232, 100, 5);
  line22.visible = false;
  line22.shapeColor = "white";
  line23 = createSprite(518, 232, 100, 5);
  line23.visible = false;
  line23.shapeColor = "white";
  tp1 = createSprite(718, 82);
  tp1.addImage(tp1Img);
  tp1.scale = 0.2;
  tp1.visible = false;
  textSize(50);
  textAlign(CENTER);
}

function draw() {
  background(255,255,255);
  drawSprites();
  handleMousePressedName();
  if (gamestate == "Name"){
    nameInput.show();
    nameButton.show();
    textSize(20);
    text("Enter your name or gaming name here please.", 200, 25);
  }
  if(gamestate == "story"){
    background(bgStory);
    fill("white");
    textStyle(BOLD)
    textSize(37);
    text("'Farmer " + nameInput.value() + "!"+"\nThere's been a catastrophe!"+"\nThe group of foxes from the woods has stolen our prize sheep for the upcoming farm county fair!"+"\nWhat will we do now?! You must save the sheep!'",width/2,650);
    missionAcceptButton.show();
    missionAcceptButton.mousePressed(()=>{
      missionAcceptButton.hide();
      gamestate = "Level 1 Rules";
    });
  }
  if(gamestate == "Level 1 Rules"){
    background(bgL1);
    l1RulesButton.show();
    fill("white");
    text("In this first level, you must navigate your way through"+"\n the maze to reach the forest.", width/2, height/2);
    l1RulesButton.mousePressed(()=>{
      l1RulesButton.hide();
      gamestate = "Level 1";
    });
  }
  if(gamestate == "Level 1"){
    background(bgL1);
    farmer.visible = true;
    line1.visible = true;
    line2.visible = true;
    line3.visible = true;
    line4.visible = true;
    line5.visible = true;
    line6.visible = true;
    line7.visible = true;
    line8.visible = true;
    line9.visible = true;
    line10.visible = true;
    line11.visible = true;
    line12.visible = true;
    line13.visible = true;
    line14.visible = true;
    line15.visible = true;
    line16.visible = true;
    line17.visible = true;
    line18.visible = true;
    line19.visible = true;
    line20.visible = true;
    line21.visible = true;
    line22.visible = true;
    line23.visible = true;
    tp1.visible = true;
    if(keyIsDown(UP_ARROW)){
      farmer.changeAnimation("up");
      farmer.y -= 3;
    }
    if(keyIsDown(DOWN_ARROW)){
      farmer.changeAnimation("down");
      farmer.y += 3;
    }
    if(keyIsDown(LEFT_ARROW)){
      farmer.changeAnimation("left");
      farmer.x -= 3;
    }
    if(keyIsDown(RIGHT_ARROW)){
      farmer.changeAnimation("right");
      farmer.x += 3;
    }
    farmer.collide(line1);
    farmer.collide(line2);
    farmer.collide(line3);
    farmer.collide(line4);
    farmer.collide(line5);
    farmer.collide(line6);
    farmer.collide(line7);
    farmer.collide(line8);
    farmer.collide(line9);
    farmer.collide(line10);
    farmer.collide(line11);
    farmer.collide(line12);
    farmer.collide(line13);
    farmer.collide(line14);
    farmer.collide(line15);
    farmer.collide(line16);
    farmer.collide(line17);
    farmer.collide(line18);
    farmer.collide(line19);
    farmer.collide(line20);
    farmer.collide(line21);
    farmer.collide(line22);
    farmer.collide(line23);
    if(farmer.isTouching(tp1)){
      gamestate = "Level 2 Rules";
      farmer.x = width/2;
      farmer.y = height - 80;
    }
    drawSprites();
  }
  if(gamestate == "Level 2 Rules"){
    background(bgL2);
    l2RulesButton.show();
    fill("white");
    text("In this level, you must get to the other side without alerting the bear."+"\n Good luck!", width/2, height/2);
    
  }
}
function handleMousePressedName(){
  nameButton.mousePressed(()=>{
    nameInput.hide();
    nameButton.hide();
    gamestate = "story";
  });
}
function keyReleased(){
  if(keyCode == UP_ARROW){
    farmer.changeAnimation("upStop");
  }
  if(keyCode == DOWN_ARROW){
    farmer.changeAnimation("downStop");
  }
  if(keyCode == LEFT_ARROW){
    farmer.changeAnimation("leftStop");
  }
  if(keyCode == RIGHT_ARROW){
    farmer.changeAnimation("rightStop");
  }
}