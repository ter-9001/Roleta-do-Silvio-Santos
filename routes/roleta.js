var express = require('express');
var router = express.Router();

const fs= require('fs')
const{ join }= require('path')

const filePath= join( __dirname, 'user.json')

var num1, num2, num3, resultado;

var caminho_imagens = "./images/"

var imagems = ["SilvioSantos.jpg", "LiviaAndrade.jpg", "CabritoTeves.jpg","CarlinhosAguiar.jpg",
 "HelenGanzarolli.jpg"]

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



router.get(('/'),(req, res, next) => {
		
		const users= getUsers()
			
        //res.send({users})
		
		
		users.map(user => {

			/*if(user.nome == 1)
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
			}*/

			//num1: caminho_imagens + imagems[ Math.floor(5*  Math.random())],
			
			num1 = [ Math.floor(5*  Math.random())]
			num2 = [ Math.floor(5*  Math.random())]
			num3 = [Math.floor(5*  Math.random())]


			console.log(num1 - num2 == 0)

			if( (num1 - num2 == 0) && (num3 - num2 == 0) )
			{
				resultado = "Você ganhou!!!"
			}
			else
			{
				resultado = "Não foi dessa vêz,\n tente de novo"
			}

			res.render('Roleta', {
				
				src1: caminho_imagens + imagems[ num1],
				src2: caminho_imagens + imagems[ num2],
				src3: caminho_imagens + imagems[ num3],

				resultado: resultado
			});

           

		})

	})

	



module.exports = router