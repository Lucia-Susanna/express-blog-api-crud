const express = require('express')
const postsRouter = require('./routers/posts')
const notFound = require('./middleware/notFound')
const errorsHandler = require('./middleware/errorsHandler')

const app = express()
const port = 3000

app.use(express.json());

app.get('/', (req, res) => {
  res.send('sever dei post')
})

app.use('/posts', postsRouter);

app.use(errorsHandler)

app.use(notFound)

app.listen(port, () => {
  console.log(`sono in ascolto alla porta ${port}`)
})