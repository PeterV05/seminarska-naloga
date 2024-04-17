const form = document.querySelector("form");
const fullName = document.getElementById("name");
const email = document.getElementById("email");
const phone = document.getElementById("phone");
const priimek = document.getElementById("priimek");
const mess = document.getElementById("message");



async function checkInputs() {
    const items = document.querySelectorAll(".item");

    for (const item of items) {
        if (item.value == "") {
            item.classList.add("error");
            item.style.border = "red solid 1px";
        }

        if (items[1].value != "") {
            checkEmail();
        }

        items[1].addEventListener("keyup", () => {
            checkEmail();
        });

        item.addEventListener("keyup", () => {
            if (item.value != "") {
                item.style.border = "white solid 1px"
                item.classList.remove("error");
            }   
        });
    }
}

function checkEmail() {
    const emailRegex = /^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/;

    if (!email.value.match(emailRegex)) {
        email.classList.add("error");
        email.style.border = "red solid 1px";
    }
    else {
        email.classList.remove("error");
        email.style.border = "white solid 1px";
    }
}

form.addEventListener("submit", async (e) => {
    e.preventDefault();
    checkInputs();

    if (!fullName.classList.contains("error") && !email.classList.contains("error") && !phone.classList.contains("error") && !priimek.classList.contains("error") && !mess.classList.contains("error")) {
        console.log(fullName.value)
        await fetch("http://localhost:3000/api/mail", {
            method: "POST",
            body: JSON.stringify({
                fullName: fullName.value,
                priimek: priimek.value,
                email: email.value,
                phone: phone.value,
                mess: mess.value,
   

                
            }),
            headers: {
                "Content-Type": "application/json"
            }
        });

        form.reset();
        return false;
        

    }
  
});

