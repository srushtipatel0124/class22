const Engine=Matter.Engine;
 const World=Matter.World;
  const Bodies=Matter.Bodies;
   var myEngine,myWorld,myBody; 
   function setup() { 
     createCanvas(400,400); 
     myEngine=Engine.create();
      myWorld=myEngine.world;
      var options={
        isStatic:true
      }
       myBody=Bodies.rectangle(200,150,50,50,options);
        World.add(myWorld,myBody);
        console.log(myBody)
       }
        function draw() { 
          background("black");
          Engine.update(myEngine)
           rectMode(CENTER);
            rect(myBody.position.x,myBody.position.y,50,30);
             rect(200,50,50,50);
             }
