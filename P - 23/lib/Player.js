class Player
{
    constructor(x,y,w,h)
    {
        var options = 
        {
            isStatic:true
        }
        
        this.body = Bodies.rectangle(x,y,w,h, options);
        this.width = width;
        this.height = height;
        this.image = loadImage("./assets/player.png");

        World.add(myWorld, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 50,windowWidth/2, this.width/10, this.height/4);
        //scale = 0.01;
        pop();
    }
}
