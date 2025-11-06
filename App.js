
export class App {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.app = null;
        this.onResize = null;
    }

    async createApp() {

        try {
            this.app = new PIXI.Application();
            await this.app.init({
                width: this.width, height: this.height,
                backgroundColor: "#f8a932ff",
                antialias: true,
                resolution: window.devicePixelRatio || 1
            })
            this.createCanvas()
            console.log("%c[App]", "color: #7fff00", "PixiJS initialized successfully");

            // Scene container (ileride sahne yöneticisi için temel)
            // this.scene = new PIXI.Container();
            // this.app.stage.addChild(this.scene);
        } catch (e) {
            console.error("PixiJS initialization failed:", error);
        }

    }

    createCanvas() {
        document.body.appendChild(this.app.canvas);
    }

    resizeCanvas(width, height) {
        if (!this.app) return;
        this.app.renderer.resize(width, height);
        if (typeof this.onResize === "function") {
            this.onResize(width, height);
        }

        console.log(`[App] Canvas resized to: ${width}x${height}`);
        // this.app.stage.scale.set(1);
        // Bu sayede ileride app.onResize = (w,h)=> { sceneManager.resize(w,h) } gibi bağlantılar kurabilirsin.
    }
}