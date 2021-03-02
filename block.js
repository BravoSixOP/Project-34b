class Block{
    constructor(x,y){
        this.body = Bodies.rectangle(x, y, 60, 60);
        this.width = 60;
        this.height = 60;
        World.add(world, this.body);
    }
    display(){
        push();
        var pos = this.body.position;
        translate(pos.x, pos.y);
        rotate(this.body.angle);
        rectMode(CENTER);
        rect(0, 0, this.width, this.height);
        pop();
    }
}