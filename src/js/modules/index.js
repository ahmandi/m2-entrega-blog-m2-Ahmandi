import usersOperations from "../controllers/users.controller.js"

const user = await usersOperations.listUserbyId(localStorage.getItem('@kenzie-blog:user'))

class Homepage {
    static body   = document.querySelector('body');
    static header = document.querySelector('header');
    static main   = document.querySelector('main');
    
    static async headerBuilder() {
        const div    = document.createElement('div');
        const figure = document.createElement('figure');
        const img    = document.createElement('img');
        const span   = document.createElement('span');
        const button = document.createElement('button');

        div.classList.add('container')

        img.src = `${user.avatarUrl}`
        img.alt = 'User Avatar'

        span.innerText = `${user.username}`

        button.innerText = 'Logout'
        //Adicionar lógica do botão de logout

        figure.append(img)
        div.append(figure, span)
        this.header.append(div, button)
    }

    static commentSection() {
        const section = document.createElement('section');
        const form    = document.createElement('form')
        const input   = document.createElement('input')
        const button  = document.createElement('button')

        form.classList.add('comment__section')
        button.classList.add('comment__submit')
        
        input.id = 'comment'
        input.type = 'text'
        input.placeholder = 'Comece seu post incrível!'
        input.name = 'text'
        input.maxlength = '500'
        button.innerText = 'Postar!'

        button.addEventListener('click', () => {
            const comentario = document.getElementById('comment').value

            usersOperations.post({content: comentario})
            .then(response => console.log(response))
        })

        form.append(input, button)
        section.append(form)
        this.main.append(section)
    }

    static async renderComments() {
        const posts = await usersOperations.showPosts()
        console.log(posts)

        posts.data.forEach(post => {
            this.userComment(post)
        })
    }

    static userComment(post) {
        const section  = document.createElement('section')
        const figure   = document.createElement('figure');
        const img      = document.createElement('img');
        const div      = document.createElement('div');
        const span     = document.createElement('span');
        const p        = document.createElement('p');
        const divMenu  = document.createElement('div');
        const spanEdit = document.createElement('span')
        const spanErase= document.createElement('span')
        const time     = document.createElement('time')

        section.classList.add('comment__container')
        div.classList.add('comment__container--box')
        divMenu.classList.add('comment__menu')
        spanEdit.classList.add('comment__edit')
        spanErase.classList.add('comment__erase')
        time.classList.add('comment__date')

        img.src = `${post.user.avatarUrl}`
        span.innerText = `${post.user.username}`
        p.innerText = `${post.content}`
        spanEdit.innerText = 'Editar'
        spanErase.innerText = 'Apagar'
        time.innerText = `${post.createdAt}`

        spanEdit.id = 'editar'
        spanErase.id = 'apagar'

         if(user.id === post.user.id) {
             divMenu.append(spanEdit, spanErase, time)
         } else {
             divMenu.append(time)
         }
    
        spanEdit.addEventListener('click', () => {
            usersOperations.postEdit(user.id)
            .then(response => console.log(response))
        })
    
        spanErase.addEventListener('click', () => {
            usersOperations.postDelete(post.id)
            .then(response => response)
            .remove()
            window.location.reload()
        })
        
        figure.append(img)
        div.append(span, p, divMenu)
        section.append(figure, div)
        this.main.append(section)
    }
        
    static communityComment() {
        const section = document.createElement('section')
        const figure  = document.createElement('figure');
        const img     = document.createElement('img');
        const div     = document.createElement('div');
        const span    = document.createElement('span');
        const p       = document.createElement('p');
        const divMenu = document.createElement('div');
        const time    = document.createElement('time')

        section.classList.add('comment__container')
        div.classList.add('comment__container--box')
        divMenu.classList.add('comment__menu')
        time.classList.add('comment__date')

        img.src = `${user.userimage}`
        span.innerText = `${user.username}`
        p.innerText = `${user.content}`
        time.innerText = new Date(time.getTime())

        figure.append(img)
        divMenu.append(time)
        div.append(span, p, divMenu)
        section.append(figure, div)
    }
}

Homepage.headerBuilder()
Homepage.commentSection()
Homepage.renderComments()
usersOperations.showPosts()