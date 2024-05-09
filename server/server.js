import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import bcript from "bcrypt"


const username = encodeURIComponent("<username>");
const password = encodeURIComponent("<password>");

const server = express();
const port = 3000;

let emailRegex = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/; // regex for email
let passwordRegex = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,20}$/; // regex for password

server.use(express.json())


mongoose.connect(process.env.DB_LOCATION,
  {
    autoIndex: true

  }
)

server.post("/signup", (req, res)=> {

 let {fullname, email, password} = req.body

 if (fullname.length < 3) {
  return res.status(403).json ({"error": "Fullname deve ter mais que 3 digitos"})
}

if (!email.length){
  return res.status(403).json ({"error": "Entre com um email valido"})
}
if (!emailRegex.test(email)){
  return res.status(403).json({"error": "Email invalido"})
}

if(!passwordRegex.test(password)){
  return res.status(403).json({"error":"Senha deve conter de 6 a 15 caracters com caracteres especiais."})
}

  return res.status(200).json({"status": "Ok"})
})



server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});