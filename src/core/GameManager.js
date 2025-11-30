import { GridManager } from "./GridManager.js";

export default class GameManager {
    initializeGame(){
        const gridManager = new GridManager()
        gridManager.createGrid()
    }
}
