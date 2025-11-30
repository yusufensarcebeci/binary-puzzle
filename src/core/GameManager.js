import { GridManager } from '../logic/GridManager.js';

export class GameManager {

    initializeGame() {
        this.gridManager = new GridManager(6, 6, 60,1).createGrid()

        console.log("%c[GameManager]", "color:red", "Game initialized");

    }

    update(){
        this.gridManager.onResize();
    };
}