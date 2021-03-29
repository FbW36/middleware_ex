const express = require('express')
const cors = require('cors')
const app = express()
const port = 5000

app.listen(port, ()=>{
    console.log(`app listening at http://localhost:${port}`)
})

// Express middleware
app.use(express.json())
app.use(cors())

//Available routes
app.get("/", (req,res)=>{
    res.send("hello world")
})