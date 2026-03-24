"use strict";
import { TSprite } from "libSprite";

// alt er manualelt og skrives ned

export class TBackground{
    #spriteBackground; // Private field background
    #spriteGround;


    constructor(aSpcvs, aSPI){ //aSPI = SpriteInfoList
        this.#spriteBackground = new TSprite(aSpcvs, aSPI.background, 0, 0); // må ha (canvas, sprite infrmasjonen, posisjon)
        const groundPosY = aSPI.background.height - aSPI.ground.height; // regnestykke kan direkte skrives i posisjonen Y istedet for variabel.
        this.#spriteGround = new TSprite(aSpcvs, aSPI.ground, 0, groundPosY);
    }

    drawBackground(){ // rekkefølgen har mye å si, fordi den første som tegnes er bakerst.
        this.#spriteBackground.draw();
    }

    drawGround(){ // tegner bare bakken
        this.#spriteGround.draw();
    }

    animate(){ // flytter bakken til venstre
        const x = this.#spriteGround.x + (this.#spriteGround.width / 2); // hjelpe variabel for å se lettere
        if(x < 0){
            this.#spriteGround.x = 0; // hvis bakken går utenfor venstre side, sett den tilbake til 0
        } else{
            this.#spriteGround.x--;
        }
    }
}    