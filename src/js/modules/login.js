import Login from "../controllers/login.controller.js";

class Loginout {
    static body = document.querySelector('body');

    static janelaLogin() {
        const div = document.createElement('div')
        const span = document.createElement('span')
        const button = document.createElement('button')
        const form = document.createElement('form')
        const inputEmail = document.createElement('input')
        const inputSenha = document.createElement('input')
        const buttonLogin = document.createElement('button')

        div.classList.add('modal__container')
        form.classList.add('modal__form')

        span.innerText = 'Login'
        button.innerText = 'X'
        buttonLogin.innerText = 'Login'

        inputEmail.type = 'text'
        inputSenha.type = 'text'

        inputEmail.name = 'email'
        inputSenha.name = 'senha'

        inputEmail.id = 'email'
        inputSenha.id = 'senha'

        inputSenha.placeholder = 'Senha'
        inputEmail.placeholder = 'E-mail'

        buttonLogin.addEventListener('click', (event) => {
            event.preventDefault()
            const email    = document.getElementById('email').value
            const senha    = document.getElementById('senha').value

            console.log(typeof email, typeof senha)

            Login.login({
                "email": email,
                "password": senha
            })
            .then(response => console.log(response))
            window.location.href = '../../../index.html'
        })

        form.append(inputEmail, inputSenha, buttonLogin)
        div.append(span, button,form)
        this.body.appendChild(div)
        //adicionar a lógica do login com if (token)
    }
}

Loginout.janelaLogin()
