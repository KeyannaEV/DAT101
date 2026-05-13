"use strict";
/* Use this file to create the menu for the snake game. */
// Used Claude.ai and Copilot Autofill throughout this menu making process as assistance and building the menu structure. 
// also took inspiration for structure from earlier task such as "FlappyBird" for inspiration (constructor, draw, TSpriteNumber, TSpriteButton).

import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, EGameStatus, SheetData, newGame } from "./game.mjs";

export class TMenu{
   #spPlayBtn;
   #spScore;
   #spResumeBtn;
   #spGameOver;
   #spHome;
   #spRetry;
   #spFinalScore;

   constructor(aSpcvs){
       this.#spPlayBtn = new TSpriteButton(aSpcvs, SheetData.Play, (24 * 38 - SheetData.Play.width) / 2, (18 * 38 - SheetData.Play.height) / 2);
       this.#spPlayBtn.animationSpeed = 16; // Set animation speed for the play button. Learned this from FlappyBird task(hero.js and bait.js)
       this.#spPlayBtn.addEventListener("click", this.onPlayClick.bind(this)); // Bind the click event to the onPlayClick method

       this.#spScore = new TSpriteNumber(aSpcvs, SheetData.Number, 20, 10);
       this.#spScore.digits = 0;
       this.#spScore.visible = false;

       this.#spResumeBtn = new TSpriteButton(aSpcvs, SheetData.Resume, (24 * 38 - SheetData.Resume.width) / 2, (18 * 38 - SheetData.Resume.height) / 2);
       this.#spResumeBtn.animationSpeed = 16;
       this.#spResumeBtn.addEventListener("click", this.#onResumeClick.bind(this));
       this.#spResumeBtn.visible = false;

       this.#spGameOver = new TSprite(aSpcvs, SheetData.GameOver, (24 * 38 - SheetData.GameOver.width) / 2, (18 * 38 - SheetData.GameOver.height) / 2);
       this.#spGameOver.visible = false;

       this.#spHome = new TSpriteButton(aSpcvs, SheetData.Home, 28 + 65, 20 + 380);
       this.#spHome.addEventListener("click", this.#onHomeClick.bind(this));
       this.#spHome.visible = false;

       this.#spRetry = new TSpriteButton(aSpcvs, SheetData.Retry, 28 + 615, 20 + 380);
       this.#spRetry.addEventListener("click", this.#onRetryClick.bind(this));
       this.#spRetry.visible = false;

       this.#spFinalScore = new TSpriteNumber(aSpcvs, SheetData.Number, 28 + 600, 20 + 235);
       this.#spFinalScore.visible = false; // Stays hidden just like the score

   }

   //* PRIVATE METHODS - USED FOR BUTTONS *//
   #onResumeClick() {
       GameProps.gameStatus = EGameStatus.Playing;
       this.#spResumeBtn.visible = false;
   }

   #onHomeClick() { // If home button is clicked - restarts game, goes back to start menu(idle) and shows only the play button.
       GameProps.gameStatus = EGameStatus.Idle; // Set game status to idle, which is the start menu
       this.#spGameOver.hidden = true;
       this.#spHome.hidden = true;
       this.#spRetry.hidden = true;
       this.#spPlayBtn.hidden = false; // Show play button, so player can start a new game on idle mode.
       this.#spScore.hidden = true; // Hidden is true, so score does not show when game goes back to start menu.
       this.#spFinalScore.visible = false; 
   }

   #onRetryClick() { // If retry button is clicked - restarts the game instantly, no need to click "play button"
       GameProps.gameStatus = EGameStatus.Playing; // Set game status to still playing, even though its game over
       this.#spGameOver.hidden = true;
       this.#spHome.hidden = true;
       this.#spRetry.hidden = true;
       this.#spFinalScore.visible = false;
       // The code under is the reason why the game restarts instantly - it is identical to the code in onPlayClick. AKA clicking retry is the same as clicking play.
       newGame();
       GameProps.gameStatus = EGameStatus.Playing; // Set game status to playing
       this.showGame();

   }


   // Method called when the play button is clicked - starts a new game and shows the game elements (score).
   onPlayClick() {
       newGame();
       GameProps.gameStatus = EGameStatus.Playing;
       this.showGame();
   }

   draw(){ // Draw the menu elements - structure is inspired by FlappyBird task.
    this.#spPlayBtn.draw();
    this.#spScore.draw();
    this.#spResumeBtn.draw();
    this.#spGameOver.draw();
    this.#spHome.draw();
    this.#spRetry.draw();
    this.#spFinalScore.draw();
   }

   showGame(){ // Shows the score and resets it to 0 when the game starts
    this.#spPlayBtn.visible = false;
    this.#spScore.visible = true;
    this.#spScore.value = 0;
   }

   showGameOver() { // Shows the game over screen
       this.#spFinalScore.value = this.#spScore.value; // Saving the current score value right before game over (from CLAUDE.AI)
       this.#spGameOver.hidden = false;
       this.#spHome.hidden = false;
       this.#spRetry.hidden = false;
       this.#spScore.visible = false;
       console.log("Final score:", this.#spFinalScore.value);
       this.#spFinalScore.visible = true; // Shows the value of the final score (The score when the game ended)
   }

   showPause() {
       this.#spResumeBtn.hidden = false;
   }

   // Increments the score by a specified amount - called when the player collects a point (this note was auto filled by Copilot)
   incScore(aScore){
       this.#spScore.value += aScore;
          console.log("Score:", this.#spScore.value);
   }
}