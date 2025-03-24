let inputBox = document.querySelectorAll(".input-box")


class Student {
    constructor(name, email, dob, gender, address) {
        this.name = name;
        this.email = email;
        this.dob = dob;
        this.gender = gender;
        this.address = address;
    }
     editStudent(button) {
        let row = button.parentElement.parentElement.parentElement;
    
        let name = row.cells[0].innerText
        let email = row.cells[1].innerText
        let dob = row.cells[2].innerText
        let gender = row.cells[3].innerText
        let address = row.cells[4].innerText
    
        document.getElementById("name").value = name
        document.getElementById("email").value = email
        document.getElementById("dob").value = dob
        document.querySelector(`input[name="gender"][value="${gender}"]`).checked = true;
        document.getElementById("address").value = address;
    
        row.remove()
    
    }
     deleteRow(button) {
        let row = button.parentElement.parentElement.parentElement;
        row.remove();
    }
}

let form = document.querySelector("#studentForm")

form.addEventListener("submit", (e) => {
    e.preventDefault();

    let name = document.getElementById("name").value ;
    let email = document.getElementById("email").value ;
    let dob = document.getElementById("dob").value ;
    let gender = document.querySelector('input[name="gender"]:checked') ? document.querySelector('input[name="gender"]:checked').value : "";
    let address = document.getElementById("address").value;
    if(gender.trim() ==""){
        gender.classList.add("danger")
        nexElement.classList.remove("hidden")
    }
    inputBox.forEach((val)=>{
        
        let nexElement = val.nextElementSibling;
        if(val.value.trim() == ""){
            val.classList.add("danger")
            nexElement.classList.remove("hidden")
        }

    })
    
        let student = new Student(name, email, dob, gender, address)
        let table = document.getElementsByTagName("tbody")[0]
        let tableRow = document.querySelectorAll("#detailsTable tbody tr")
        let flag = false;
        tableRow.forEach((val) => {
            let existingEmail = val.cells[1].innerText;
            if (existingEmail == email) {
                alert("email is already registered !")
                flag = true;
            }
    
        })
        if(flag)return;
    
        let row = table.insertRow()
        row.insertCell(0).innerText = student.name;
        row.insertCell(1).innerText = student.email;
        row.insertCell(2).innerText = student.dob;
        row.insertCell(3).innerText = student.gender;
        row.insertCell(4).innerText = student.address;
        row.insertCell(5).innerHTML = `<div class="flex justify-between gap-20"><button class="w-100" onclick="student.editStudent(this)">edit</button><button class="w-100" onclick="deleteRow(this)">delete</button></div>`;
    
        form.reset();
    



})



