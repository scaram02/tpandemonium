let score = 0;
// let missed = 0;

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
    // console.log("aaaaaaaa game setup");
    this.player.setup();
    // image(this.tps, 100, 300, 100, 300);
   
  }

//   isFloorCollision(trash, floorT) {
//     // console.log(trash.y, trash.height);
//     return trash.y == floorT - 51; // might need to change now
//   }

//   isCollision(trash, player) {
//     if (trash.y >= 650) return false;
//     if (
//       trash.y > player.y &&
//       (trash.x > player.x && trash.x + trash.width < player.x + player.width)
//     ) {
//       if (
//         (trash.randomTrash.category === "bio" &&
//           player.colors[(player.selectedColor + 2) % 3] === "brown") ||
//         (trash.randomTrash.category === "plastic" &&
//           player.colors[(player.selectedColor + 2) % 3] === "yellow") ||
//         (trash.randomTrash.category === "none" &&
//           player.colors[(player.selectedColor + 2) % 3] === "black")
//       ) {
//         score += 1;
//         yaySound.play();
//       } else {
//         missed++;
//         noooSound.play();
//       }
//       return true;
//     }
//     return false;
//   }

  draw() {
    this.background.draw();
    this.player.draw();
    // push();
    // fill('white');
    // noStroke();
    // rect(15, 15, 200, 100, 20);
    // pop();
    // fill("forestgreen");
    // text("Score: " + score, 30, 50);
    // push();
    // fill("red");
    // text("Missed: " + missed, 30, 100);
    // pop();
   

   
    if (frameCount > 120 && frameCount % 120 === 0) {
      this.tps.push(new Tp());
    }
    this.tp.preload();
    this.tp.draw();

    // this.tps.forEach((tp, index) => {
    //   (tp, index) => {
    //     tp.draw();
      

    //     if (tp.x + tp.width <= 0) {
    //         //   remove obstacle
    //         this.tps.splice(index, 1);
    //       }
        
    //       if (this.isCollision(tp, this.player)) {
    //         console.log("GAME OVER");
    //         noLoop();
    //       }
    //     } 
    // }
    //   if (this.isCollision(tp, this.player)) {
    //     this.tps.splice(index, 1);
    //   }

    //   if (this.isFloorCollision(trash, this.floor)) {
    //     missed++;
    //     // removes 1 elem
    //   }
    //   if (
    //     this.isFloorCollision(trash, this.floor) &&
    //     !this.isCollision(trash, this.player)
    //   ) {
    //     floorSound.play();
    //   }
 

    // if (missed === 10) {
    //     //10
    //   gameEnd = true; // could add sound
    //     background("black");
    //     let yourScore = "Your score: "  + score;
    //     let theBestScore =
    //       " Your best score: " + localStorage.getItem("bestScore");
    //     let ohTrashed = "You trashed your park!";
    //     push();
    //     textAlign(CENTER, CENTER); 
    //     text(yourScore, 310, 350, 370);
    //     text(ohTrashed, 250, 150, 500);
    //     textAlign(CENTER, CENTER); 
    //     text(theBestScore, 130, 380, 730); // 305, 430, 410
    //     text("Press enter to play again!", 500, 600);
    //     pop();
    //     noLoop();
    //   }
    //   //   local high score storage
    //   if (
    //     !localStorage.getItem("bestScore") ||
    //     localStorage.getItem("bestScore") < score
    //   ) {
    //     localStorage.setItem("bestScore", score);
    //   }
    //   console.log(localStorage.getItem("bestScore"));
    // });
  }
}
