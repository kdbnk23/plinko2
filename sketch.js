const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var particles=[]
var plinkos=[]
var divisions=[]

var divisionHeight=300
var ground 
var score=0
var particle
var turn=0

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
    world = engine.world;
  for(var k=0;k<=width;k=k+80){
    divisions.push(new Division(k,height-divisionHeight/2,10,divisionHeight))
  }
  for (var j=40;j<=width;j=j+50){
    plinkos.push(new Plinko(j,75))
  }
  for (var j=15;j<=width-10;j=j+50){
    plinkos.push(new Plinko(j,175))
  }
  ground=new Ground(240,790,480,10)
  
}

function draw() {
  background(255,255,255);  
  drawSprites();
  Engine.update(engine)
  text("Score"+score,240,50)
  if (frameCount%60===0){
    particles.push(new Particles(random(width/2-10, width/2+10),10,10))
  }
  ground.display()
  for (var j=0;j<particles.length;j++){
    particles[j].display()
  }
  for (var k=0;k<divisions.length;k++){
    divisions[k].display()
  }
  for (var i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }
  text("500",5,550)
  text("400",100,550)
  text("300",175,550)
  text("200",250,550)
  text("100",345,550)
  text("50",440,550)
}