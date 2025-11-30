import { app } from "../main.js";
import { CellType } from "./CellType.js";

export class GridManager {

  gridContainer = new PIXI.Container;
  cellMargin = 0
  cellSize = 50
  cols = 6
  rows = 6

  defaultColor = '#ffffff'
  pressedColor = '#535353'
  hoverColor = '#adadadff'

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

        const cell = new PIXI.Graphics;
        cell.type = CellType.DEFAULT
        cell.clear();
        cell.rect(
          startX + x * (this.cellSize + this.cellMargin),
          startY + y * (this.cellSize + this.cellMargin),
          this.cellSize, this.cellSize);
        cell.fill("#ffffffff");
        cell.stroke({ width: 1.5, color: "#000000ff" });

        cell.eventMode = 'static';
        cell.cursor='pointer' 
        cell
          .on('pointerdown', this.onPointerDown.bind(this))
          .on('pointerup', this.onPointerUp.bind(this))
          .on('pointerupoutside', this.onPointerUp.bind(this))
          .on('pointerover', this.onPointerOver.bind(this))
          .on('pointerout', this.onPointerOut.bind(this));

        this.gridContainer.addChild(cell);
      }
    }
  }

  setCellColor(cell, color) {
    cell.fill(color);
    cell.stroke({ width: 1.5, color: "#000000ff" });
  }

  onPointerDown(e) {
    const cell = e.currentTarget
    if(cell.type==CellType.NON_INTERACTIVE) return
    cell.isPressed = true 
    this.setCellColor(e.currentTarget, this.pressedColor)
  }
  onPointerUp(e) {
    const cell = e.currentTarget
    if(cell.type==CellType.NON_INTERACTIVE) return
    
    cell.isPressed = false 
    if (cell.isHovered) {
      this.setCellColor(e.currentTarget, this.hoverColor)
    } else {
      this.setCellColor(e.currentTarget, this.defaultColor)
    }
  }
  onPointerOver(e) {
    const cell = e.currentTarget
    if(cell.type==CellType.NON_INTERACTIVE) return

    cell.isHovered = true

    if (cell.isPressed) return
    this.setCellColor(e.currentTarget, this.hoverColor)

  }
  onPointerOut(e) {
    const cell = e.currentTarget
    if(cell.type==CellType.NON_INTERACTIVE) return

    cell.isHovered = false
    this.setCellColor(e.currentTarget, this.defaultColor)

  }

}

