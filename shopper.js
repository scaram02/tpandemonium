let shopper;

let object = [
    {imgUrl: "assets/shopper3.png"},
    {imgUrl: "assets/shopper3.png"},
    {imgUrl: "assets/shopper3.png"}
]

class Shopper {
  constructor() {
    this.x = 1000; 
    // this.y = Math.random() * 500
    this.y = 550;

    this.width = 150;
    this.height = 150;

    this.randomShopper = object[Math.floor(Math.random() * object.length)]
    this.imgUrl = this.randomShopper.imgUrl

  }

  preload() {
      this.img = loadImage(this.imgUrl);
    }

  setup() {}

  draw() {

if (this.x > 1000){
  this.x = 600
} else {
  this.x-= 4
}
    image(this.img, this.x, this.y, this.width, this.height);


   
  }

}