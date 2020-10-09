class Roof {
    constructor(width) {
      var options = {
          isStatic: true
      }
      this.body = Bodies.rectangle(450,200,width,20,options);
      this.width = width;
      this.height = 20;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      rectMode(CENTER);
      fill("grey");
      rect(pos.x, pos.y, this.width, this.height);
    }
  };