const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Constraint = Matter.Constraint;

var divisions=[],particles=[],plinkos=[];

function setup() {
  createCanvas(480,800);
  engine = Engine.create();
world = engine.world;

b1=new Ground(240,800,480,10)
b2=new Ground(240,0,480,10)
b3=new Ground(0,400,10,800)
b4=new Ground(480,400,10,800)

for(var i=0;i<8;i++){
divisions.push(new Division(i*60,650))
}

for(var i=0;i<8;i++){
  if(i*100<480){
  plinkos.push(new Plinkos(i*100,40))
  plinkos.push(new Plinkos(i*100+50,100))
  plinkos.push(new Plinkos(i*100,160))
  plinkos.push(new Plinkos(i*100+50,220))
  plinkos.push(new Plinkos(i*100,280))
  plinkos.push(new Plinkos(i*100+50,340))
  plinkos.push(new Plinkos(i*100,400))

  }
}


}

function draw() {
  background(155,25,125);  
  Engine.run(engine);

  fill("black")
  b1.display()
  b2.display()
  b3.display()
  b4.display()

  if(frameCount%30===0)
  particles.push(new Particles(random(0,480),10))


  for(var i=0;i<divisions.length;i++){
    divisions[i].display()
  }
  for(var i=0;i<plinkos.length;i++){
    plinkos[i].display()
  }
  for(var i=0;i<particles.length;i++){
    particles[i].display()
  }
}