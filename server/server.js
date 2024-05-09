import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'
import bcript, { hash } from "bcrypt"


import User from "./Schema/User.js"


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

server.post("/signup", (req, res) => {

  let { fullname, email, password } = req.body

  if (fullname.length < 3) {
    return res.status(403).json({ "error": "Fullname deve ter mais que 3 digitos" })
  }

  if (!email.length) {
    return res.status(403).json({ "error": "Entre com um email valido" })
  }
  if (!emailRegex.test(email)) {
    return res.status(403).json({ "error": "Email invalido" })
  }

  if (!passwordRegex.test(password)) {
    return res.status(403).json({ "error": "Senha deve conter de 6 a 15 caracters com caracteres especiais." })
  }

  bcript.hash(password, 10, (err, hash_password) => {
    let username = email.split("@")[0]
    let user = new User({
      personal_info: { fullname, email, password: hash_password, username }
    })

    user.save().then((u) => {
      return res.status(200).json({ user: u })
    })
      .catch(err => {

        if(err.code === 11000) {
          return res.status(409).json({ error: 'Usuario já existe'})
        } else{
          console.log("Erro no servidor ao criar usuario: ", err);
          return res.status(500).json({ error: `Erro interno do servidor`})
        }

        return res.status(500).json({ "error": err.message })
      })

  })
})


server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});