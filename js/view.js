
const view = {}
view.setActiveScreen = (screenName) => {
  switch(screenName) {
    case 'welcomeScreen':
      document.getElementById('app').innerHTML 
      = components.welcomPage
    break
    case 'registerPage':
      document.getElementById('app').innerHTML
      = components.registerPage
      document.getElementById('redirect-login')
      .addEventListener('click', () => {
        view.setActiveScreen('loginPage')
      })
      const registerForm = document.getElementById('register-form')
      registerForm.addEventListener('submit', (event) => {
        event.preventDefault()
        const dataRegister= {
          firstName: registerForm.firstName.value,
          lastName: registerForm.lastName.value,
          email: registerForm.email.value,
          password: registerForm.password.value,
          confirmPassword: registerForm.confirmPassword.value,
        }
        controller.register(dataRegister)
      })
    break
    case 'loginPage':
      document.getElementById('app').innerHTML= components.loginPage
      document.getElementById('redirect-register')
      .addEventListener('click', () => {
        view.setActiveScreen('registerPage')
      })
      const loginForm = document.getElementById('login-form')
      loginForm.addEventListener('submit', (e) => {
        e.preventDefault()
        const dataToLogin = {
          email: loginForm.email.value, 
          password: loginForm.password.value
        }
        controller.login(dataToLogin)
      })
    break
    case 'chatPage': 
      document.getElementById('app').innerHTML = components.chatPage
      const sendMessageForm = document.getElementById('send-message-form')
      sendMessageForm.addEventListener('submit',(e) => {
        e.preventDefault()  
        const message = sendMessageForm.message.value
        console.log(message)

        const messageSend = {
          owner: model.currentUser.email, 
          content: message // của mình gửi
        }// chỉ hiện thị mình gửi

        const messageFromBot = {
          owner: 'Bot',
          content: message
        }
        if(message.trim() !== ''){
        view.addMessage(messageSend)
        view.addMessage(messageFromBot)
        sendMessageForm.message.value = ''
        // cái .trim() loại bỏ cái dấu cách
      }
      })
    break
  }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}

//function
view.addMessage = (message) => {
  const messageWrapper = document.createElement('div') // tạo 1 thẻ div bằng js : <div> ,/div>
  messageWrapper.classList.add('message') // add class cho cái thẻ div mình vừa tạo
  if(model.currentUser.email === message.owner) {
    messageWrapper.classList.add('message-mine')
    messageWrapper.innerHTML = `
    <div class="message-content">${message.content}</div>
    `
  } else { 
    messageWrapper.classList.add('message-other')
    messageWrapper.innerHTML = `
    <div class="owner">${message.owner}</div>
    <div class="message-content">${message.content}</div>
    `
  }
  document.querySelector('.list-messages').appendChild(messageWrapper)
}

// <div class= "message" > </div>