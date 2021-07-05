class Division
{
	constructor(x,y)
	{
		
		this.body=Bodies.rectangle(x, y, 10, 300 ,{isStatic:true});
 		World.add(world, this.body);

	}
	display()
	{
			var Pos=this.body.position;		
			push()
			translate(Pos.x, Pos.y);
			rectMode(CENTER)
			
			rect(0,0,10,300);
			pop()
			
	}

}