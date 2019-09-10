// Require packages
let cors = require('cors')
let express = require('express')

// Create instance for express app
let app = express()

// Set up middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))
app.use(cors())

// Include the controllers
app.use('/v1/bounties', require('./controllers/v1/bounties'))

// Catch all route (404: Not found)
app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Yee-haw')
})
