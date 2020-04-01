let tp;

class Tp {
  constructor() {
    this.x = 1000; 
    // this.y = Math.random() * 500
    this.y = Math.floor(Math.random() * (700 - 130 + 1) + 100);

    this.width = 65;
    this.height = 65;
  }

  preload() {
      this.img = loadImage("assets/tp.png");
    }

  setup() {}

  draw() {

if (this.x > 1000){
  this.x = 600
} else {
  this.x-= 6
}
    image(this.img, this.x, this.y, this.width, this.height);

    // console.log("Karenennnn get the tp")

   
  }

}