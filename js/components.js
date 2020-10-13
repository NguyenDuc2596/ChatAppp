const componets = {}
componets.registerPage = `
<div class="register-container">
        <div class="background-img"> </div>
        <div class="form-wrapper">
            <div class="register-header">MindX Chat</div>

            <form id="register-form">

                <div class="name-wrapper">
                    <div class="input-wrapper">
                        <input type="text" placeholder="First name" name="firstName">
                        <div id="first-name-error" class="err"></div>
                    </div>

                    <div class="input-wrapper">
                        <input type="text" placeholder="Last name" name="lastName">
                        <div id="last-name-error" class="err"></div>
                    </div>

                </div>


                <div class="input-wrapper">
                    <input type="text" placeholder="Email" name="email">
                    <div id="email-error" class="err"></div>
                </div>

                <div class="input-wrapper">
                    <input type="password" placeholder="Password" name="password">
                    <div id="password-error" class="err"></div>
                </div>

                <div class="input-wrapper">
                    <input type="password" placeholder="Confirm password" name="confirmPassword">
                    <div id="confirm-password-error" class="err"></div>
                </div>

                <div class="register-form-action">
                     <div>
                         Already have an account? <span id="redirect-login" class="cursor-pointer">Login</span>
                     </div>

                     
                     <button class="btn" type="submit">Register</button>

                </div>

            </form>

        </div>


    </div>

`
componets.loginPage = `  
<div class="login-container">
<div class="background-img"></div>

<div class="form-wrapper">
    <div class="login-header">MindX Chat</div>

    <form id="login-form">


        <div class="input-wrapper">
            <input type="text" placeholder="Email" name="email">
            <div id="email-error" class="err"></div>
        </div>

        <div class="input-wrapper">
            <input type="password" placeholder="Passwork" name="password">
            <div id="password-error" class="err"></div>
        </div>


        <div class="login-form-action">

            <div>
                Don't have an account? <span id="redirect-register" class="cursor-pointer">Register</span>
            </div>

            <button class="btn" type="submit">Login</button>


        </div>


    </form>

</div>

</div>
`


componets.chatPage = `
<div class="chat-container">
<div class="header">MindX Chat</div>
<div class="main">
    <div class="conversation-detail">
        <div class="conversation-title">First conversation</div>
        <div class="list-meassage">
            <div class="message message-mine">
                <div class="message-content">Hello</div>
            </div>

            <div class="message message-other">
                <div class="owner">HongThien</div>
                <div class="message-content">Hello</div>
            </div>
        </div>
        <form id="send-message-form">
            <input type="text" placeholder="Type a message" name="message">
            <button class="btn">Send</button>
        </form>
    </div>
</div>

</div>
`