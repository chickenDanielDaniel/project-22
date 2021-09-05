class rope{
	constructor(body1,body2,pointA,pointB)
	{
		this.pointA=pointA
		this.pointB=pointB

		var options={
			bodyA:body1,
			bodyB:body2,
			pointB:{x:this.pointA, y:this.pointB}
		}
	//create rope constraint here
	rope1 = Matter.Constraint.create({
		bodyA:roof,
		pointA:{x:0,y:0},
		bodyB:ball1,
		pointB:{x:0,y:0},
		length:100,
		stiffness:0.2
	  });
	  World.add(world,con2);

    //create display() here 

	}
