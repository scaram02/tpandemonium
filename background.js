class Background {
    constructor() {
      // console.log("background constructor");
    //   this.xClouds = 0;
      this.xSky = 0;
      this.xShelves = 0;

    }
  
    preload() {
      // console.log("background preload");

      this.bgSky = loadImage('assets/test.png');
      this.bgShelves = loadImage('assets/shelves.png');
    
    }
  
    draw() {
  
      this.xSky -= 1;
      image(this.bgSky, this.xSky, 0, width);
      image(this.bgSky, this.xSky + width, 0, width);
  
      // this.xSky = this.xSky % width;
      if (this.xSky <= -width) {
        this.xSky = 0;
      }
  
     
  
      this.xShelves -= 4;
      image(this.bgShelves, this.xShelves, 100, width);
      image(this.bgShelves, this.xShelves + width, 100, width);
  
      if (this.xShelves <= -width) {
        this.xShelves = 0;
      }
    }
  }