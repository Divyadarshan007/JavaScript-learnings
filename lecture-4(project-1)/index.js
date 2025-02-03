let ele1 = document.getElementById("value-1")
let ele2 = document.getElementById("value-2")
let ansEle = document.getElementById("ans")

function addition(ele1,ele2, ansEle){
    ansEle.innerHTML = Number(ele1.value) + Number(ele2.value);
}

function subtraction(ele1,ele2, ansEle){
    ansEle.innerHTML = Number(ele1.value) - Number(ele2.value);
}

function multiplication(ele1,ele2, ansEle){
    ansEle.innerHTML = Number(ele1.value) * Number(ele2.value);
}

function division(ele1,ele2, ansEle){
    ansEle.innerHTML = Number(ele1.value) / Number(ele2.value);
}

$("#plus").on("click", function(){
    addition(ele1, ele2, ansEle);
})
$("#minus").on("click", function(){
    subtraction(ele1, ele2, ansEle);
})
$("#mul").on("click", function(){
    multiplication(ele1, ele2, ansEle);
})
$("#div").on("click", function(){
    division(ele1, ele2, ansEle);
})
$("#clear").on("click", function(){
    ele1.value = ""
    ele2.value = ""
    ansEle.innerHTML = ""
})

