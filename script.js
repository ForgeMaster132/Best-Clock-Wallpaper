// Getting new color values function
function newColors(){
// Getting RGB values at random with function call    
let newColor = getRandomInt(1, 255);
return newColor;
}

// Random Int function
function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
}

// Find Difference between colors
function findDiff(oldVal, newVal){
    return ((newVal - oldVal)/60);
}

// Main Clock Function
function updateClock() {
    // Do Once to start clock
    let newRed = newColors();
    let newGreen = newColors();
    let newBlue = newColors();

    let redInterval = findDiff(newRed,newColors());
    let greenInterval = findDiff(newGreen,newColors());
    let blueInterval = findDiff(newBlue, newColors());

    for(let i = 1; i <= 60; i++){        
        // Seconds
        setTimeout(function() {
        var currentTime = new Date();
        // Operating System Clock Hours for 24h clock
        var currentHours = currentTime.getHours();
        // Operating System Clock Minutes
        var currentMinutes = currentTime.getMinutes();
        // Operating System Clock Seconds
        var currentSeconds = currentTime.getSeconds();
        // Adding 0 if Minutes & Seconds is More or Less than 10
        currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
        currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
        // display first 24h clock and after line break 12h version
        var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
        // print clock js in div #clock.
        document.getElementById("clock").innerHTML = currentTimeString;
        
        newRed += redInterval;
        newGreen += greenInterval;
        newBlue += blueInterval;

        document.body.style.backgroundColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')';

    }, 1000 * i);
    }
    
    ////////
    

    // Continues Clock Every Minute
    // Minutes
    setInterval(function() {

       redInterval = findDiff(newRed,newColors());
       greenInterval = findDiff(newGreen,newColors());
       blueInterval = findDiff(newBlue, newColors());

        for(let i = 1; i <= 60; i++){        
            // Seconds
            setTimeout(function() {
            var currentTime = new Date();
            // Operating System Clock Hours for 24h clock
            var currentHours = currentTime.getHours();
            // Operating System Clock Minutes
            var currentMinutes = currentTime.getMinutes();
            // Operating System Clock Seconds
            var currentSeconds = currentTime.getSeconds();
            // Adding 0 if Minutes & Seconds is More or Less than 10
            currentMinutes = (currentMinutes < 10 ? "0" : "") + currentMinutes;
            currentSeconds = (currentSeconds < 10 ? "0" : "") + currentSeconds;
            // display first 24h clock and after line break 12h version
            var currentTimeString = currentHours + ":" + currentMinutes + ":" + currentSeconds;
            // print clock js in div #clock.
            document.getElementById("clock").innerHTML = currentTimeString;
            
            newRed += redInterval;
            newGreen += greenInterval;
            newBlue += blueInterval;

            document.body.style.backgroundColor = 'rgb(' + newRed + ',' + newGreen + ',' + newBlue + ')';
        }, 1000 * i);
    }
}, 60000);
};

updateClock();
