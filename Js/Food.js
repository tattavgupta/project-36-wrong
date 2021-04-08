function preload(){
  foodIMG=loadImage("images/Milk.png")
}
var foodStock,lastFed
class Food{
   constructor(){
      
   }
   static display(){
   var x=80,y=100;

   imageMode(CENTER);
   image(foodIMG,720,220,70,70);

   if(this.foodStock!=0){
     for(var i;i<this.foodStock;i++){
       if(i%10==0){
         x=80;
         y=y+50;
       }
       image(this.foodIMG,x,y,50,50);
       x=x+30;
     }
   }
   image(foodIMG,200,200,50,50)
   }
}