class Chain {
    constructor(bodyA,bodyB) {
        var options={
            bodyA:bodyA,
            bodyB:bodyB,
            stiffness:0.05,
            length:10
        }
    this.chain=Constraint.create(options)  

     World.add(world,this.chain);
}
     display() {
         var pointing = this.chain.bodyA.position 
         var pointingB = this.chain.bodyB.position

         line(pointing.x,pointing.y,pointingB.x,pointingB.y);
         
     }

    }
    
