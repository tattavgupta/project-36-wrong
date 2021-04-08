var dog,happyDog,foodS,foodStock
var database

function preload()
{
  dogImg = loadImage("images/dogImg.png")
  happyDogImg = loadImage("images/dogImg1.png")
}

function setup() {
  createCanvas(1000, 800);
  database=firebase.database()
  dog=createSprite(900,280,10,10)
  dog.addImage(dogImg)
  dog.scale=0.2
  foodStock=database.ref('Food');
  foodStock.on("value",readStock)
}


function draw() {  
  background(46,139,87)

   fill("blue")
  textSize(25)
  text("Food Remaining:"+foodS,150,200)
  drawSprites();
  //add styles here
 
}

function readStock(data){
  foodS=data.val();
}

function keyPressed() {
  if (keyCode === UP_ARROW) {
    writeStock(foodS-1);
    dog.addImage(happyDogImg)
    Food.display
   }

  if (keyCode === DOWN_ARROW) {
    writeStock(foodS+1);
  }
 }

function readStock(data){
  foodS=data.val();
}

function writeStock(x){
  database.ref('/').update({
    Food:x
  })
}