//randomGame function
function randomGame(){
    let counter = 1;
    let timer = setInterval(function(){
        let randomNum = Math.random();
        console.log(randomNum);
        if (randomNum > .75){
            clearInterval(timer);
            console.log (`It took ${counter} tries`);
        }
        counter++;
    }, 1000)
    
    
}

