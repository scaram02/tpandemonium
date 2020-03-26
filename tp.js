class Tp {
    constructor() {
      this.x = 50; 
      this.y = Math.random() * 950
  
      this.width = 50;
      this.height = 50;
    }
  
    preload() {
        this.img = loadImage("assets/tp.png");
      }

      setup() {}

    draw() {
        // rect(this.x, this.y, this.width, this.height);

      image(this.img, this.x, this.y, this.width, this.height);
      this.x -= 4;
    }
  }
