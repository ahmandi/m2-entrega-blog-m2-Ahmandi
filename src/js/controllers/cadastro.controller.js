export default class userRequest {
    static baseUrl = 'https://blog-m2.herokuapp.com'
    
    static async cadastro(userData) {
        return await fetch(`${this.baseUrl}/users/register`,{
            method: 'POST',
            headers: { 'Content-Type': 'application/json'},
            body: JSON.stringify(userData)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }
}