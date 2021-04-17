const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;


var engine, world;
var ball, mainGround, rope;

function setup() {
    var canvas = createCanvas(1500, 700);
    engine = Engine.create();
    world = engine.world;


    ball = new Ball(150, 400, 75, 75);
    mainGround = new Ground(750, 698, 1500, 40);
    sGround1 = new Ground(560, 660, 290, 30);
    sGround2 = new Ground(980, 460, 220, 20);



   
    box1 = new Box(435,200,40,50);
    box2 = new Box(475,200,40,50);
    box3 = new Box(515,200,40,50);
    box4 = new Box(555,200,40,50);
    box5 = new Box(595,200,40,50);
    box6 = new Box(475,100,40,50);
    box7 = new Box(515,100,40,50);
    box8 = new Box(555,100,40,50);
    box9 = new Box(515,50,40,50);
    box10 = new Box(890,200,40,50);
    box11 = new Box(930,200,40,50);
    box12 = new Box(970,200,40,50);
    box13 = new Box(1010,200,40,50);
    box14 = new Box(1050,200,40,50);
    box15 = new Box(930,100,40,50);
    box16 = new Box(970,100,40,50);
    box17 = new Box(1010,100,40,50);
    box18 = new Box(970,50,40,50);
    rope = new launcher(ball.body, { x: 150, y: 550 });

}

function draw() {
    background(55, 43, 43);
    Engine.update(engine);
    ball.display();
    mainGround.display();
    sGround1.display();
    sGround2.display();
    box1.display();
    box2.display();
    box3.display();
    box4.display();
    box5.display();
    box6.display();

    box7.display();
    box8.display();
    box9.display();

    box10.display();

    box11.display();
    box12.display();

    box13.display();

    box14.display();
    box15.display();
    box16.display();

    box17.display();
    box18.display();

  

    rope.display();

}


function mouseDragged() {
    Matter.Body.setPosition(ball.body, { x: mouseX, y: mouseY });
}

function mouseReleased() {
    rope.fly();
}
