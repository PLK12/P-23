class Playerbase
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
        this.image = loadImage("./assets/base1.png");

        World.add(myWorld, this.body);
    }

    display()
    {
        var pos = this.body.position;
        var angle = this.body.angle;

        push();
        translate(pos.x, pos.y);
        rotate(angle);
        image(this.image, 0,0, this.width/2, this.height/2);
        //scale = 0.1;
        pop();
    }
}

    