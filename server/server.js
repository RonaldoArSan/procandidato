import express from 'express';
import mongoose from 'mongoose';
import 'dotenv/config'

const server = express();
const port = 3000;

server.use(express.json())


mongoose.connect(process.env.DB_LOCATION,
  {
    autoIndex: true

  }
)

server.post("/signup", (req, res)=> {

 fullname, email, password
})



server.listen(port, () => {
  console.log(`Server is running at http://localhost:${port}`);
});