let nameEl = document.getElementById("name");
let mail = document.getElementById("mail");
let pass = document.getElementById("pass");
let cpass = document.getElementById("cpass");
let submit = document.getElementById("submit");
let formEl = document.getElementById("formEl");

$("#submit").on("click", function (e) {
    e.preventDefault();

    if (nameEl.value.trim() == "") {
        Swal.fire({
            imageUrl:
                'https://media.tenor.com/unl1EqovjJcAAAAM/puneet-superstar-meme-acha-puneet.gif',
        });
        return;
    }

    if (mail.value.trim() == "") {
        Swal.fire("Email is required!");
        return;
    }

    if (pass.value.trim() == "" || cpass.value.trim() == "") {
        Swal.fire("Password and confirmation password are required!");
        return;
    } else if (pass.value !== cpass.value) {
        Swal.fire("Password and confirmation password do not match!");
        return;
    }

    Swal.fire({
        title: "Do you want to save the changes?",
        showDenyButton: true,
        showCancelButton: true,
        confirmButtonText: "Save",
        denyButtonText: `Don't save`
    }).then((result) => {
        if (result.isConfirmed) {
            formEl.submit();
        }
    });
});
