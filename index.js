const express = require("express")
require("dotenv").config()
const fs = require("fs")

const app = express()
app.use(express.static("./public"))
app.use((req, res)=>{
  res.status( 404 )
  .type("text/html")
  .send( fs.readFileSync("./pages/404.html","utf8") )
})

app.listen( process.env.PORT, "0.0.0.0" )