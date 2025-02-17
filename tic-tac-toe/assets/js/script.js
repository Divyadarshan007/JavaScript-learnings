let count = 0;
let pStatus = document.getElementById("status")
let pointX = parseInt(document.getElementById("pointx").innerHTML)
let pointO = parseInt(document.getElementById("pointo").innerHTML)
function checkWin(val) {
    let flag = true;

    for (let i = 1; i <= 3; i++) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })
        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }

    flag = true;
    for (let i = 4; i <= 6; i++) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }

    flag = true;
    for (let i = 7; i <= 9; i++) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }
    flag = true;
    for (let i = 1; i <= 7; i += 3) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }
    flag = true;
    for (let i = 2; i <= 8; i += 3) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }
    flag = true;
    for (let i = 3; i <= 9; i += 3) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }
    flag = true;
    for (let i = 1; i <= 9; i += 4) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }
    flag = true;
    for (let i = 3; i <= 7; i += 2) {
        let symbol = document.getElementById(`t${i}`).innerHTML

        if (symbol != val) {
            flag = false;
            break;
        }
    }

    if (flag) {
        Swal.fire({
            icon: "success",
            title: `${val} won`,
            
        })

        if (val == "X") {
            document.getElementById("xWins").innerHTML = `X Wins: ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = `O Wins: ${pointO += 1}`

        }
        return true;
    }

    if (count == 9) {
        Swal.fire({
            icon: "warning",
            title: "Draw !",
            
        }).then(() => {
           clear();
        });
    }
}

function clear(){
    for (let i = 1; i <= 9; i++) {
        document.getElementById(`t${i}`).innerHTML = "";
        count = 0;
    }

     pStatus.innerHTML =  `Player X's turn`
}

$(".cell").on("click", function () {
    let tile = $(this)[0]

    if (tile.innerHTML == "") {
        if (count % 2 == 0) {
            tile.innerHTML = "X";
            pStatus.innerHTML =  `Player O's turn`
        } else {
            tile.innerHTML = "O"
            pStatus.innerHTML =  `Player X's turn`
        }
        count++

        if (count >= 5) {
            let win = checkWin(tile.innerHTML)
            if (win) {
               clear()
            }
        }
    } else {
        Swal.fire({
            icon: "error",
            title: "Cant Overwrite !",
            
        });
    }
})

$("#reset").on("click", function(){
    clear();
})