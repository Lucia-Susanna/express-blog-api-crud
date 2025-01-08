const posts = require('../data/posts');

//index

const index = (req, res) => {
  let postsList = posts

  res.json(postsList)
}

//show
const show = (req, res) =>{
  const post = posts.find(post => post.id == req.params.id)

  res.json(post)
}

//store
const store = (req, res) =>{
  const id = posts.at(-1).id + 1;
  const newPost = {
    id,
    ...req.body
  }

  posts.push(newPost);

  res.status(201);
  res.json(posts);
}

//update
const update = (req, res)=>{
  res.send(`Modifico l'elemento con id ${req.params.id} `)
}

//modify
const modify = (req, res)=>{
  res.send(`Modifico alcune proprietà dell'elemento con id ${req.params.id}`)
}

//destroy
const destroy = (req, res)=>{
  const post = posts.find(post => post.id == req.params.id)

  posts.splice(posts.indexOf(post), 1)
  res.status(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}