import { app } from "../main.js";

export class GridManager {

  gridContainer = new PIXI.Container;
  cellMargin = 10
  cellSize = 50
  cols = 6
  rows = 6

  onResize(width, height) {
    this.gridContainer.x =
      width / 2 - (this.cols * this.cellSize + (this.cols * (this.cellMargin - 1))) / 2;
    this.gridContainer.y =
      height / 2 - (this.rows * this.cellSize + (this.cols * (this.cellMargin - 1))) / 2;

  }

  createGrid() {
    app.stage.addChild(this.gridContainer)
    const startX = this.gridContainer.x;
    const startY = this.gridContainer.y;
    this.onResize(window.innerWidth, window.innerHeight)

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {

        const cell = new PIXI.Graphics
        cell.clear();
        cell.rect(
          startX + x * (this.cellSize + this.cellMargin),
          startY + y * (this.cellSize + this.cellMargin),
          this.cellSize, this.cellSize);
        cell.fill("#ffffffff");
        cell.stroke({ width: 1.5, color: "#000000ff" });

        this.gridContainer.addChild(cell);
      }
    }
  }


}

