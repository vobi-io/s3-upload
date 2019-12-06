const express = require('express')
const bodyParser = require('body-parser')
const cors = require('cors')

const app = express()
app.use(cors())
app.use(bodyParser.json())

require('./upload')(app)


app.listen(8080, () => console.log('Listening on port 8000'))
