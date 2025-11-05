
export  class Timer {

    constructor() {
        this.time = 0;
        this.deltaTime = 0;
        this.previousTime = 0;
        this.isRunning = false;
    }

    start() {
        if (!this.isRunning) {
            this.isRunning = true;
            this._update();
        }
    }

    pause() {
        this.isRunning = false;
    }

    reset() {
        this.time = 0;
        this.isRunning = false;
    }

    getTime() {
        return this.time;
    }

    setTime() {

    }

    _update() {
        if (!this.isRunning) return;
        const currentTime =Date.now();

        this.deltaTime = (currentTime - this.previousTime)
        this.time += this.deltaTime
        
        this.previousTime = currentTime;
        requestAnimationFrame(this._update.bind(this))
        // console.log(this.time , 'time');
    }

}
