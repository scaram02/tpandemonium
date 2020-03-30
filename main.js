const game = new Game();
// let yaySound;
// let noooSound;
// let floorSound;
// let themeSong;
let mode;

function preload() {
  game.preload();

shing = loadSOund("assets/shing2.wav")
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
  bg = loadImage("assets/instruc.png");
  startScr = loadImage("assets/startscr.png");

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
  rect(0, 335, 700, 50, 5, 5);
  pop();
    fill('brown');
    text("Press enter to start!", 357, 370);
  }
  if (mode === 1) {
    background(bg);
    text("Press enter to play!", 365, 680);
  }

  if (mode === 2) {
    game.draw();
    // background(bg);
    // playsound();
  }





}


  // function playsound() 
  // {
  //   if(themeSong.isPlaying() == false) 
  //   {
  //     themeSong.play();
  //   } 
  // }


  // screen toggle
function keyPressed(){
    if (mode === 2 && keyCode === 32){
        game.player.jump()
    } else if (keyCode === ENTER){
      if (mode === 0) {
        mode = 1;
        draw();
      } else if (mode == 1) {
        mode = 2;
        draw();
      } else if (gameEnd) {
        mode = 0;
        score = 0;
        game.trashes = [];
        themeSong.stop();
        loop();
        draw();
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
