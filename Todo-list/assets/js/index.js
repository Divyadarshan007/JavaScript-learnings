let addIcon = document.querySelector(".add-icon")
let popBox = document.querySelector(".pop-box")
let taskInput = document.querySelector("#input-1")
let priority = document.querySelector("#priority-1")
let submitBtn = document.querySelector(".sub-btn")
let taskBox = document.querySelector(".task-box")
let taskBox2 = document.querySelector(".task-box2")
let pos = document.querySelectorAll(".pos")
let taskBg = document.getElementById("task")
let pendingBtn = document.querySelectorAll(".d-btn")
let clearBtn = document.querySelector(".clear-btn");
let button2 = document.querySelector(".button2")
let button1 = document.querySelector(".button1")

let pendingTask = [];
let finishedTask = [];

button2.addEventListener("click", () => {
    clearBtn.classList.remove("d-none")
})
button1.addEventListener("click", () => {
    clearBtn.classList.add("d-none")
})
clearBtn.addEventListener("click", () => {
    finishedTask = [];
    finishedTaskUpdate()
})
function finishedTaskUpdate() {
    taskBox2.innerHTML = "";
    finishedTask.forEach((val, idx) => {
        taskBox2.innerHTML += `
                    <div class="d-flex align-items-center h-100 pb-3" >
                        <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                            <input type="checkbox" checked title="" class="check pe-none align-self-start my-1" id="" placeholder="task">
                            <span class="fs-6 text text-decoration-line-through" ">${val.task}</span>
                        </div>
                        <div class="priority fs-6 text-center text-decoration-line-through " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                    </div>
        `;
    })
}

function pendingTaskUpdate() {
    taskBox.innerHTML = "";
    pendingTask.forEach((val, idx) => {
        taskBox.innerHTML += `
                    <div class="d-flex align-items-center h-100 pb-3">
                        <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                            <input type="checkbox" title="" class="check align-self-start my-1" id="" placeholder="task">
                            <span class="fs-6 text " ">${val.task}</span>
                        </div>
                        <div class="priority fs-6 text-center " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                    </div>
        `;
    })

    checkBoxListner()
}
function getPriority(priorityNum) {
    switch (priorityNum) {
        case 1:
            return "Low";
        case 2:
            return "medium";
        case 3:
            return "high";
    }
}
function getBgColor(bgColor) {
    switch (bgColor) {
        case 1:
            return "#a5a182";
        case 2:
            return "#d5a413";
        case 3:
            return "#d78c28";
    }
}
function checkBoxListner() {
    let checkBox = document.querySelectorAll(".check")
    let lineThrough = document.querySelectorAll(".text")
    let priorityBg = document.querySelectorAll(".priority")
    checkBox.forEach((check, idx) => {
        check.addEventListener("change", (e) => {
            setTimeout(() => {
                finishedTask.push(pendingTask[idx])
                pendingTask.splice(idx, 1)
                finishedTaskUpdate();
                pendingTaskUpdate();
            }, 500)

            if (e.target.checked) {
                lineThrough[idx].style.textDecoration = "line-through";
                priorityBg[idx].style.textDecoration = "line-through";

            } else {
                lineThrough[idx].style.textDecoration = "none"
                priorityBg[idx].style.textDecoration = "none"
            }



        })
    })
}


pendingBtn.forEach((btn) => {
    btn.addEventListener("click", (e) => {
        pos[0].classList.toggle("translate100")
        pos[1].classList.toggle("translate100")
        pendingBtn.forEach((btn) => {
            btn.classList.remove("active")
        })
        btn.classList.add("active")

    })
})
addIcon.addEventListener("click", () => {
    popBox.classList.toggle("visible")
})

submitBtn.addEventListener("click", () => {
    if (taskInput.value == "") {
        Swal.fire({
            title: "Enter Valid Input",
            icon: "warning"

        }).then(() => {
            popBox.classList.toggle("visible")
        });
        return;
    };

    let taskObj = {
        task: taskInput.value,
        priority: parseInt(priority.value),
    }

    pendingTask.push(taskObj)
    pendingTaskUpdate()



    popBox.classList.toggle("visible")
    taskInput.value = "";
    let select = document.querySelector(`.option[data-value="0"]`)
    let option = document.querySelectorAll(".option")
    let current = document.querySelector(".current")

    option.forEach((option) => {
        option.classList.remove("selected");
        option.classList.remove("focus");
        select.classList.add("selected");
        select.classList.add("focus");
        current.innerHTML = "Select Priority";
    })



})








