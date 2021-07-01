const express = require('express')
const router = express.Router()

router.route('/')
  .get((req, res) => {
    res.send('hello curricula')
  })
  .post((req, res) => {
    res.send('got a post request')
  })

router.route('/:id')
  .get((req, res) => {
    res.send(req.params)
  })
  .patch((req, res) => {
    res.send('got a post request')
  })
  .delete((req, res) => {
    res.send('delete a post request')
  })

module.exports = router
