export class Cell {
    constructor(x, y, size) {
        this.x = x;
        this.y = y;
        this.size = size;
        this.g = new PIXI.Graphics();
        this.draw();
    }

    draw() {

        this.g.clear();
        this.g.rect(this.x, this.y, this.size, this.size);
        this.g.fill("#434ab8");
        this.g.stroke({ width: 1, color: "#ffffff" });
    }

    setColor(color) {
        this.graphics.fill(color);
    }
}
