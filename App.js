import { AppContext } from "./src/core/AppContext.js";

export  class App {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.app = null;
        this.onResize = null;
    }

    async init() {

        try {
            this.app = new PIXI.Application();
            await this.app.init({
                width: this.width, height: this.height,
                backgroundColor: "#f8a932ff",
                antialias: true,
                resolution: window.devicePixelRatio || 1
            })
            document.body.appendChild(this.app.canvas);

            AppContext.set("app", this.app);
            AppContext.set("stage", this.app.stage);
            AppContext.set("ticker", this.app.ticker);
            console.log(AppContext);
            console.log("%c[App]", "color: #7fff00", "PixiJS App  initialized successfully");

        } catch (e) {
            console.error("PixiJS App initialization failed:", error);
        }

    }

    resizeCanvas(width, height) {
        if (!this.app) return;
        this.app.renderer.resize(width, height);
        if (typeof this.onResize === "function") {
            this.onResize(width, height);
        }

        console.log(`[App] Canvas resized to: ${width}x${height}`);
    }

}

