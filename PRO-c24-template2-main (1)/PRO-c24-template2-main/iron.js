class iron {
	constructor(x,y)
	{
	
	 var options= {
		 restitution:0.8,
		 friction:1,
		 density:1,

	 }
		this.body=Bodies.rectangle (x,y,50,50,options);
        this.width=50;
		this.height=50;
		World.add(world, this.body);
	}
	display()
	{
			var ironpos=this.body.position;	
			push()
			translate(ironpos.x, ironpos.y);
			rectMode(CENTER)
			strokeWeight(4);
			stroke("red");
			fill("blue");
	      rect (0,0,this.width,this.height)
				
			pop()
	}
}