$(document).ready(function(){
    $('#mobile_btn').on('click', function(){
        $('#mobile_menu').toggleClass('active');
        $('#mobile_btn').find('i').toggleClass('fa-x');
    });
});

// const imgs = document.getElementById("imgc");
// const img = document.querySelectorAll("#imgc img")

// let idx = 0;

// function carrossel(){
//     idx++;
//     if(idx > img.length - 1){
//         idx=0;
//     }

//     imgs.style.transform = `translateX(${-idx * 500}px)`;
//     setInterval(carrossel, 1800)
// }

let count =0;
function x(){
    count++;
    document.querySelector('.carrossel').style.backgroundPosition=count+"px";

}
setInterval(x,1500)