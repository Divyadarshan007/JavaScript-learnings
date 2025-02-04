let v1 = document.getElementById("v1")
let v2 = document.getElementById("v2")
let v3 = document.getElementById("v3")
let h1 = document.getElementById("ans")
let random = document.getElementById("random")
function checkMin(){// Aam zindagi
    if(v1.value < v2.value){
        if(v1.value < v3.value){
            h1.innerHTML = `The smallest number is ${v1.value}`
        }else{
            h1.innerHTML = `The smallest number is ${v3.value}`
        }
    }else if(v2.value < v3.value){
        h1.innerHTML = `The smallest number is ${v2.value}`
    }else{
        h1.innerHTML = `The smallest number is ${v3.value}`
    }

   
}
function checkMax(){// Aam zindagi
    if(v1.value > v2.value){
        if(v1.value > v3.value){
            h1.innerHTML = `The largest number is ${v1.value}`
        }else{
            h1.innerHTML = `The largest number is ${v3.value}`
        }
    }else if(v2.value > v3.value){
        h1.innerHTML = `The largest number is ${v2.value}`
    }else{
        h1.innerHTML = `The largest number is ${v3.value}`
    }
}
$("#min").on("click", function(){
    // checkMin();
     h1.innerHTML = `The smallest number is ${Math.min(v1.value, v2.value, v3.value)}`// mentos zindagi
})
$("#max").on("click", function(){
    // checkMax();
     h1.innerHTML = `The largest number is ${Math.max(v1.value, v2.value, v3.value)}`// mentos zindagi
})
$("#random").on("click", function(){
    v1.value = parseInt(Math.random() * 100)
    v2.value = parseInt(Math.random() * 100)
    v3.value = parseInt(Math.random() * 100)
})
$("#clear").on("click", function(){
    v1.value = ""
    v2.value = ""
    v3.value = ""
    h1.innerHTML = ""
})