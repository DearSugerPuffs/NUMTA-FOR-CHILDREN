var msg = document.querySelector(".msg")
var number = document.querySelector(".num")
var button = document.querySelector(".start")

button.addEventListener("click",function(){
    for(i=1; i<=10; i++){
        document.write(number.value+"x"+i+"="+number.value*i+"<br>")
    }
    // if(number.value > 18){
    //     msg.innerHTML = "বিয়া কর যাইয়া"
    // }else{
    //     msg.innerHTML = "লাথি খাইসস?"
    // }
})


