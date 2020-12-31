class  Book{
    constructor (x,y,width,height) {
        var options={
            resititution:0.8,
            density:1.0,
            friction:1
        }
        this.body = Bodies.rectangle(x,y,width,height,options);
        this.width = width;
        this.height = height;
           this.image1 = loadImage("sprites/book.png");
               World.add(world,this.body);
    
    }
    display(){
        var pos = this.body.position
        var angle = this.body.angle
        push();
        rotate(angle);
        translate(pos.x,pos.y);
         imageMode(CENTER);
        image(this.image1,0,0,this.width,this.height);
        pop();   
}
}