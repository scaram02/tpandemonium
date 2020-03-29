class Player {
    constructor() {

      this.x = 250;
   
      this.velocity = 0;
      this.gravity = 0.2;
      this.jumpCount = 0;
    }
  
    preload() {
      this.img = loadImage("assets/karen.png");
    }
  
    setup() {
      this.y = height - 200;
  
      this.originalY = this.y;
  
      this.width = 210;
      this.height = 200;

      // console.log("widrh, height", this.img.width, this.img.height)
    }
  
    draw() {
      this.velocity += this.gravity;
      this.y += this.velocity;
  
      if (this.y > this.originalY) {
        this.y = this.originalY;
        this.jumpCount = 0;
      }
  
      image(this.img, this.x, this.y, this.width, this.height);
      // push()
      // fill("blue")
      // rect(this.x, this.y, this.width, this.height)
      // pop()
    }
  
    jump() {
      if (this.jumpCount < 3) {
        this.velocity = -8;
        this.jumpCount++;
      }
    }
  }