var Engine = Matter.Engine,
  World = Matter.World,
  Events = Matter.Events,
  Bodies = Matter.Bodies;

var snowfall1 = [];
var snowfall2 = [];
var backgroundImg1,backgroundImg2,backgroundImg3;
var gameState = "animation1";

var time = 0;

  function preload(){
    
    backgroundImg1 = loadImage("snow1.jpg");
    backgroundImg2 = loadImage("snow2.jpg");
    backgroundImg3 = loadImage("snow3.jpg");

  }


  function setup(){
    createCanvas(800,600);

    engine = Engine.create();
    world = engine.world;

   

  }


  function draw(){
   
    if(gameState==="animation1"){
    background(backgroundImg1);

      if(frameCount%260===0){
        gameState = "animation2"
      }

    }

    if(frameCount%10===0){
      snowfall1.push(new SnowType11(random(width/2-200, width/2+200), 20*2,20*2));
    }



    if(frameCount%20===0){
      snowfall2.push(new SnowType12(random(width/2-200, width/2+200), 20*2,20*2));
    }


    

    if(gameState==="animation2"){
      background(backgroundImg2);
    }


    if(frameCount%520===0){
      gameState = "animation3"
    }


    if(gameState==="animation3"){

      background(backgroundImg3);

    }

    if(frameCount%720===0){
      gameState = "animation1"
    }




    Engine.update(engine);

    for(var j = 0;j < snowfall1.length; j++){
      snowfall1[j].display();
    }

    for(var m = 0;m < snowfall2.length; m++){
      snowfall2[m].display();
    }

  }