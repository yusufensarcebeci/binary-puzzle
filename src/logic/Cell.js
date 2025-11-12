export class Cell {
    constructor(x, y, size) {
        this.g = new PIXI.Graphics();
        this.x = x;
        this.y = y;
        this.size = size;

        this.createCell()
    }

    createCell(){
        try{
            this.draw()
            this.enableInteraction() 
        }catch(e){
            console.log(e);
        }
    }

    draw() {

        this.g.clear();
        this.g.rect(this.x, this.y, this.size, this.size);
        this.g.fill("#434ab8");
        this.g.stroke({ width: 1, color: "#ffffff" });
    }

    setColor(color) {
        this.g.fill(color);
    }

    enableInteraction() {
        this.g.eventMode = "static"; 
        this.g.cursor = "pointer";   

        this.g.on("pointerdown", (c) => {
            this.onClick();
            console.log(c);
        });
    }
    
    onClick() {
        console.log(`Cell clicked at (${this.x}, ${this.y})`);
        this.setColor("#ff0000");
    }
}
