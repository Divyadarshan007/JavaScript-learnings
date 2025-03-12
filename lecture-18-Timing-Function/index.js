let count = 0;

let timer = setInterval(()=>{  // setinterval will continuesouly run the function 
    console.log("hello")
},1000)

setTimeout(()=>{ // it will run only one time 
    clearInterval(timer)
}, 11000)

let inputBox = document.querySelector(".inputBox")
let btn = document.querySelector(".btn")
let h1 = document.querySelector(".text")

btn.addEventListener("click",()=>{
    let seconds = inputBox.value;
   let timer2 =  setInterval(()=>{
    h1.innerHTML = seconds;
    seconds--;
    if(seconds == -1){
        clearInterval(timer2)
    }
})
})