const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const port = 3000
app.use(bodyParser.json())

app.get('/hello', (req, res) => {
    res.send('Hello World!')
})

app.post('/employee', (req, res) => {
    req.body.id=1
    res.send(req.body)
})

app.post('/squad', (req, res) => {
    res.send(req.body)
})

app.get('/employee/:id', (req, res) => {
    res.send({
        "id": req.params.id,
        "name": "Pedro",
        "title": "Software Engineer"
      })
})

app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
})
