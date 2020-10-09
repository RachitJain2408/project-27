class Rope {
    constructor(bodyA , bodyB, offsetX, offsetY){
        this.offsetX = offsetX
        this.offsetY = offsetY

        //using the constraint properties
        var option = {
            bodyA : bodyA,
            bodyB : bodyB,
            pointB : {x: this.offsetX, y: this.offsetY}
        }
        //making the rope var
        this.rope =  Constraint.create(option);
        //adding the rope to the world
        World.add(world,this.rope);
    }

    display(){
        var pointA = this.rope.bodyA.position;
        var pointB = this.rope.bodyB.position;
        //displaying the rope
        fill ("yellow");
        strokeWeight(2);
        var Anchor1X = pointA.x
        var Anchor1Y = pointB.y

        var Anchor2X = pointB.x + this.offsetX
        var Anchor2Y = pointB.y + this.offsetY
        line(Anchor1X,Anchor1Y,Anchor2X,Anchor2Y);
    }
}