$("#btn").on("click", function(){
    let p = document.getElementById("principle").value;
    let r = document.getElementById("rate").value;
    let n = document.getElementById("years").value;
     let simple = (p * r * n) / 100;
     
     document.getElementById("p").innerHTML = p;
     document.getElementById("r").innerHTML = r;
     document.getElementById("n").innerHTML = n;
     document.getElementById("si").innerHTML = simple;
})
