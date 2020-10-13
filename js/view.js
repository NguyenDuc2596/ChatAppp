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
                controller.login(dataToLogin)
            })
            break;

        case 'chatPage':
            document.getElementById('app').innerHTML = componets.chatPage
            const sendMessageForm = document.getElementById('send-message-form')
            sendMessageForm.addEventListener('submit',(e) => {
                e.preventDefault()
                const message = sendMessageForm.message.value
                console.log(message)
                const messageSend = {
                    ower: model.currentUser.email,
                    content: message
                }
                view.addMessage(messageSend)
            })

            break;


    }
}

view.setErrorMessage = (elenmentId, messgae) => {
    document.getElementById(elenmentId).innerText = messgae

}

view.addMessage = (message) => {
    const messageWrapper = document.createElement('div')
    messageWrapper.classList.add('message')
    if(model.currentUser.email === messgae.ower){
        messageWrapper.classList.add('message-mine')
        messageWrapper.innerHTML=`
        <div class="messeage-content">${messgae.content}</div>
        `

    }else{ 

    }
    document.querySelector('.list-message').appendChild(messageWrapper)
}

// <div class="message"> </div>


