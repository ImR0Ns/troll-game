//global 
var money = 0;
var clicks = 1;


//main
$(document).ready(()=>{
    $('.click').on('click', ()=>{  
        money += clicks
        updateMoney()
    });

    $('.10clicks').on('click', ()=>{  
        if(money >= 100) {
            clicks += 10;
            money -= 100;
        } else {
            alert('No points!');
        }
    });
    $('.clicks2').on('click', ()=>{  
        if(money >= 5000) {
            clicks += 100;
            money -= 5000;
        } else {
            alert('No points!');
        }
    });
    $('.clicks3').on('click', ()=>{  
        if(money >= 50000) {
            clicks += 1000;
            money -= 50000;
        } else {
            alert('No points!');
        }
    });
    $('.clicks4').on('click', ()=>{  
        if(money >= 10000000) {
            alert('You won!, timer: ' +totalSeconds);
        } else {
            alert('No points!');
        }
    });

});



//functions
function updateMoney() {
    $('.points').text('Points: ' + money)
}

//timer
setInterval(function(){ 
    money+= 10;
    updateMoney()
}, 1000 * 10);



































































































































































































































































/* Don't look, look for the easter through work */

















/* Don't look, look for the easter through work */















/* Don't look, look for the easter through work */


















/* Don't look, look for the easter through work */













/* Don't look, look for the easter through work */













/* Don't look, look for the easter through work */

















/* Don't look, look for the easter through work */
/* Don't look, look for the easter through work */
/* Don't look, look for the easter through work */
/* Don't look, look for the easter through work */
/* Don't look, look for the easter through work */

/* Don't look, look for the easter through work */



var eggc = 0;
$(document).ready(()=>{
    $('.egg').on('click', ()=>{  
        eggc += 1
        if(eggc > 10){
            alert('EGG FOUND!');
            clicks += 69
        }
    });
})