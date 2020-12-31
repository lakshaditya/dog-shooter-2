class  Launcher{
    constructor (bodyA,pointB) {
        var options={
            bodyA:bodyA,
            pointB:pointB,
            stiffness:0.05,
            length:10          

     }
        this.chain = Constraint.create(options);
        this.pointB = pointB
         World.add(world,this.chain);
    
    }
    display(){
        if(this.chain.bodyA){
            var pointA = this.chain.bodyA.position;
            var pointB = this.pointB;
            push();
            strokeWeight(4);
            line(pointA.x,pointA.y,pointB.x,pointB.y)  ;
            pop();
        }
    }

    launch(){
        this.chain.bodyA = null;
    }

    attach(body){
        this.chain.bodyA = body;
    }
}