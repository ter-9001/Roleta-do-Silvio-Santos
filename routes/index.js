var express = require('express');
var router = express.Router();

 //GET home page. 
/*
 const roleta= require('C:/Users/Aluno/Downloads/workspace/Roleta2/express-roleta-tutorial/routes/roleta.js')

 const app= express()
 const port= 3000
 
 app.set('views','view/index.pug')
 app.set('view engines','pug')
 
 
 app.use(express.json())
 
 app.use(express.urlencoded({
   extended: false
 }))
 
 
 roleta(app) */

 router.get('/', function(req, res, next) {
  res.render('index', { title: 'Gabriel' });
});

module.exports = router;

/*const fs= require('fs')
const{ join }= require('path')

const filePath= join( __dirname, 'user.json')



const getUsers = () => {
	
	const data= fs.existsSync(filePath)
	? fs.readFileSync(filePath)
	: []
	
	try{
		
		return JSON.parse(data)
		
	}catch(error){
		return []
	}
}


const saveUser = (users) => 
fs.writeFileSync(filePath, JSON.stringify(users, null, '\t'))


  
  router
	.get((req, res) => {
		
		const users= getUsers()
			
	    
		res.send({users})
		
		users.map(user => {

			if(user.nome == 1)
			{
				console.log("Chegou o 1")
			}

			if(user.nome == 2)
			{
				console.log("Chegou o 2")
			}


			if(user.nome == 3)
			{
				console.log("Chegou o 3")
			}


			res.render('index', {	menssage: "funcionou!"})

		})

	})
	.put((req, res) => {

		const users= getUsers()
        
		
		req.body = {nome : Math.floor(3*  Math.random())}	

		console.log(req.body)


		saveUser(users.map(user => {

			if(user.id == 1)
			{
				return {

					...user,
					...req.body	

				}
			}

			return user

		}))

		res.status(200).send('Ok')
	})
	*/
	
 