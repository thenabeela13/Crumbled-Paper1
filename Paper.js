class Paper {
    constructor(){
        var options = {
           isStatic : false,
           restitution :0.8,
           friction : 0.5,
           density : 1.2
        }

        this.body = Bodies.circle(200,200,20);
        World.add(world.this.body);

    }

    display(){
        var pos = this.body.position;
        fill(255);
        ellipse(pos.x, pos.y, 20, 20 );
        
    }
}