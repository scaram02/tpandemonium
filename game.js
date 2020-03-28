let score = 0;
let gameEnd = false;

class Game {
  constructor() {
    this.background = new Background();
    this.player = new Player();
    this.tp = new Tp();
    this.tps = [];
  }

  preload() {
    this.background.preload();
    this.player.preload();

  }

  setup() {
    this.player.setup();


  }


  draw() {
    this.background.draw();
    this.player.draw();
    
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

  }
)



    }
    };




