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

// GET /v1/bounties/:id
router.get('/:id', (req, res) => {
  db.Bounty.findById(req.params.id)
  .then(bounty => {
    if (bounty) {
      res.send(bounty)
    }
    else {
      res.status(404).send({ message: 'Resource not located' })
    }
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Service Unavailable' })
  })
})

// POST /v1/bounties
router.post('/', (req, res) => {
  db.Bounty.create(req.body)
  .then(bounty => {
    res.status(201).send(bounty)
  })
  .catch(err => {
    console.log('Error while creating', err)
    if (err.name === 'ValidationError') {
      res.status(406).send({ message: 'Validation Error' })
    }
    else {
      res.status(503).send({ message: 'Database or Server Error' })
    }
  })
})

// PUT /v1/bounties/:id
router.put('/:id', (req, res) => {
  db.Bounty.findOneAndUpdate({
    _id: req.params.id
  },
  req.body,
  {
    new: true
  })
  .then(editedBounty => {
    res.send(editedBounty)
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Server Error' })
  })
})

// DELETE /v1/bounties
router.delete('/', (req, res) => {
  db.Bounty.remove()
  .then(() => {
    res.send({ message: 'We did it?' })
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Server Error' })
  })
})

// DELETE /v1/bounties
router.delete('/:id', (req, res) => {
  db.Bounty.findByIdAndDelete(req.params.id)
  .then(() => {
    res.status(204).send()
  })
  .catch(err => {
    console.log(err)
    res.status(503).send({ message: 'Server Error' })
  })
})

module.exports = router
