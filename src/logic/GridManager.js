import { AppContext } from "../core/AppContext.js";
import { ResponsivityManager } from "../utils/ResponsivityManager.js";
import { Cell } from "./Cell.js";

export class GridManager {
  constructor(rows, cols, cellSize) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    
    this.app = AppContext.get('app')
    
    this.gridContainer = new PIXI.Container();
    const stage = AppContext.get("stage");
    stage.addChild(this.gridContainer);

    ResponsivityManager.register(this)
    console.log(this);
  }

  onResize(width, height) {
    this.gridContainer.x = width / 2 - (this.cols * this.cellSize) / 2;
    this.gridContainer.y = height / 2 - (this.rows * this.cellSize) / 2;

    const scaleX = this.app.renderer.width;
    const scaleY = this.app.renderer.height;
    const scale = Math.min(Math.max(scaleX, scaleY), 1); // 0.5 altına düşmesin
    this.gridContainer.scale.set(scale);

  }

  createGrid() {
    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {
        const cell = new Cell(x * this.cellSize, y * this.cellSize, this.cellSize);
        this.gridContainer.addChild(cell.g);
      }
    }
    
    this.onResize(this.app.renderer.width, this.app.renderer.height);
  }
}
