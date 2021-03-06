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
      document.getElementById('app').innerHTML
      = components.loginPage
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
        const messageSend = {
          owner: model.currentUser.email,
          content: message,
          createdAt: new Date().toISOString()
        }
        if(message.trim() !== '') {
          model.addMessage(messageSend)
          sendMessageForm.message.value = ''
        }
      })
      // lay cac cuoc hoi thoai ve
      model.getConversations()
      // lang nghe thay doi cua cac cuoc hoi thoai
      model.listenConversationChange()
    break
  }
}
view.setErrorMessage = (elementId, message) => {
  document.getElementById(elementId).innerText = message
}
view.addMessage = (message) => {
  const messageWrapper = document.createElement('div')
  messageWrapper.classList.add('message')
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
// <div class="message message-mine "> 
//    <div class="message-content">ahihi</div>
// </div>

view.showCurrentConversation = () => {
  document.querySelector('.list-messages').innerHTML = ''
  document.querySelector('.conversation-title').innerHTML
   = model.currentConversation.title
  for(const oneMessage of model.currentConversation.messages) {
    view.addMessage(oneMessage)
  }
  view.scrollToEndElm() // gọi ra cuộc trò chuyện đầu tiên, thì hiện tn mới nhất(cuộn con chỏ xuống cuối cùng)
}

// Hàm show lên danh sách cuộc trò chuyện
view.showListConversation = () => {
  for(const conversation of model.conversations) // lưu ở thằng model.conversations
   {
    view.addConversation(conversation)
  }
}

// Tạo hàm add từng cuộc trò chuyện
view.addConversation = (conversation) => {
  // tao the div
  const conversationWrapper = document.createElement('div')
// TƯơng đương: < div></div>

  // them class
  conversationWrapper.classList.add('conversation') // conversationWrapper = <div class= "conversation"> </div>
  if(conversation.id === model.currentConversation.id) {
    conversationWrapper.classList.add('current')
  }


  // sua innerHtml
  conversationWrapper.innerHTML = `
    <div class="left-conversation-title">   ${conversation.title}</div>
    <div class="num-of-user">${conversation.users.length} users</div>
  `

  // them len tren giao dien
  document.querySelector('.list-conversations').appendChild(conversationWrapper)
  // console.log(conversationWrapper)


  conversationWrapper.addEventListener('click', () => {
    // xoa current class cu
    const current = document.querySelector('.current')
    current.classList.remove('current')
    // them current vao cai duoc click
    conversationWrapper.classList.add('current')
    // show conversation duoc click len man hinh
    for(const elm of model.conversations) {
      if(elm.id === conversation.id) {
        model.currentConversation = elm
        view.showCurrentConversation()
      }
    }
  })
}



//Thêm cuộc trò chuyện mới







view.scrollToEndElm = () => {
  const elm = document.querySelector('.list-messages')
  elm.scrollTop = elm.scrollHeight
}