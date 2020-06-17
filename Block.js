class Block{
  constructor(x, y, width, height){
    
   //options={
    //isStatic : false 
   //} 

   this.body = Bodies.rectangle(x,y,width,height,{isStatic:false});
   this.width = width;
   this.height = height;
   World.add(world, this.body);

  }
  display(){
  var pos =this.body.position;
  rectMode(CENTER);
  fill("lightblue");
  rect(pos.x, pos.y, this.width, this.height)
}
};