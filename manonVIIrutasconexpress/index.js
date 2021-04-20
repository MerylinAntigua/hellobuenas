const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Estas en inicio!')
})

app.get('/productos', (req, res) => {
    res.send('Estas en productos!')
  })

  app.get('/contactos', (req, res) => {
    res.send('Estas en contactos!')
  })  

  app.get('/nosotros', (req, res) => {
    res.send('Estas en nosotros!')
  })    

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})