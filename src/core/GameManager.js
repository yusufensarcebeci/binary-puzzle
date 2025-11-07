import { GridManager } from '../logic/GridManager.js';

export  class GameManager {
    
    initializeGame() {
        this.gridManager = new GridManager().createGrid()
        
        console.log("%c[GameManager]", "color:red", "Game initialized");

    }
}