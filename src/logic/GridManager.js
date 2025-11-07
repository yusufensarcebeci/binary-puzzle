import { AppContext } from "../core/AppContext.js";
import { Cell } from "./Cell.js";

export class GridManager {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.gridContainer = new PIXI.Container();

    const stage = AppContext.get("stage");
    stage.addChild(this.gridContainer);
    // console.log(this.gridContainer);
    //grid container ı center lamak istiyorum ekrana
  }

  createGrid() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const cell = new Cell(x * this.cellSize, y * this.cellSize, this.cellSize);
        this.gridContainer.addChild(cell.g);
      }
    }
    this.centerGrid();
  }

  centerGrid() {
    const app = AppContext.get("app");
    const totalWidth = this.cols * this.cellSize;
    const totalHeight = this.rows * this.cellSize;

    this.gridContainer.x = (app.renderer.width - totalWidth) / 2;
    this.gridContainer.y = (app.renderer.height - totalHeight) / 2;
  }
}
