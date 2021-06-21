// const clockFace = document.querySelector('#timer-1')
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');

class Timer {
    constructor({onTick}){
        this.timerId = null;
        this.onTick = onTick;
    }

    timerId = setInterval(() => {
        const currentTime = Date.now();
        const targetDate = new Date('Jan 01, 2022').getTime();
        const deltatime = targetDate - currentTime;
        const time = this.timerComponents(deltatime)
        
        updateClockFace(time)
    }, 1000);

    timerComponents(time){
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));
        
        return {days, hours, mins, secs}
        }
        
    pad(value) {
        return String(value).padStart(2, '0');
    }
}

const timer = new Timer({
    onTick: updateClockFace,
})


function updateClockFace({days, hours, mins, secs}){
    daysRef.textContent = `${days}`;
    hoursRef.textContent =  `${hours}`;
    minsRef.textContent =  `${mins}`
    secsRef.textContent = `${secs}`
}