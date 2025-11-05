import { App } from './App.js';

document.addEventListener('DOMContentLoaded', () => {

    let GAME_WIDTH = window.innerWidth;
    let GAME_HEIGHT = window.innerHeight;
    const app = new App(GAME_WIDTH, GAME_HEIGHT);
    app.createApp();
    // app.initializeGame();
    window.addEventListener('resize', () => {
        GAME_WIDTH = window.innerWidth;
        GAME_HEIGHT = window.innerHeight;   
        app.resizeCanvas(GAME_WIDTH, GAME_HEIGHT)
    });
        console.log("gdsgasd")

});
