class Player {
    constructor() {
      //
      this.x = 250;
    //   this.y = 290
      this.velocity = 0;
      this.gravity = 0.2;
      this.jumpCount = 0;
    }
  
    preload() {
      this.img = loadImage("assets/karen.png");
    }
  
    setup() {
      this.y = height - 420;
  
      this.originalY = this.y;
  
      this.width = this.img.width * 2;
      this.height = this.img.height * 2;
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
      if (this.jumpCount < 2) {
        this.velocity = -8;
        this.jumpCount++;
      }
    }
  }