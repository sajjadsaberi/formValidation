const usernameInput = document.querySelector(".user-input");
const passwordInput = document.querySelector(".pass-input");
const usernameMsg = document.querySelector(".username-msg");
const passwordMsg = document.querySelector(".password-msg");
const sigininMsg = document.querySelector(".signin-status");
const siginBtn = document.querySelector(".signin-button");

siginBtn.addEventListener("click", signIn);

function signIn(event) {
    event.preventDefault();
    usernameMsg.innerText = "";
    passwordMsg.innerText = "";
    const usernameValue = usernameInput.value;
    const passwordValue = passwordInput.value;
    let ifsendData = true;
    //const pattern = /^[A-Za-z0-9._]{3,25}@\w{2,6}\.[a-z]{2,3}$/g;
    const pattern = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/g;
    const patternPass = /(?=.*[a-z])(?=.*[A-Z])(?=.*[0-9])(?=.*[^A-Za-z0-9])(?=.{8,})/g;

    if (pattern.test(usernameValue) === false) {
        usernameMsg.innerText = "Please enter Valid Email";
        ifsendData = false;
    }

    if (passwordValue.length === 0) {
        passwordMsg.innerText = "Please Enter Your Password";
        ifsendData = false;
    } else if (patternPass.test(passwordValue) === false) {
        passwordMsg.innerText = "Your Password is to short"
    }

    if (ifsendData) {
        const body = JSON.stringify({
            username: usernameValue,
            password: passwordValue,
        })
        const headers = {
            "Content-Type": "application/json"
        }
        fetch('https://jsonplaceholder.typicode.com/posts', {
                method: "POST",
                body: body,
                headers: headers
            })
            .then(response => {
                if (response.ok) {
                    sigininMsg.innerText = "You signed in successfully"
                }
            })
    }
}