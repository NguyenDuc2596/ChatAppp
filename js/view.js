const view = {}
view.setActiveScreen = (screenName) => {
    switch (screenName) {
        case 'registerPage':
            document.getElementById('app').innerHTML = componets.registerPage
            document.getElementById('redirect-login').addEventListener('click', () => {
                view.setActiveScreen('loginPage')
            }
            )
            const registerForm = document.getElementById('register-form')
            registerForm.addEventListener('submit', (event) => {
                console.log(event)
                event.preventDefault()
                const dataRegister = {
                    firstName: registerForm.firstName.value,
                    lastName: registerForm.lastName.value,
                    email: registerForm.email.value,
                    password: registerForm.password.value,
                    confirmPassword: registerForm.confirmPassword.value


                }
                controller.register(dataRegister)
            })

            break;



        case 'loginPage':
            document.getElementById('app').innerHTML = componets.loginPage
            document.getElementById('redirect-register').addEventListener('click', () => {
                view.setActiveScreen('registerPage')
            }
            )
            const loginForm = document.getElementById('login-form')
            loginForm.addEventListener('submit', (event) => {
                event.preventDefault()
                const dataLogin = {
                    email: loginForm.email.value,
                    password: loginForm.password.value,
                }
                controller.login(dataLogin)
            })
            break;

    }
}

view.setErrorMessage = (elenmentId, messgae) => {
    document.getElementById(elenmentId).innerText = messgae

}

