// const clockFace = document.querySelector('#timer-1')
const daysRef = document.querySelector('[data-value="days"]');
const hoursRef = document.querySelector('[data-value="hours"]');
const minsRef = document.querySelector('[data-value="mins"]');
const secsRef = document.querySelector('[data-value="secs"]');
const titleRef = document.querySelector('.main-title')

class Timer {
    constructor({onTick, onStop}){
        this.timerId = null;
        this.onTick = onTick;
        this.onStop = onStop;
    }

    timerId = setInterval(() => {
        const currentTime = Date.now();
        const targetDate = new Date('2022, Jan, 01').getTime();
        const deltatime = targetDate - currentTime;
        const time = this.timerComponents(deltatime)
        if(currentTime < targetDate){
            updateClockFace(time)
        }else{
            clearInterval(this.timerId)
            clockFaceAfterStop()
            titleRef.textContent = 'С НОВЫМ ГОДОМ!'
        }        
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
    onStop: clockFaceAfterStop,
})


function updateClockFace({days, hours, mins, secs}){
    daysRef.textContent = `${days}`;
    hoursRef.textContent =  `${hours}`;
    minsRef.textContent =  `${mins}`
    secsRef.textContent = `${secs}`
}
function clockFaceAfterStop(){
    daysRef.textContent = '00';
    hoursRef.textContent =  '00';
    minsRef.textContent =  '00'
    secsRef.textContent = '00'
}