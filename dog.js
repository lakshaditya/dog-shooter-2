class  Dog{
constructor (x,y,width,height) {
    var options={
        resititution:0.8,
        density:1.0,
        friction:1
    }

    this.body = Bodies.rectangle(x,y,width,height,options);
    this.width = width;
    this.height = height;
    this.image1 = loadImage("sprites/dog1.png");
    this.image2 = loadImage("sprites/dog2.png");
    this.image3 = loadImage("sprites/dog3.png");
    this.Visibility=255;
    World.add(world,this.body);

}
    display(){
        
        var pos = this.body.position;
        var angle = this.body.angle;
        console.log(this.body.speed);
       
        
        push();
        if(this.body.speed<3){
            rotate(angle);
            translate(pos.x,pos.y);
            imageMode(CENTER);
            image(this.image1,0,0,this.width,this.height);
        }else{
            World.remove(world,this.body);
            this.Visibility -=5;
            tint(this.Visibility,255);
            image(this.image1,this.body.position.x,this.body.position.x,this.width,this.height);
        }
        pop();      
          
    }
}