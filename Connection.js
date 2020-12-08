class Connection
{
    constructor(x,y)
    {
    var options ={
      bodyA:x,
      bodyB:y,
      stiffness:0.04,
      length:20
    }
    this.body=Constraint.create(options)
    World.add(world,this.body)
    this.a=x
    this.b=y
    }
    display()
    {
      
     
line (this.a.position.x,this.a.position.y,this.b.position.x,this.b.position.y)

        
    }
    
}