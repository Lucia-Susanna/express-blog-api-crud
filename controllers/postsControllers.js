const posts = require('../data/posts');

//index

const index = (req, res) => {
  res.send('Visualizzo la lista dei post')
}

//show
const show = (req,res) =>{
  res.send (`Visualizzo il post con id ${req.params.id}`)
}

//store
const store = (req,res) =>{
  res.send('Nuovo post')
}

//update
const update = (req,res)=>{
  res.send(`Modifico l'elemento con id ${req.params.id} `)
}

//modify
const modify = (req, res)=>{
  res.send(`Modifico alcune proprietà dell'elemento con id ${req.params.id}`)
}

//destroy
const destroy = (req,res)=>{
  res.send(`Elimino elemento con id ${req.params.id}`)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}