

var theif,theifimg
var jwell,jwellimg
var soldier1
var soldier2
var soldier3
var police1 , police1img
var police2 , police2img
var police3 , police3img
var normalcar , normalcarimg
var checkpoint , checkpointimg
var backgroundimg
var line3
var canvas
var z
var line
var line2




function preload() {
backgroundimg =loadImage("background.png")
theifimg  = loadImage("theif.png")
jwellimg = loadImage("jwell.png")
backgroundimg = loadImage("background.png")
police1img = loadImage("leftpolice.png")
police2img = loadImage("rightpolice.png")
police3img = loadImage("uppolice.png")
normalcarimg = loadImage("normalcar.png")
checkpointimg = loadImage("checkpoint.png")

}


function setup() {
  canvas = createCanvas(1000,500);

  line = createSprite(10,495,1675,10)
  line.visible = true

  line2 = createSprite(1000,250,10,1675)
  line2.visible = true

  line3 = createSprite(10,500,10,1675)
  line3.visible = true

  theif = createSprite(50,475 , 20 , 20 )
  theif.addImage(theifimg)
  theif.scale = 0.10
  theif.debug=true

 

  jwell = createSprite(800,50,30,30)
  jwell.addImage(jwellimg)
  jwell.scale = 0.20

 soldier1 = createSprite(110,50,200,10)
 soldier1.velocityX = 5
 soldier1.velocityY = 3


  soldier2 = createSprite(400,50,200,10)
  soldier2.velocityY = 5
  soldier2.debug=true

  

  soldier3 = createSprite(650,50,200,10)
  soldier3.velocityX = -5
  soldier3.velocityY = 5


 
  police1 = createSprite(700,200,20,20)
  police1.addImage(police1img)
  police1.scale = 0.20
  police1.visible= true
 

   
  police2 = createSprite(100,350,20,20)
  police2.addImage(police2img)
  police2.scale = 0.10
  police2.visible= true

  police3 = createSprite(800,350,20,20)
  police3.addImage(police3img)
  police3.scale = 0.13
  police3.visible= true

  normalcar = createSprite(400,450,20,20)
  normalcar.addImage(normalcarimg)
  normalcar.scale = 0.20
  normalcar.visible= false

  checkpoint = createSprite(50,475,20,20)
  checkpoint.addImage(checkpointimg)
  checkpoint.scale = 0.10
  checkpoint.visible = false


}


function draw() {
  background(backgroundimg)


//right
  if(keyIsDown(RIGHT_ARROW)){
      theif.velocityX = 5
  }
  if(keyWentUp(RIGHT_ARROW)){
    theif.velocityX = 0
  }

//left
  if(keyIsDown(LEFT_ARROW)){
    theif.velocityX = -5
}
if(keyWentUp(LEFT_ARROW)){
  theif.velocityX = 0
}

//up
if(keyIsDown(UP_ARROW)){
  theif.velocityY = -5
}
if(keyWentUp(UP_ARROW)){
theif.velocityY = 0
}

//down
if(keyIsDown(DOWN_ARROW)){
  theif.velocityY = 5
}
if(keyWentUp(DOWN_ARROW)){
theif.velocityY = 0
}

//collision with soldiers
if(theif.isTouching(soldier1)){
    reset()
    gameOver()
}

if(theif.isTouching(soldier2)){
  reset()
  gameOver()

}

if(theif.isTouching(soldier3)){
  reset()
  gameOver()

}

//collison with the cop
if(theif.isTouching(police1)){
  reset()

}

if(theif.isTouching(police2)){
reset()

}

if(theif.isTouching(police3)){
reset()
}



//bounce effect of bars
if(soldier1.isTouching(line)){
    soldier1.x = Math.round(random(500,100))
    soldier1.y = Math.round(random(100,900))
}

if(soldier2.isTouching(line)){
  soldier2.x = Math.round(random(500,100))
  soldier2.y = Math.round(random(100,100))
}

if(soldier3.isTouching(line)){
  soldier3.x = Math.round(random(500,100))
  soldier3.y = Math.round(random(100,100))
}


//bounce effect of police cars
if(police1.isTouching(line2) || police1.isTouching(line3)){
  police1.x = Math.round(random(100,500))
  police1.y = Math.round(random(200,400))
}

if(police2.isTouching(line2) || police2.isTouching(line3)){
  police2.x = Math.round(random(100,500))
  police2.y = Math.round(random(200,500))
}

if(police3.isTouching(line2) || police3.isTouching(line3)){
  police3.x = Math.round(random(50,200))
  police3.y = Math.round(random(200,400))
}






if(theif.isTouching(jwell)){
    cop1()
    cop2()
    cop3()
    normalcarf()
    checkpointf()
   
}



  drawSprites()
}




function reset(){
  soldier1.velocityX = 0
  soldier1.velocityY = 0
  soldier2.velocityX = 0
  soldier2.velocityY = 0
  soldier3.velocityX = 0
  soldier3.velocityY = 0
  police1.velocityX = 0
  police2.velocityX = 0
  police3.velocityX = 0
  normalcar.velocityX = 0
  
}

function cop1(){
    police1.velocityX = 11
    police1.visible = true
}

function cop2(){
  police2.velocityX = 8
  police2.visible = true
}

function cop3(){
  police3.velocityX = 8
  police3.visible = true
}

function normalcarf(){
  normalcar.velocityX = 8
  normalcar.visible = true
}

function checkpointf(){
    checkpoint.visible = true
   
}

function gameOver() {
  swal(
    {
      title: `Game Over , You lost!!!`,
      text: "Thanks for playing!!",
      imageUrl:checkpointimg,
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}


function gameOver2() {
  swal(
    {
      title: `Game Over , You Won!!!`,
      text: "Thanks for playing!!",
      imageUrl:checkpointimg,
      imageSize: "150x150",
      confirmButtonText: "Play Again"
    },
    function(isConfirm) {
      if (isConfirm) {
        location.reload();
      }
    }
  );
}

