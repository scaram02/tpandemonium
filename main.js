const game = new Game();
// let yaySound;
// let noooSound;
// let floorSound;
// let themeSong;
// let mode;

function preload() {
  game.preload();
//   yaySound = loadSound("assets/yay.wav"); 
//   noooSound = loadSound("assets/no.wav");
//   floorSound = loadSound("assets/floor.wav");
//   themeSong = loadSound("assets/bugdom.mp3");
}

function setup() {
  let gameCanvas = createCanvas(1000, 700); 
  gameCanvas.parent("gameCanvas");
  game.floor = 700;
  game.setup();
  mode = 2;
  textSize(32);
  textFont("Georgia");
  fill("darkgreen");
  bg = loadImage("assets/store.png");
  startScr = loadImage("assets/start.jpg");

//   themeSong.loop();  
//   themeSong.stop();
}

function draw() {
  clear(); 

  if (mode === 0) {
    background(startScr);
    fill('darkgreen');
    text("Press enter to start!", 365, 680);
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

//   if (keyIsPressed(32)) {
//     game.player.jump();
//   }
}

//  screen toggle
// function keyPressed() {
//   if (keyCode === ENTER) {
//     if (mode === 0) {
//       mode = 1;
//       draw();
//     } else if (mode == 1) {
//       mode = 2;
//       draw();
//     // } else if (gameEnd) {
//       // mode = 0;
//       // score = 0;
//       // missed = 0;
//       game.tps = [];
//       // themeSong.stop();
//       loop();

//       draw();
//     }
//   }
// }


//   function playsound() 
//   {
//     if(themeSong.isPlaying() == false) 
//     {
//       themeSong.play();
//     } 
//   }

function keyPressed(){
    if (keyCode === 32){
        game.player.jump()
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
