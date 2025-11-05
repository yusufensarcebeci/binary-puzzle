import { App } from './App.js';
import { GameManager } from './src/core/GameManager.js';


document.addEventListener('DOMContentLoaded', async () => {

    let GAME_WIDTH = window.innerWidth;
    let GAME_HEIGHT = window.innerHeight;

    const app = new App(GAME_WIDTH, GAME_HEIGHT);
    const gameManager = new GameManager;

    app.createApp().then(()=>{
        gameManager.initializeGame();
    });

    window.addEventListener('resize', () => {
        GAME_WIDTH = window.innerWidth;
        GAME_HEIGHT = window.innerHeight;   
        app.resizeCanvas(GAME_WIDTH, GAME_HEIGHT)
    });

    console.log("%c[Main]", "color: cyan", "Game initialized and ready");
});
