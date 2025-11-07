
export default class GridManager {

  constructor(app){
    this.app = app;
  }

  createGrid() {
    this.container = new PIXI.Container(); 
    
    this.app.app.stage.addChild(this.container);

    const graphics = new PIXI.Graphics();
    graphics.rect(50, 50, 100, 100);
    graphics.fill(0xde3249);

    this.container.addChild(graphics)
  }

}
