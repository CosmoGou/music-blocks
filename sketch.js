var canvas;
var music;
var box1,box2,box3,box4;
var ball1;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(400,400);
    var box1 = createSprite(50,390,70,10);
    box1.shapeColor = "red";
    var box2 = createSprite(150,390,70,10);
    box2.shapeColor = "yellow";
    var box3 = createSprite(250,390,70,10);
    box3.shapeColor = "cyan";
    var box4 = createSprite(350,390,70,10);
    box4.shapeColor = "lightgreen";
    var ball1 = createSprite(200,200,10,10);
    ball1.velocityY = 8;
    ball1.x = Math.round(random(50,350))
    ball1.collide(box1);
    ball1.collide(box2);
    ball1.collide(box3);
    ball1.collide(box4);
    //create box sprite and give velocity

}

function draw() {
    background(rgb(169,169,169));
    drawSprites();
    createEdgeSprites();
    if(ball1.isTouching(box1)){
        ball1.shapeColor = "red"
        music.play();
    }
    if(ball1.isTouching(box2)){
        ball1.shapeColor = "yellow"
        music.play();
    }
    if(ball1.isTouching(box3)){
        ball1.shapeColor = "cyan"
        music.play();
    }
    if(ball1.isTouching(box4)){
        ball1.shapeColor = "cyan"
        music.play();
    }
   
}
