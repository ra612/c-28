class Chain{
    constructor(bodyA, pointB){
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.04,
            length: 10
        }
        this.chain = Constraint.create(options);
     this.pointB=pointB;
        World.add(world, this.chain);
    
    }
// fly is a user defined function using this function we are trying to deatach the body connected to the point .
// null-- it doesnt hold any values  / or empty     
fly(){

this.chain.bodyA=null

}
    display(){
     // we only want to use display function if the bodyA is not null or when the bodyA is attched to point 
        if (this.chain.bodyA){
        var pointA = this.chain.bodyA.position;
        var pointB = this.pointB;
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
       }
        
    }
    
}