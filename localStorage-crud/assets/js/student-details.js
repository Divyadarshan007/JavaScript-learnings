let studentBody = document.getElementById("studentBody");
let studentHead =  document.getElementById("studentHead");
let heading = document.getElementById("heading")
let backBtn = document.getElementById("backBtn")
studentArr = JSON.parse(localStorage.getItem("students"))
const display = () => {
    studentBody.innerHTML = "";
    studentArr.forEach((val, idx) => {
        studentBody.innerHTML += `
        <tr>
            <td>${val.name}</td>
            <td>${val.email}</td>
            <td>${val.course}</td>
            <td>${val.gender}</td>
            <td><button class="btn btn-success" onclick="updateData(${idx})">update</button><button class="btn btn-danger" onclick="deleteData(${idx})">delete</button></td>
        </tr>
`
    })

    if (studentArr.length == 0) {
        studentHead.style.display = "none";
        heading.innerHTML = "No record found..."
        backBtn.style.display = "none"
    }
    if(studentArr.length > 0){
        heading.innerHTML = "Student Detail"

    }
}

const deleteData = (idx) => {
    studentArr.splice(idx, 1)

    localStorage.setItem("students", JSON.stringify(studentArr))
    display()
}



// const updateData = (idx) => {
//     document.getElementById("name").value = studentArr[idx].name;
//     document.getElementById("email").value = studentArr[idx].email;
//     document.getElementById("course").value = studentArr[idx].course;
//     document.querySelector(`input[type="radio"]:checked`).value = studentArr[idx].gender;

// }

display();



