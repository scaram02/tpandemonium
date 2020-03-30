let shopper;

let object = [
    {imgUrl: "assets/cart.png"},
    {imgUrl: "assets/cart.png"},
    {imgUrl: "assets/cart.png"}
]

class Shopper {
  constructor() {
    this.x = 1000; 
    // this.y = Math.random() * 400
this.y = 475

    this.width = 225;
    this.height = 225;

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