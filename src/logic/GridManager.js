import { Cell } from "./Cell.js";

export class GridManager {
  constructor(rows, cols, cellSize, cellMargin) {
    this.rows = rows;
    this.cols = cols;
    this.cellSize = cellSize;
    this.cellMargin = cellMargin;
    
    
    this.gridContainer = new PIXI.Container();
    const stage = app
    stage.addChild(this.gridContainer);

    console.log(stage);
  }

  onResize(width, height) {
    this.gridContainer.x = width / 2 - (this.cols * this.cellSize + (this.cols * (this.cellMargin-1))) / 2;
    this.gridContainer.y = height / 2 - (this.rows * this.cellSize + (this.cols * (this.cellMargin-1)))  / 2;

  }

  createGrid() {

    const startX = this.gridContainer.x;
    const startY = this.gridContainer.y;

    for (let y = 0; y < this.rows; y++) {
      for (let x = 0; x < this.cols; x++) {

        
        const cell = new Cell(startX + x *(this.cellSize + this.cellMargin)  ,startY + y *(this.cellSize + this.cellMargin),this.cellSize);
        this.gridContainer.addChild(cell.graphic);
      }
    }
    
    
    this.onResize(this.app.renderer.width, this.app.renderer.height);
  }
}

// export class Cell {
//     constructor(x, y, size) {
//         this.graphic = new PIXI.Graphics();
//         this.x = x;
//         this.y = y;
//         this.size = size;

//         this.createCell()
//     }

//     defaultColor = "#ffffffff";
//     downColor = "#707070ff";
//     overColor = "#b6b6b6ff";

//     createCell() {
//         try {
//             this.draw()
//             this.enableInteraction()
//         } catch (e) {
//             console.log(e);
//         }
//     }

//     draw() {

//         this.graphic.clear();
//         this.graphic.rect(this.x, this.y, this.size, this.size);
//         this.graphic.fill("#ffffffff");
//         this.graphic.stroke({ width: 1.5, color: "#000000ff" });
//     }

//     setColor(color) {
//         this.graphic.clear();
//         this.graphic.rect(this.x, this.y, this.size, this.size);
//         this.graphic.fill(color);
//         this.graphic.stroke({ width: 1.5, color: "#000000ff" });
//     }

//     enableInteraction() {
//         this.graphic.eventMode = "static";
//         this.graphic.cursor = "pointer";

//         this.graphic
//             .on("pointerdown", this.onPointerDown)
//             .on('pointerup', this.onPointerUp)
//             .on('pointerupoutside', this.onPointerUp)
//             .on('pointerover', this.onPointerOver)
//             .on('pointerout', this.onPointerOut);
//     }

//     onPointerDown = (e) => {
//         this.isPointerdown = true;
//         this.setColor(this.downColor);
//     }

//     onPointerUp = () => {
//         this.isPointerdown = false;
//         if (!this.isPointerOver) {
//             this.setColor(this.defaultColor);
//         } else {
//             this.setColor(this.overColor);
//         }
//     }

//     onPointerOver = () => {
//         this.isPointerOver = true;
//         if (!this.isPointerdown) {
//             this.setColor(this.overColor);
//         }
//     }

//     onPointerOut = () => {
//         this.isPointerOver = false;
//         if (!this.isPointerdown) {
//         this.setColor(this.defaultColor);
//         }
//     }
// }
