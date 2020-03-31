const game = new Game();
// let yaySound;
// let noooSound;
// let floorSound;
// let themeSong;
let mode;

function preload() {
  game.preload();
  shing = loadSound("assets/shing2.wav")
}

function setup() {
  let gameCanvas = createCanvas(1000, 700); 

  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = 0;
  textSize(32);
  textFont("Georgia");
  fill("darkgreen");
  // bg = loadImage("assets/start.png");
  startScr = loadImage("assets/startscr.png");
  endScr = loadImage("assets/store2.png");

//   themeSong.loop();  
//   themeSong.stop();
}

function draw() {
  clear(); 

  if (mode === 0) {
    background(startScr);
    push();
  fill("lightblue");
  noStroke();
  rect(0, 335, 740, 50, 5, 5);
  pop();
    fill('brown');
    text("Press SPACE to start!", 357, 370);
  }
  if (mode === 1) {
    background("lightblue");
    text("Press SPACE to play!", 365, 680);
    push()
    fill("navy")
    text("Press <SPACEBAR> to: ", 100, 100, 400)
    text("Hoard as much toilet paper as you can.", 100, 250, 600)
    text("Maintain a healthy distance from other shoppers.", 100, 400, 900)
    pop()
  }

  if (mode === 2) {
    game.draw();
    // background(bg);
    // playsound();
  }
}



  // screen toggle
function keyPressed(){
 if (keyCode === 32){
      if (mode === 0) {
        mode = 1;
        draw();
      } else if (mode == 1) {
        mode = 2;
        draw();
      } else if (mode == 2) {
        if (gameEnd){
        mode = 2 ;
        score = 0;   
        crashed = 0
        game.tps = [];
        game.shoppers = []
        gameEnd = false
    
       loop();
       draw(); 
        
        console.log("CRASHED: ", crashed, "Game end?", gameEnd)
      } else {
        game.player.jump()
      }
      }
    }
    
}


window.addEventListener(
  "keypressed",
  function(e) {
    // space and arrow keys
    if ([32, 37, 38, 39, 40].indexOf(e.keyCode) > -1) {
      e.preventDefault();
    }
  },
  false
);