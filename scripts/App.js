export class App {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.app = null;
    }

    async createApp() {
        this.app = new PIXI.Application();
        await this.app.init({ width: this.width, height: this.height })
        this.createCanvas()
    }

    createCanvas(){
        document.body.appendChild(this.app.canvas);
    }

    resizeCanvas(width, height) {
        this.app.renderer.resize(width , height);
        this.app.stage.scale.set(1);
    }
}

