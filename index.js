const connectToMongo = require('./db.js');
var cors = require('cors')
const express = require('express')
connectToMongo();
const app = express()
const port = 5000

app.use(cors())
app.use(express.json())

app.use('/api/auth',require('./routes/auth.js'))


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})