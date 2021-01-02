class Stone {

constructor(x,y,radius){
    var options={
        isStatic: true,
        restitution:0,
        friction:1,
        density:1.2,
        
    } 
    this.body = Bodies.circle(x, y, radius, options);
    this.image =loadImage("Plucking mangoes/stone.png");
        this.radius =radius;
        World.add(world, this.body); 
}
    


    display()
     {
        var pos =this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        ellipseMode(CENTER);
        stroke("green");
        strokeWeight(4);
        fill(255);
        image(this.image,0,0,this.radius,this.radius)
        pop();
      }
    }
    








