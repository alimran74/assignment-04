
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


