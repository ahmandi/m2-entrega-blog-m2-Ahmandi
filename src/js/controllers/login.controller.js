export default class Login {
    static baseUrl = 'https://blog-m2.herokuapp.com/users/login'

    static async login(loginData) {
        return await fetch(this.baseUrl,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(loginData)
        })
        .then(response => response.json())
        .then((response) => {
            localStorage.setItem('@kenzie-blog:user', JSON.stringify(response.userId))
            localStorage.setItem('@kenzie-blog:token', JSON.stringify(response.token))
            console.log(response)
        })
        .catch(err => console.log(err))
    }
}