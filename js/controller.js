const controller = {}
controller.register = ({ firstName, lastName, email, password, confirmPassword }) => {

    if (firstName === '') {

        view.setErrorMessage('first-name-error', 'Please input first name')
    } else ('first-name-error', '')

    if (lastName === '') {

        view.setErrorMessage('last-name-error', 'Please input last name')
    } else ('last-name-error', '')
    if (email === '') {

        view.setErrorMessage('email-error', 'Please input email')
    } else ('email-error', '')

    if (password === '') {

        view.setErrorMessage('password-error', 'Please input password')
    } else ('password-error', '')

    if (confirmPassword === '') {

        view.setErrorMessage('confirm-password-error', 'Please input confirmPassword')
    } else if (password !== confirmPassword) {
        view.setErrorMessage('confirm-password-error', 'Password didnt  match  ')

    }
    else ('confirm-password-error', '')


    if (firstName !== '' && lastName !== '' && email !== '' && password !== ''
        && confirmPassword !== '' && confirmPassword === password) {
        const dataRegister = {
            firstName,
            lastName,
            email,
            password
        }
        model.register(dataRegister)
    }



}


/// làm về login

controller.login = ({ email, password }) => {

    if (email === '') {

        view.setErrorMessage('email-error', 'Please input email')
    } else ('email-error', '')

    if (password === '') {

        view.setErrorMessage('password-error', 'Please input password')
    } else ('password-error', '')


    
    if (email !== '' && password !== ''
    ) {
        const dataLogin = {

            email,
            password
        }
        model.login(dataLogin)
    }
}

