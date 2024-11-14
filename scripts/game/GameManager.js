import { Timer } from "./Timer.js";

export class GameManager {
    constructor() {
        this.timer = new Timer();
    }

    initializeGame() { 
        console.log("testing start");
        this.timer.start()
       
    }

    startGame() {
    }

    pauseGame() {

    }

    resetGame() {

    }
}