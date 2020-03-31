let score = 0;
let crashed = 0
let gameEnd = false;
let shing;

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.tp = new Tp();
    this.tps = [];
    this.shopper = new Shopper();
    this.shoppers = []
  }

  preload() {
    this.background.preload();
    this.player.preload();
    shing = loadSound("assets/shing2.wav")

  }

  setup() {
    this.player.setup();
    // console.log(this.player.width, this.player.height)
  }

// tp collision
isCollision(tp, player) {
  if (player.x + player.width < tp.x || tp.x + tp.width < player.x){
    return false
  }
  if (player.y > tp.y + tp.height ||
    tp.y > player.y + player.height
  ) {
  return false;
  }
  return true;
}


isShopperCollision(shopper, player) {
  if (player.x + player.width < shopper.x || shopper.x + shopper.width < player.x){
    return false
  }
  if (player.y > shopper.y + shopper.height ||
    shopper.y > player.y + player.height
  ) {
  return false;
  }
  return true;
}






  draw() {
    this.background.draw();
    this.player.draw();


push();
fill('white');
noStroke();
rect(15, 15, 200, 50, 10);
// pop();
fill("brown");
text("Score: " + score, 30, 50);
pop()

// TP appears!
if (frameCount % 60 === 0) {
  this.tps.push(new Tp ());
}
this.tps.forEach(
(tp, index) => {
if (!tp.img) tp.preload();
  tp.draw();

// removes TP when off screen
if (this.tp.x + this.tp.width <= 0){
this.tps.splice(index, 1)
}

// removes TP upon collide
if (this.isCollision(tp, this.player)) {
this.tps.splice(index, 1);
}

if (this.isCollision(tp, this.player)){
score++
shing.play();
console.log(score)
}
})


    // shopper appears!
    if (frameCount % 320 === 0){
      this.shoppers.push(new Shopper())
    }
    this.shoppers.forEach(
      (shopper, index) => {
        if (!shopper.img) shopper.preload();
          shopper.draw();

          // removes shopper when off screen
    if (this.shopper.x + this.shopper.width <= 0){
  this.shoppers.splice(index, 1)
}


//     // to end the game
    if (this.isShopperCollision(shopper, this.player)) {
      crashed++  
}




if (crashed === 1){
  gameEnd = true
  background(endScr)
  if (score === 1){
    let gameScore = "You hoarded " + score + " roll of toilet paper."
      text(gameScore, 260, 50, 500)
  } else {
  let gameScore = "You hoarded " + score + " rolls of toilet paper."
  text(gameScore, 260, 50, 500)
}
  let highScore = "Your best TP run: " + localStorage.getItem("bestScore");
      push()
    
      text (highScore, 350, 100, 300)
      pop()
      push()
      text("Press SPACE to play again", 320, 600, 400)
      pop()
      noLoop()
}



if (
  !localStorage.getItem("bestScore") ||
  localStorage.getItem("bestScore") < score
) {
  localStorage.setItem("bestScore", score);
}
    })

} // draw

    }