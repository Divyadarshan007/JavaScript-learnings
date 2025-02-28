let addIcon = document.querySelector(".add-icon")
let popBox = document.querySelector(".pop-box")
let taskInput = document.querySelector("#input-1")
let priority = document.querySelector("#priority-1")
let submitBtn = document.querySelector(".sub-btn")
let taskBox = document.querySelector(".task-box")



addIcon.addEventListener("click", () => {
    popBox.classList.toggle("visible")
})

submitBtn.addEventListener("click", () => {
    
    if(taskInput.value == "") {
        Swal.fire({
            title: "Enter Valid Input",
            icon: "warning"
            
        }).then(()=>{
            popBox.classList.toggle("visible")
        });
        return;
    };
    
    let taskObj = {
        task: taskInput.value,
        priority: parseInt(priority.value),
    }
    
    taskBox.innerHTML += `
    <div class="d-flex align-items-center pb-3">
    <div class="task d-flex align-items-center gap-3">
    <input type="checkbox" title="" id="check" placeholder="task">
    <span class="fs-6">${taskObj.task}</span>
    </div>
    <div class="priority fs-6 text-center">${taskObj.priority}</div>
    </div>
    `;
    popBox.classList.toggle("visible")
    taskInput.value = "";
    let option = document.querySelector(".option.selected")
    let option2 = document.querySelector(`.option[data-value="0"]`)
    option.classList.remove("selected")
    option2.classList.add("selected")
    option2.classList.remove("focus")
})


