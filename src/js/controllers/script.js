import userRequest from "./cadastro.controller.js";
import Login from "./login.controller.js";
import usersOperations from "./users.controller.js"

 const cadastro = await userRequest.cadastro({
     "username": "Mandicita",
     "email": "mildmandydono@gmail.com",
     "avatarUrl": "https://github.com/phmc99.png",
     "password": "Teste123"  
 })

 const login = await Login.login({
     "email": "mildmandydono@gmail.com",
     "password": "Teste123"
 })

 const userInfo = await usersOperations.listUserbyId(2)
 const usersPost = await usersOperations.showPosts()

console.log(cadastro)
console.log(login, 'login success')
console.log(userInfo)
console.log(usersPost)
