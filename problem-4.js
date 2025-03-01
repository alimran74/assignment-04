
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



