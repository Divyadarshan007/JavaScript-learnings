let addIcon = document.querySelector(".add-icon")
let popBox = document.querySelector(".pop-box")
let taskInput = document.querySelector("#input-1")
let priority = document.querySelector("#priority-1")
let submitBtn = document.querySelector(".sub-btn")
let taskBox = document.querySelector(".task-box")
let taskBg = document.getElementById("task") 
let pendingBtn = document.querySelectorAll(".d-btn")
let pendingTask = [];
let finishedTask = [];
console.log(pendingTask)
console.log(finishedTask)

function getPriority(priorityNum){
    switch(priorityNum){
        case 1:
            return "Low";
        case 2:
            return "medium";
        case 3:
            return "high";
    }    
}
function getBgColor(bgColor){
    switch(bgColor){
        case 1:
            return "#a5a182";
        case 2:
            return "#d5a413";
        case 3:
            return "#d78c28";
    }    
}

function taskRender(){
    taskBox.innerHTML = "";
    finishedTask.forEach((val)=>{
        taskBox.innerHTML += `
                    <div class="d-flex align-items-center h-100 pb-3">
                        <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                            <input type="checkbox" title="" class="check align-self-start my-1" id="check" placeholder="task">
                            <span class="fs-6 text" ">${val.task}</span>
                        </div>
                        <div class="priority fs-6 text-center " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                    </div>
        `;
    })


    pendingTask.forEach((val)=>{
        taskBox.innerHTML += `
                    <div class="d-flex align-items-center h-100 pb-3">
                        <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                            <input type="checkbox" title="" class="check align-self-start my-1" id="check" placeholder="task">
                            <span class="fs-6 text" ">${val.task}</span>
                        </div>
                        <div class="priority fs-6 text-center " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                    </div>
        `;
    })
}


pendingBtn.forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
  console.log(e)
        pendingBtn.forEach((btn)=>{
            btn.classList.remove("active")
        })
        btn.classList.add("active")
        if(e.target.className == "button2"){
            taskBox.innerHTML = "";
            finishedTask.forEach((val)=>{
                taskBox.innerHTML += `
                            <div class="d-flex align-items-center h-100 pb-3">
                                <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                                    <input type="checkbox" title="" class="check align-self-start my-1" id="check" placeholder="task">
                                    <span class="fs-6 text" ">${val.task}</span>
                                </div>
                                <div class="priority fs-6 text-center " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                            </div>
                `;
            })
        }else{
            taskRender();
        }
   
        
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
    taskBox.innerHTML = "";
    pendingTask.forEach((val, idx)=>{
        taskBox.innerHTML += `
                    <div class="d-flex align-items-center h-100 pb-3">
                        <div class="task d-flex align-items-center gap-3" id="task" style="background-color:${getBgColor(val.priority)}">
                            <input type="checkbox" title="" class="check align-self-start my-1" id="check" placeholder="task">
                            <span class="fs-6 text" ">${val.task}</span>
                        </div>
                        <div class="priority fs-6 text-center " id="priority" style="background-color:${getBgColor(val.priority)}"">${getPriority(val.priority)}</div>
                    </div>
        `;
    })

    let checkBox = document.querySelectorAll(".check")
    let lineThrough = document.querySelectorAll(".text")
    let priorityBg = document.querySelectorAll(".priority")

    checkBox.forEach((check, idx)=>{
        check.addEventListener("change",(e)=>{
            if(e.target.checked == true){

                finishedTask.push(pendingTask[idx])
                pendingTask.splice(idx, 1)

                lineThrough[idx].style.textDecoration = "line-through" 
                priorityBg[idx].style.textDecoration = "line-through"
            }else{
                
                pendingTask.push(finishedTask[idx])
                finishedTask.splice(idx, 1)
                lineThrough[idx].style.textDecoration = "none" 
                priorityBg[idx].style.textDecoration = "none"
            }
        })
    })
    
 
    popBox.classList.toggle("visible")
    taskInput.value = "";
    // let option = document.querySelector(".option.selected")
    // let option2 = document.querySelector(`.option[data-value="0"]`)
    // option.classList.remove("selected")
    // option2.classList.add("selected")
    // option2.classList.remove("focus")
})

// let checkBox = document.querySelectorAll(".check")
// let lineThrough = document.querySelectorAll(".text")
// let priorityBg = document.querySelectorAll(".priority")

// checkBox.forEach((check, idx)=>{
//     check.addEventListener("change",(e)=>{
      

//             finishedTask.push(pendingTask[idx])
//             pendingTask.splice(idx, 1)

         
        
            
//             // pendingTask.push(finishedTask[idx])
//             // finishedTask.splice(idx, 1)
       
//     })
// })


