class Rope{

    constructor(body1,body2,offSetX,offSetY){
  
      this.offSetX=offSetX;
      this.offSetY=offSetY;

      var options = {
          bodyA: body1,
          bodyB: body2,
          pointB: {x:offSetX,y:offSetY},
          stiffness: 0.04
          
      }
      
      this.rope = Constraint.create(options);
      World.add(world, this.rope)
  }
  
 
  
  
    display(){
   
   var pointA = this.rope.bodyA.position
   var pointB = this.rope.bodyB.position
  
   var anchorAx = pointB.x+this.offSetX
    var anchorAy = pointB.y+this.offSetY


    strokeWeight(4);
    line(pointA.x,pointA.y,anchorAx,anchorAy)
  }
  }
  