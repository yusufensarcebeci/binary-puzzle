import GridManager from "../logic/GridManager.js"

export class GameManager {
    constructor(app) {
        this.app = app
    }
    initializeGame() {
        console.log(this.app);
        this.gridManager = new GridManager(this.app)
        this.gridManager.createGrid()
        console.log("%c[GameManager]", "color:red", "Game initialized");

    }
}