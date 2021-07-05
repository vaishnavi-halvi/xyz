class Particles{
    constructor(x,y){
        var options={
            restitution:0.5,
            density:0.01,
            friction:1
        }
        this.body=Bodies.circle(x,y,10,options);
        this.color= color(random(0,255),random(0,255),random(0,255))
        World.add(world,this.body);
    }
    display(){
        push()
            var pos=this.body.position;
           fill(this.color)
			ellipseMode(CENTER)
			ellipse(pos.x, pos.y,20, 20);

        pop()
    }
}