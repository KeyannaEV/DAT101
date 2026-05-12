"use strict";
/* Use this file to create the menu for the snake game. */

import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { GameProps, EGameStatus, SheetData, newGame } from "./game.mjs";

export class TMenu{
   #spPlayBtn;
   #spScore;
   #spResumeBtn;
   #spGameOver;
   #spHome;
   #spRetry;

   constructor(aSpcvs){
       this.#spPlayBtn = new TSpriteButton(aSpcvs, SheetData.Play, (24 * 38 - SheetData.Play.width) / 2, (18 * 38 - SheetData.Play.height) / 2);
       this.#spPlayBtn.animationSpeed = 16; // Set animation speed for the play button. Learned this from FlappyBird task(hero.js and bait.js)
       this.#spPlayBtn.addEventListener("click", this.onPlayClick.bind(this)); // Bind the click event to the onPlayClick method

       this.#spScore = new TSpriteNumber(aSpcvs, SheetData.Number, 20, 10);
       this.#spScore.digits = 0;
       this.#spScore.visible = false; // Initially hidden, so it can show later in the game

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

   }

   //* PRIVATE METHODS *//
   #onResumeClick() {
       GameProps.gameStatus = EGameStatus.Playing;
       this.#spResumeBtn.visible = false;
   }

   #onHomeClick() { // If home button is clicked - goes back to idle with the play button on.
       GameProps.gameStatus = EGameStatus.Idle;
       this.#spGameOver.hidden = true;
       this.#spHome.hidden = true;
       this.#spRetry.hidden = true;
       this.#spPlayBtn.hidden = false;
       this.#spScore.hidden = true;
       

   }

   #onRetryClick() {
       GameProps.gameStatus = EGameStatus.Playing;
       this.#spGameOver.hidden = true;
       this.#spHome.hidden = true;
       this.#spRetry.hidden = true;
       newGame(); // Start a new game
       GameProps.gameStatus = EGameStatus.Playing; // Set game status to playing
       this.showGame();

   }


   // Method called when the play button is clicked
   onPlayClick() {
       newGame();
       GameProps.gameStatus = EGameStatus.Playing;
       this.showGame();
   }

   draw(){ // Draw the menu elements - inspired by FlappyBird
    this.#spPlayBtn.draw();
    this.#spScore.draw();
    this.#spResumeBtn.draw();
    this.#spGameOver.draw();
    this.#spHome.draw();
    this.#spRetry.draw();
   }

   showGame(){
    this.#spPlayBtn.visible = false;
    this.#spScore.visible = true;
    this.#spScore.value = 0; // Reset score to 0 when the game starts
   }

   showGameOver() {
       this.#spGameOver.hidden = false;
       this.#spHome.hidden = false;
       this.#spRetry.hidden = false;
       this.#spScore.hidden = true;
   }

   showPause() {
       this.#spResumeBtn.hidden = false;
   }

   incScore(aScore){
       this.#spScore.value += aScore;
   }

}
