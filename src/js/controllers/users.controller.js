export default class usersOperations {
    static baseUrl = 'https://blog-m2.herokuapp.com'
    static token   = JSON.parse(localStorage.getItem('@kenzie-blog:token'))
    
    static async listUserbyId(user_id) {
        return await fetch(`${this.baseUrl}/users/${user_id}`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}` 
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async showPosts() {
        return await fetch(`${this.baseUrl}/posts?page=1`,{
            method: 'GET',
            headers: {
                Authorization: `Bearer ${this.token}` 
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async userPostSearch(user_id) {
        return await fetch(`${this.baseUrl}/posts/${user_id}`,{
            method: 'GET',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}` 
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async post(content) {
        return await fetch(`${this.baseUrl}/posts`,{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}` 
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async postEdit(post_id, content) {
        return await fetch(`${this.baseUrl}/posts/${post_id}`,{
            method: 'PATCH',
            headers: { 
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}` 
            },
            body: JSON.stringify(content)
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }

    static async postDelete(post_id) {
        return await fetch(`${this.baseUrl}/posts/${post_id}`,{
            method: 'DELETE',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${this.token}` 
            }
        })
        .then(response => response.json())
        .then(response => response)
        .catch(err => console.log(err))
    }


}