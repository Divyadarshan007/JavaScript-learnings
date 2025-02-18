let count = 0;
let pStatus = document.getElementById("status")
let pointX = parseInt(document.getElementById("pointx").innerHTML)
let pointO = parseInt(document.getElementById("pointo").innerHTML)

const toast = window.Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 1300,
    showCloseButton: true,
    animation: true,
    customClass: {
        popup: `color-sucess`,
    },
    target: document.getElementById('toast'),
});
const toast2 = window.Swal.mixin({
    toast: true,
    position: 'top-right',
    showConfirmButton: false,
    timer: 1300,
    showCloseButton: true,
    animation: true,
    customClass: {
        popup: `color-danger`,
    },
    target: document.getElementById('toast'),
});

function winPopup(start, end, count, val) {
    document.getElementById("body").style.pointerEvents = "none";
    for (let i = start; i <= end; i += count) {
        document.getElementById(`t${i}`).style.backgroundColor = "#f9d459";
        document.getElementById(`t${i}`).style.color = "#fff";
    }
    setTimeout(function () {
        toast.fire({
            title: `${val} Player Won....`,
        }).then(() => {
            clear();
            for (let i = start; i <= end; i += count) {
                document.getElementById(`t${i}`).style.backgroundColor = "#f22853"
            }
            document.getElementById("body").style.pointerEvents = "auto";
        })
        
        if (val == "X") {
            document.getElementById("xWins").innerHTML = ` ${pointX += 1}`
        } else {
            document.getElementById("oWins").innerHTML = ` ${pointO += 1}`
        }
    }, 200)
}

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
        winPopup(1, 3, 1, val);
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
        winPopup(4, 6, 1, val);
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
        winPopup(7, 9, 1, val);
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
        winPopup(1, 7, 3, val);
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
        winPopup(2, 8, 3, val);
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
        winPopup(3, 9, 3, val);
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
        winPopup(1, 9, 4, val);
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
        winPopup(3, 7, 2, val);
        return true;
    }

    if (count == 9) {
        setTimeout(function () {
            Swal.fire({
                icon: "warning",
                title: "Draw !",

            }).then(() => {
                clear();
            });
        }, 200)
    }
}

function clear() {
    setTimeout(function () {
        for (let i = 1; i <= 9; i++) {
            document.getElementById(`t${i}`).innerHTML = "";
            count = 0;
        }

        pStatus.innerHTML = `Player X's turn`
    }, 200)
}

$(".cell").on("click", function () {
    let tile = $(this)[0]

    if (tile.innerHTML == "") {
        if (count % 2 == 0) {
            tile.innerHTML = "X";
            tile.style.color = "#f9d459";
            pStatus.innerHTML = `Player O's turn`
        } else {
            tile.innerHTML = "O"
            tile.style.color = "#fff";
            pStatus.innerHTML = `Player X's turn`
        }
        count++

        if (count >= 5) {
            let win = checkWin(tile.innerHTML)
        }
    } else {
        toast2.fire({
            title: `Can't Overwrite !`,
        });
    }
})

$("#reset").on("click", function () {
    clear();
})