let submitBtn = document.getElementById("submitBtn");


let studentObj;
submitBtn.addEventListener("click", () => {
    let name = document.getElementById("name").value
    let email = document.getElementById("email").value
    let course = document.getElementById("course").value
    let gender = document.querySelector(`input[type="radio"]:checked`).value;

    console.log(gender)
    
    let studentArr = JSON.parse(localStorage.getItem("students")) || [];
    studentObj = { name, email, course, gender }
    studentArr.push(studentObj)
    
    localStorage.setItem("students", JSON.stringify(studentArr))

    window.location.href = "./student-details.html"

  
})
