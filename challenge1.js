module.exports =  function formatTime(time) {
    time = Number(time);
    let hours = Math.floor(time / 3600);
    let minutes = Math.floor(time % 3600 / 60);
    let seconds = Math.floor(time % 3600 % 60);

    let totalHours = hours > 0 ? hours + (hours == 1 ? " hour and " : " hours, ") : "";
    let totalMinutes = minutes > 0 ? minutes + (minutes == 1 ? " minute and " : " minutes and ") : "";
    let totalSeconds = seconds > 0 ? seconds + (seconds == 1 ? " second" : " seconds") : "";
    return totalHours + totalMinutes + totalSeconds; 
}



