
function  calculateWatchTime( times ) {
    if(!Array.isArray(times)){
        return "Invalid";
    }
    let totalSeconds = 0;
    for (let i = 0; i < times.length; i++){
        if (typeof times[i] !== "number"){
            return "Invalid"
        }
        totalSeconds += times[i];
    }
    var a = Math.floor(totalSeconds/3600); //hours
    var x = totalSeconds%3600;
    var b = Math.floor(x/60); //minutes
    var c = totalSeconds%60; //seconds

    return { hour: a, minute:b, second:c};
}


