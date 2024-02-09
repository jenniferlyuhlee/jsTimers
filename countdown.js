//countdown function
function countDown(num){
    let timer = setInterval(function(){
        num--;
        if (num > 0){
            console.log(num);
        }
        else{
            clearInterval(timer);
            console.log('DONE!');
        }
    }, 1000);

} 

