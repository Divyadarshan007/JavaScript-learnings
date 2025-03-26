let submitBtn = document.getElementById("submitBtn");

let studentObj;
submitBtn.addEventListener("click", () => {
    insertData();
    window.location.href = "./student-details.html"
    clear();

})

const clear = () => {
    document.getElementById("name").value = "";
    document.getElementById("email").value = "";
    document.getElementById("course").value = "";
    document.querySelector(`input[type="radio"]:checked`).checked = false;
}

const insertData = () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let course = document.getElementById("course").value
    let gender = document.querySelector(`input[type="radio"]:checked`).value;

    let studentArr = JSON.parse(localStorage.getItem("students")) || [];
    studentObj = { name, email, course, gender }
    studentArr.push(studentObj)

    localStorage.setItem("students", JSON.stringify(studentArr))
}

