const express = require('express')
let app = express()

app.get('/', (req, res) => {
  res.send('Hello Kubernetes v2')
})

const PORT = process.env.PORT || 9000
app.listen(
  PORT,
  () => console.log('Listening')
)
