class fly{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.2,
            length: 80
        }
        this.pointB = pointB;

        this.fly = Constraint.create(options);
        World.add(world, this.fly);
    }
    display(){
        push();
        var pointA = this.fly.bodyA.position;
        var pointB = this.pointB;

        //line(pointA.x, pointA.y, pointB.x, pointB.y);
        pop();
    }
}