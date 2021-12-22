function PerformaceLogger(legend = "") {
    this.legend = legend;
    this.startTime = Date.now();

    this.stop = () => {
        const stopTime = Date.now();
        const performaceMillis = stopTime - this.startTime;
        console.log(`${this.legend}\nTook ${performaceMillis}ms \nTook ${Math.floor(performaceMillis / 1000)}s`);
    }
}

module.exports = PerformaceLogger;