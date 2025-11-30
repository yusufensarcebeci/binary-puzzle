

export class GridManager {

  gridContainer = new PIXI.Container();
  cellMargin = 10
  cellSize = 50

  createGrid() {
    const startX = this.gridContainer.x;
    const startY = this.gridContainer.y;

    for (let y = 0; y < 6; y++) {
      for (let x = 0; x < 6; x++) {

        const cell =
          new Cell(startX + x * (this.cellSize + this.cellMargin),
            startY + y * (this.cellSize + this.cellMargin),
            this.cellSize);
        this.gridContainer.addChild(cell.graphic);
      }
    }
  }


}

  // onResize(width, height) {
  //   this.gridContainer.x = width / 2 - (this.cols * this.cellSize + (this.cols * (this.cellMargin-1))) / 2;
  //   this.gridContainer.y = height / 2 - (this.rows * this.cellSize + (this.cols * (this.cellMargin-1)))  / 2;

  // }

  // createGrid() {

  //   const startX = this.gridContainer.x;
  //   const startY = this.gridContainer.y;

  //   for (let y = 0; y < this.rows; y++) {
  //     for (let x = 0; x < this.cols; x++) {

        
  //       const cell = new Cell(startX + x *(this.cellSize + this.cellMargin)  ,startY + y *(this.cellSize + this.cellMargin),this.cellSize);
  //       this.gridContainer.addChild(cell.graphic);
  //     }
  //   }
    
    
  //   this.onResize(this.app.renderer.width, this.app.renderer.height);
  // }

//  