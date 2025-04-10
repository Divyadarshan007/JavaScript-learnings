let input = document.getElementById("input")
let submitBtn = document.getElementById("submitBtn")
let img =  document.getElementById("img")

submitBtn.addEventListener("click", ()=>{
    console.log("hello");
    
    let value = input.value;
    console.log(value)
    
    const URL = `https://pokeapi.co/api/v2/pokemon1${value}`
    
    fetch(URL).then((res)=>{
        return res.json()
    }).then((res)=>{
        console.log(res)
        let pokeImg = res.sprites.front_default;
        img.src = pokeImg;
    })


})