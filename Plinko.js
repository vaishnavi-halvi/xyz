class Plinkos{
    constructor(x,y){
        var options={
            isStatic:true
        }
        this.body=Bodies.circle(x,y,15,options);
        World.add(world,this.body);
    }
    display(){
        push()
            var pos=this.body.position;
            translate(pos.x, pos.y);
			ellipseMode(CENTER)
			
			ellipse(0,0,30, 30);

        pop()
    }
}