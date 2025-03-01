
function cashOut( money ) {
    
    if (typeof money !== "number" || money < 0) {
        return "Invalid";
    }
    else {
         money
    }
    
    let cashOutCharge = money * 1.75 / 100;
    return cashOutCharge;
    

}




function  validEmail( email ) {
    if(typeof email !== "string"){
        return '"Invalid"';
    }
    if(email.startsWith(".") || email.startsWith("-") || email.startsWith("_") || email.startsWith("+") || email.startsWith("@")){
        return false;
    }
    if(!email.includes("@")){
        return false;
    }
    if(email.startsWith("[]")){
        return '"Invalid"';
    }
    if(email.includes(" ")){
        return false;
    }
    if(!email.endsWith(".com")){
        return false;
    }

    else{
        return true
    }
        
    
}




function  electionResult( votes ) {
    if(!Array.isArray(votes)){
        return "Invalid";
    }
    let mangoVotes = 0;
    let bananaVotes = 0;
    for(const vote of votes){
        if(typeof vote === "string"){
            if (vote === "mango"){
                mangoVotes++;
            }
            else if(vote ==="banana"){
                bananaVotes++;
            }
        }
    }

    if (mangoVotes > bananaVotes){
        return "Mango";
    }
    else if(bananaVotes > mangoVotes){
        return "Banana";
    }
    else {
        return  "Draw";
    }
}



function  isBestFriend( f1 , f2 ) {
    if(typeof f1 !== "object" || typeof f2 !== "object"){
        return "Invalid";
    }
    if(!f1.name || !f1.roll || !f1.bestFriend || !f2.name || !f2.roll || !f2.bestFriend){
        return "Invalid";
    }
    else if(f1.bestFriend === f2.roll && f2.bestFriend === f1.roll){
        return true;
    }
    else{
        return false;
    }
}



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










