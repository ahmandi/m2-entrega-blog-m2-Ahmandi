import userRequest from "../controllers/cadastro.controller.js";

class Cadastrar {
    static body = document.querySelector('body');

    static janelaCadastro() {
        const divContainer = document.createElement('div');
        const div = document.createElement('div');
        const span = document.createElement('span')
        const button = document.createElement('button');
        const form = document.createElement('form');
        const inputUser = document.createElement('input')
        const inputEmail = document.createElement('input')
        const inputFoto = document.createElement('input')
        const inputSenha = document.createElement('input')
        const buttonCadastro = document.createElement('button')
        
        divContainer.classList.add('modal__container')
        form.classList.add('modal__form')

        span.innerText = 'Cadastro'
        button.innerText = 'X'
        buttonCadastro.innerText = 'Cadastrar'

        inputUser.type = 'text'
        inputEmail.type = 'text'
        inputFoto.type = 'text'
        inputSenha.type = 'text'

        inputUser.name = "user"
        inputEmail.name = "email"
        inputFoto.name = "fotoPerfil"
        inputSenha.name = "senha"

        inputUser.id = "user"
        inputEmail.id = "email"
        inputFoto.id = "fotoPerfil"
        inputSenha.id = "senha"

        inputUser.placeholder = 'Nome de Usuário'
        inputEmail.placeholder = 'Email'
        inputFoto.placeholder = 'Foto de Perfil'
        inputSenha.placeholder = 'Senha'

        buttonCadastro.addEventListener('click', (event) => { 
            event.preventDefault()
            const username = document.getElementById('user').value
            const email    = document.getElementById('email').value
            const foto     = document.getElementById('fotoPerfil').value
            const senha    = document.getElementById('senha').value

            userRequest.cadastro({
                "username": username,
                "email": email,
                "avatarUrl": foto,
                "password": senha 
            })
            .then(response => console.log(response))
        })

        form.append(inputUser, inputEmail, inputFoto, inputSenha, buttonCadastro)
        div.append(span, button)
        divContainer.append(div, form)
        this.body.append(divContainer)
    }
}

Cadastrar.janelaCadastro()

export default Cadastrar