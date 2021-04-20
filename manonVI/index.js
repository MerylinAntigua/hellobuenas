const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('<h1 style = "color: pink;">Home</h1>');
})

app.get('/productos', (req, res) => {
    res.send(`<hi style = "color: violet;">Bienvenido a los productos</h1>`);
})

app.get('/contactos', (req, res) => {
    res.send(`<hi style = "color: violet;">Bienvenido a contactos</h1>`);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

