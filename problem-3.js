
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
