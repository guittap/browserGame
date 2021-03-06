class Bird {
    constructor(startHeight, dir, end) {
        this.y=startHeight;
        this.dir=dir;
        this.flapping=true; 
        this.flapCount=0;
        this.size=.025*width;
        this.state=true; //1=flying, 0=falling
        this.end=end;
        this.killy=0;
        this.killx=0;

        this.fallingGrav=1.5;

        if (dir)
        {
            this.x=-this.size;
        }
        else
        {
            this.x=width;
        }

        this.colors=[color('#88f')];
        this.colorVal=random(this.colors);
    }

    fallingUpdate() {
        this.flapping=false;
        this.y+=this.fallingGrav;
    }

    flyingUpdate() {
        this.flapCount+=1;
        if (this.flapCount>=30) {
            this.flapCount=0;
            this.flapping=!this.flapping;
        }

        if (this.dir)
        {
            this.x+=1;
        }
        else
        {
            this.x-=1;
        }
    }

    behavior() {
        if (this.dir && this.x>=this.end || !this.dir && this.x<=this.end)
        {
            this.state=0;
        } 

        if (this.state)
        {
            this.flyingUpdate();
        }
        else
        {
            this.fallingUpdate();
        }
                
        this.killx=this.x;
        this.killy=this.y+.5*this.size;
    }

    draw() {

        this.behavior();

        noStroke();
        fill(this.colorVal);
        if (this.flapping)
        {
            quad(this.x, this.y, this.x+this.size, this.y+this.size, this.x, this.y+.5*this.size, this.x-this.size, this.y+this.size);
        }
        else
        {
            quad(this.x, this.y, this.x+this.size, this.y-this.size, this.x, this.y+.5*this.size, this.x-this.size, this.y-this.size);
        }
    }
}

class RedBird extends Bird {

    constructor(startHeight, dir, end){
        super(startHeight,dir,end);
        this.offset = 0;
        
        
    }

    behavior(){



        this.killx=this.x;
        this.killy=this.y+.5*this.size;
    }

}