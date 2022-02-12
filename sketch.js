const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var string="esta es una cadena";
console.log(string);

var engine, world;
var box1, pig1;
var backgroundImg;
var platform;
var constraintLog;
var slingshot;
var score=0;
var gameState="onSling";
var counter=0;

function preload() {
    backgroundImg = loadImage("sprites/bg.png");
    //getBackgroundImage();
    
}

function setup(){
    var canvas = createCanvas(1200,400);
    engine = Engine.create();
    world = engine.world;

    
    ground = new Ground(600,height,1200,20)

    box1 = new Box(700,320,70,70);
    box2 = new Box(920,320,70,70);
    pig1 = new Pig(810, 350);
    log1 = new Log(810,260,300, PI/2);

    box3 = new Box(700,240,70,70);
    box4 = new Box(920,240,70,70);
    pig3 = new Pig(810, 220);

    log3 =  new Log(810,180,300, PI/2);

    box5 = new Box(810,160,70,70);
    log4 = new Log(760,120,150, PI/7);
    log5 = new Log(870,120,150, -PI/7);

    box6=new Box(350,320,70,70);
    box7=new Box(570,320,70,70);
    pig4=new Pig(460,320);
    log6=new Log(460,280,300,PI/2);

    box8=new Box(350,270,70,70);
    box9=new Box(350,200,70,70);
    log7=new Log(400,140,300,-PI/3);
    pig5=new Pig(460,200);

    bird = new Bird(200,60);
    bird2=new Bird(120,370);

    platform=new Ground(120,375,300,290);
    slingshot=new SlingShot(bird.body,{x:200,y:60});

}

function draw(){
    
    if(backgroundImg)
    background(backgroundImg);
    textSize(35);
    fill("white");
    text("Puntuación "+score,width-300,50);
    Engine.update(engine);
    console.log(box2.body.position.x);
    console.log(box2.body.position.y);
    console.log(box2.body.angle);
    box1.display();
    box2.display();
    ground.display();
    pig1.display();
    pig1.score();
    log1.display();

    box3.display();
    box4.display();
    pig3.display();
    pig3.score();
    log3.display();

    box5.display();
    log4.display();
    log5.display();

    box6.display();
    box7.display();
    pig4.display();
    pig4.score();
    log6.display();

    box8.display();
    box9.display();
    log7.display();
    pig5.display();
    pig5.score();

    bird.display();
    bird2.display();

    platform.display();

    slingshot.display();


    var string="esta es una cadena";
    console.log(string);
    var num=100;
    console.log(num);
    var bool=true;
    console.log(bool);
    var object=null;
    console.log(object);
    var arr1=[1,2,3,4,5];
    console.log(arr1);
    var arr2=["nombre",12,true];
    console.log(arr2);
    var arr3=[[1,2],[2,3],[3,4,5]];
    console.log(arr3);
}
function mouseDragged(){
    if(gameState !== "over"){
        Matter.Body.setPosition(bird.body,{x:mouseX,y:mouseY});
    }
}
function mouseReleased(){
    gameState="launched";
    slingshot.fly();
}
function keyPressed(){
    if(keyCode==32){
        //bird.trajectory=[];
        //bird2.body=bird.body; 
        //slingshot.attach(bird.body);
        //gameState="onSling";
        //counter++;
        for(var i=0;i<3;counter++){
            bird.trajectory=[]; 
            bird2.body=bird.body; 
            slingshot.attach(bird.body);
        }
        if(counter==2){
            gameState="over";
            textSize(35);
            fill("white");
            text("Game Over",600,200);
        }
        else{
            gameState="onSling"
        }
        //World.remove(world,bird.body);
    }

}
async function getBackgroundImage(){
    var response=await fetch("http://worldtimeapi.org/api/timezone/America/Mexico_City");
    var responseJSON=await response.json();
    var datetime=responseJSON.datetime;
    var hour=datetime.slice(11,13);
    var week=responseJSON.day_of_week;
    if(week=1)
    if(hour>6&&hour<20){
        backgroundImg = loadImage("sprites/bg.png");
    }
    else{
        backgroundImg=loadImage("sprites/bg2.jpg");
    }
}
