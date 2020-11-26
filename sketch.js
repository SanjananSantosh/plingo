var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;
 
var particles = [];
var plinkos = [];
var divisions =[];
var divisionHeight=250;
var score =0;
function setup() {
  createCanvas(800, 700);
  engine = Engine.create();
  world = engine.world;
  ground = new Ground(width/2,height,width,20);


   for (var k = 0; k <=width; k = k + 80) {
     divisions.push(new Divisions(k, height-divisionHeight/2, 10, divisionHeight));
   }


    for (var s = 75; s <=width; s=s+50) 
    {
    
       plinkos.push(new Plinko(s,75));
    }

    for (var s = 50; s <=width-10;s=s+50) 
    {
    
       plinkos.push(new Plinko(s,175));
    }

     for (var s = 75; s <=width; s=s+50) 
    {
    
       plinkos.push(new Plinko(s,275));
    }

     for (var s = 50; s <=width-10; s=s+50) 
    {
    
       plinkos.push(new Plinko(s,375));
    }

    

    
}
 


function draw() {
  background("grey");
  textSize(20)
 text("Score : "+score,20,30);
  Engine.update(engine);
  ground.display();
  
   for (var a = 0; a < plinkos.length; a++) {
     
     plinkos[a].display();
     
   }
   if(frameCount%60===0){
     particles.push(new Particle(random(width/2-30, width/2+30), 10,10));
     score++;
   }
 
  for (var o = 0; o < particles.length; o++) {
   
     particles[o].display();
   }
   for (var k = 0; k < divisions.length; k++) {
     
     divisions[k].display();
   }
}