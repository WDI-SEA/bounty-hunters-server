// Require packages
let express = require('express')

// Create instance for express app
let app = express()

// Set up middleware
app.use(express.urlencoded({ extended: false }))
app.use(express.json({ limit: '50mb' }))

app.get('*', (req, res) => {
  res.status(404).send({ message: 'Not Found' })
})

app.listen(process.env.PORT || 3000, () => {
  console.log('Yee-haw')
})
