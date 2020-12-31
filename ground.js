class  Ground{
    constructor (xpos,ypos,width,height) {
        var options={
            isStatic:true
        }
        this.body = Bodies.rectangle(xpos,ypos,width,height, options);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
    }

    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        fill("brown");
        rect(pos.x, pos.y, this.width, this.height);
    }
}
