class BaseClass{
    constructor(x, y,width,height) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
    this.body = Bodies.circle(x,y,48,options);
        this.width = 48;
        this.height = 48;
    //  this.image = loadImage("sprites/base.png");
        World.add(world, this.body);
      }
      display(){
        
ellipseMode(RADIUS);
ellipse(this.body.position.x,this.body.position.y,this.width,this.height);

       // translate(this.body.position.x, this.body.position.y);
     //   imageMode(CENTER);
       // image(this.image, 0, 0, this.width, this.height);
      }
}

