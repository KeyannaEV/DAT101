"use strict";
import { TSprite, TSpriteButton, TSpriteNumber} from "libSprite";
import { startGame, hero, obstacles, baits} from "./FlappyBird.mjs";
import { TSoundFile } from "libSound";

const fnCountDown = "./Media/countDown.mp3";
const fnRunning = "./Media/running.mp3";

export class TMenu{
  #spTitle;
  #spPlayBtn;
  #spCountDown;
  #sfCountDown;
  #sfRunning;
  #spGameScore;
  #spGameStatus;
  #isMuted;
  #spGetReady;
  #spGameOver;
  #spMedal;
  #spFinalScore;
  #spHighScore;
  #highscore;
  #spGameOverText;

  constructor(aSpcvs, aSPI, aGameStatus){
    this.#spGameStatus = aGameStatus;
    this.#isMuted = false;
    this.#spTitle = new TSprite(aSpcvs, aSPI.flappyBird, 200, 100);

    this.#spPlayBtn = new TSpriteButton(aSpcvs, aSPI.buttonPlay, 236, 320);
    this.#spPlayBtn.addEventListener("click", this.spPlayBtnClick.bind(this));

    this.#spCountDown = new TSpriteNumber(aSpcvs, aSPI.numberBig, 280, 190);
    this.#spCountDown.visible = false;
    this.#sfCountDown = null;

    this.#sfRunning = null;

    this.#spGameScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 10, 10);
    this.#spGameScore.alpha = 0.5;

    this.#spGetReady = new TSprite(aSpcvs, aSPI.infoText, 188, 140);
    this.#spGetReady.index = 0;      
    this.#spGetReady.visible = false;
    
    this.#spGameOver = new TSprite(aSpcvs, aSPI.gameOver, 175, 150);
    this.#spGameOver.visible = false; 

    this.#spMedal = new TSprite(aSpcvs, aSPI.medal, 200, 193);
    this.#spMedal.visible = false; 

    this.#spFinalScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 185);
    this.#spFinalScore.visible = false; 

    this.#spHighScore = new TSpriteNumber(aSpcvs, aSPI.numberSmall, 360, 225);
    this.#spHighScore.visible = false; 

    this.#highscore = 0;

    this.#spGameOverText = new TSprite(aSpcvs, aSPI.infoText, 188, 80);
    this.#spGameOverText.index = 1;
    this.#spGameOverText.visible = false;
    
  }

showGameOver(){
  if (this.#sfRunning) this.#sfRunning.stop();
  this.#spTitle.x = -500;
  this.#spGetReady.visible = false;
  this.#spGameOver.visible = true;
  this.#spGameOverText.visible = true;
  this.#spPlayBtn.hidden = false;
  this.#spMedal.visible = true;

  const currentScore = this.#spGameScore.value;
  if(currentScore > this.#highscore){
    this.#highscore = currentScore;
  }
  this.#spFinalScore.value = currentScore;
  this.#spFinalScore.visible = true;
  this.#spHighScore.value = this.#highscore;
  this.#spHighScore.visible = true;

  if(currentScore >= 10){
    this.#spMedal.visible = true;
    this.#spMedal.index = 2; // Gold
  } else if(currentScore >= 5){
    this.#spMedal.visible = true;
    this.#spMedal.index = 4; // Silver
  } else if(currentScore >= 3){
    this.#spMedal.visible = true;
    this.#spMedal.index = 3; // Bronze
  } else if(currentScore >= 1){
    this.#spMedal.visible = true;
    this.#spMedal.index = 1; 
  } else {
    this.#spMedal.visible = false;
  }
}

  setSoundMute(aIsMuted) {
    this.#isMuted = aIsMuted;

    if (aIsMuted) {
      if (this.#sfRunning) this.#sfRunning.pause();
      if (this.#sfCountDown) this.#sfCountDown.pause();
    } else {
      if (this.#sfCountDown && this.#spGameStatus.state === this.#spGameStatus.countDown) {
        this.#sfCountDown.play();
      }
      if (this.#sfRunning && this.#spGameStatus.state === this.#spGameStatus.gaming) {
        this.#sfRunning.play();
      }
    }
    console.log("Sound muted:", aIsMuted);
  }

  incGameScore(aScore){
    this.#spGameScore.value += aScore;
  }

  stopSound(){
    this.#sfRunning.stop();
  }

  draw(){
    this.#spTitle.draw();
    this.#spPlayBtn.draw();
    this.#spGetReady.draw();
    this.#spCountDown.draw();
    this.#spGameScore.draw();
    this.#spGameOver.draw();
    this.#spGameOverText.draw();
    this.#spMedal.draw();
    this.#spFinalScore.draw();
    this.#spHighScore.draw();
  }

  countDown(){
    this.#spCountDown.value--;
    if(this.#spCountDown.value > 0){
      setTimeout(this.countDown.bind(this), 1000);  
    }else{
      this.#spCountDown.visible = false;
      this.#spGetReady.visible = false;
      this.#sfRunning = new TSoundFile(fnRunning);
      if (!this.#isMuted) this.#sfRunning.play();
      startGame();
    }
    
  }

  spPlayBtnClick(){
    console.log("Click!");
    hero.restart(); // resets hero position
    obstacles.length = 0; // resets obstacles
    baits.length = 0; // resets baits
    this.#spGameScore.value = 0; // resets game score
    this.#spGameScore.visible = true; // shows game score

    this.#spTitle.x = 200; // resets title position
    this.#spGameOver.visible = false; // hides game over
    this.#spGameOverText.visible = false; // hides game over text
    this.#spMedal.visible = false; // hides medal
    this.#spFinalScore.visible = false; // hides final score
    this.#spHighScore.visible = false; // hides high score

    this.#spGameStatus.state = this.#spGameStatus.countDown;
    this.#spPlayBtn.hidden = true;
    this.#spTitle.hidden = true;
    this.#spGetReady.visible = true;
    this.#spCountDown.visible = true;
    this.#spCountDown.value = 3;
    this.#sfCountDown = new TSoundFile(fnCountDown);
    if (!this.#isMuted) this.#sfCountDown.play();
    setTimeout(this.countDown.bind(this), 1000);
  }

}