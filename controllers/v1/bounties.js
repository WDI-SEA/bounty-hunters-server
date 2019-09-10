// Create router and reference to models
let db = require('../../models')
let router = require('express').Router()

// GET /v1/bounties
router.get('/', (req, res) => {
  db.Bounty.find()
  .then(bounties => {
    res.send(bounties)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Database asleep?' })
  })
})

module.exports = router
