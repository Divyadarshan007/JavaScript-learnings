

document.addEventListener("DOMContentLoaded", () => {
    localStorage.removeItem("editIndex")
    localStorage.removeItem("editStudent")

})
let studentBody = document.getElementById("studentBody");
let studentHead = document.getElementById("studentHead");
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
            <td><button class="btn btn-success" onclick="editData(${idx})">update</button><button class="btn btn-danger" onclick="deleteData(${idx})">delete</button></td>
        </tr>
`
    })

    if (studentArr.length == 0) {
        studentHead.style.display = "none";
        heading.innerHTML = "No record found...";
        backBtn.style.display = "none"
    }
    if (studentArr.length > 0) {
        heading.innerHTML = "Student Detail"

    }
}

const deleteData = (idx) => {
    studentArr.splice(idx, 1)

    localStorage.setItem("students", JSON.stringify(studentArr))
    display()
}

const editData = (idx) => {
    let editIndex = idx;
    let editStudent = studentArr[idx]
    localStorage.setItem("editIndex", editIndex);
    localStorage.setItem("editStudent", JSON.stringify(editStudent));

    window.location.href = "./index.html"

}



display();





