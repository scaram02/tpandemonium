
class Tp {
  constructor() {
    this.x = 1000; 
    // this.y = Math.random() * 500
    this.y = Math.floor(Math.random() * (700 - 100 + 1) + 200);

    this.width = 50;
    this.height = 50;
  }

  preload() {
      this.img = loadImage("assets/tp.png");
    }

  setup() {}

  draw() {

if (this.x > 1000){
  this.x = 600
} else {
  this.x-= 4
}
    image(this.img, this.x, this.y, this.width, this.height);

    console.log("Karenennnn")
  }
}

