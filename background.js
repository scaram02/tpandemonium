class Background {
    constructor() {
    
      this.xStore = 0;
      this.xShelves = 0;


    }
  
    preload() {
      // console.log("background preload");

      this.bgStore = loadImage('assets/test.png');
      this.bgShelves = loadImage('assets/emptyshelf.png');
    
    }
  
    draw() {
  
      this.xStore -= 1;
      image(this.bgStore, this.xStore, 0, width);
      image(this.bgStore, this.xStore + width, 0, width);
  
      // this.xSky = this.xSky % width;
      if (this.xStore <= -width) {
        this.xStore = 0;
      }
  
     
  
      this.xShelves -= 4;
      image(this.bgShelves, this.xShelves, 120, width);
      image(this.bgShelves, this.xShelves + width, 120, width);
  
      if (this.xShelves <= -width) {
        this.xShelves = 0;
      }
    }
  }