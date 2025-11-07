import { AppContext } from "../core/AppContext.js";


export  class GridManager {
  constructor() {
    this.container = new PIXI.Container();
    const stage = AppContext.get("stage");
    stage.addChild(this.container)
  }

  createGrid() {
    const graphics = new PIXI.Graphics();
    graphics.rect(50, 50, 100, 100);
    graphics.fill(0xde3249);

    this.container.addChild(graphics);
  }
}

