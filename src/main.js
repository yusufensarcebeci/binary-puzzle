import GameManager from "./core/GameManager";

export const app = new PIXI.Application();

async function initializeApp() {

    try {
        await app.init({
            width: window.innerWidth,
            height: window.innerHeight,
            backgroundColor: "#f8a932ff",
            antialias: true,
            resolution: window.devicePixelRatio || 1
        })
        document.body.appendChild(app.canvas);

        console.log("%c[Main]", "color: #609e22ff", "PixiJS App  initialized");

    } catch (e) {
        console.error("PixiJS App initialization failed:", e);
    }
}

function resizeCanvas(width, height) {
    if (!app) return;
    app.renderer.resize(width, height);
    console.log(`[App] Canvas resized to: ${width}x${height}`);
}

document.addEventListener('DOMContentLoaded', async () => {

    initializeApp().then(()=>{
        // GameManager.initializeGame();
    });

    window.addEventListener('resize', () => {
        resizeCanvas(window.innerWidth, window.innerHeight)
    });

    console.log("%c[Main]", "color: cyan", "DOMContent initialized ");
});

