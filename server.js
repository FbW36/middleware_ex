const express = require("express") 
const app = express()
const PORT = 5000
const cors = require('cors')
const validateRouter = require('./routes/validateRouter')
const sanitizeRouter = require('./routes/sanitizeRouter')

app.listen(PORT, () => {
    console.log(`Backend Server has started up: ${PORT}`)
})

app.use(express.json())
app.use(cors())

app.use('/validateUser', validateRouter )
app.use('/sanitizeUser', sanitizeRouter )

app.use(function errorHandler (err, req, res, next) {
    res.status(err.status || 500).send({error: {message: err.message}})
})