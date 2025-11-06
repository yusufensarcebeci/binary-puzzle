import { App } from './App.js';
import { GameManager } from './src/core/GameManager.js';


document.addEventListener('DOMContentLoaded', async () => {

    let CANVAS_WIDTH = window.innerWidth;
    let CANVAS_HEIGHT = window.innerHeight;

    const app = new App(CANVAS_WIDTH, CANVAS_HEIGHT);
    const gameManager = new GameManager;

    app.createApp().then(()=>{
        gameManager.initializeGame();
    });

    window.addEventListener('resize', () => {
        CANVAS_WIDTH = window.innerWidth;
        CANVAS_HEIGHT = window.innerHeight;   
        app.resizeCanvas(CANVAS_WIDTH, CANVAS_HEIGHT)
    });

    console.log("%c[Main]", "color: cyan", "Game initialized and ready");
});
