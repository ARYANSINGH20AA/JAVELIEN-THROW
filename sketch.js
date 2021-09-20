
var play=1,end =0
var gameState=play
var bg;
var stadium;
var player1,player2,player3,player4;
var playerimg;
var path;
var pathimg;
var flagimg,flag,flag1,flag2,flag3;
var stick,stickimg;
var stickstandimg;
var ground;
var score=0;





function preload(){
stadium=loadImage("stadium.jpg")
pathimg=loadImage("track image.png")
playerimg=loadImage("playeraaaa.png")
flagimg=loadImage("flag.png")
stickimg=loadImage("stickc.png")
}



function setup(){
createCanvas(1500,800);
path = createSprite(300,740,400,10)
path.addImage("pathImage",pathimg)
player1 = createSprite(70,690,10,10);
player1.addImage("running",playerimg);
player1.scale=0.5
//player2 = createSprite(25,600,10,10);
//player3 = createSprite(25,500,10,10);
//player4 = createSprite(25,400,10,10);
flag=createSprite(800,720,10,10);
flag.addImage("distance",flagimg);
flag.scale=0.05
flag1=createSprite(1000,720,10,10);
flag1.addImage("distance",flagimg);
flag1.scale=0.05
flag2=createSprite(1170,720,10,10);
flag2.addImage("distance",flagimg);
flag2.scale=0.05
flag3=createSprite(1450,720,10,10);
flag3.addImage("distance",flagimg);
flag3.scale=0.05
stick=createSprite(78,655,40,10);
stick.addImage("stick",stickimg);
 stick.scale=0.8
 ground=createSprite(200,800,2600,10);

}


function draw(){
background(stadium);
textSize(30);
text("SCORE"+score,600,20)
if(gameState===play)
{
    if(keyDown("space")){
stick.velocityY=-15;            
stick.velocityX=+30;
}
stick.velocityY=stick.velocityY+0.8;
stick.velocityX=stick.velocityX+0.5;

}
/*if(stick.isTouching(ground)){
    gameState=end;
    
}
}
if(gameState===end){

    stick.velocityX=0
    stick.velocityY=0
}*/
stick.collide(ground)
drawSprites();

}  