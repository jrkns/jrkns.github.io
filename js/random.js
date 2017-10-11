$(window).load.$(function() {
var output, started, duration, desired;

// Constants
duration = 5000;
desired = '50';

// Initial setup
output = $('#output');
started = new Date().getTime();

// Animate!
animationTimer = setInterval(function() {
    // If the value is what we want, stop animating
    // or if the duration has been exceeded, stop animating
    if (output.text().trim() === desired || new Date().getTime() - started > duration) {
        clearInterval(animationTimer);
    } else {
        console.log('animating');
        // Generate a random string to use for the next animation step
        output.text(
            ''+
            Math.floor(Math.random() * 10)+
            Math.floor(Math.random() * 10)
        );
    }
}, 100);
});