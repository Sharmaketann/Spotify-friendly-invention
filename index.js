const express = require('express')

const app = express()

app.get('/', (req, res) => {
  const person = {
    name: 'Sachin',
    isAwesome: true,
  }
  res.json(person)
})

app.get('/awesome-generator', (req, res) => {
  const { name, isAwesome } = req.query
  res.send(`${name} is ${JSON.parse(isAwesome) ? 'really' : 'not'} awesome`)
})
// Input : http://localhost:8080/awesome-generator?name=%F0%9F%98%8A&isAwesome=false
// Output : 😊 is not awesome

const port = 8080

app.listen(port, () => {
  console.log(`Express listening at https://localhost:${port}`)
})
