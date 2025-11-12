import { AppContext } from "./src/core/AppContext.js";
import { ResponsivityManager } from "./src/utils/ResponsivityManager.js";

export  class App {
    constructor(width, height) {
        this.width = width;
        this.height = height;
        this.app = null;
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
            console.log("%c[App]", "color: #609e22ff", "PixiJS App  initialized successfully");

        } catch (e) {
            console.error("PixiJS App initialization failed:", error);
        }

    }

    resizeCanvas(width, height) {
        if (!this.app) return;
        this.app.renderer.resize(width, height);
        ResponsivityManager.resize(width, height);
        console.log(`[App] Canvas resized to: ${width}x${height}`);
    }

}

