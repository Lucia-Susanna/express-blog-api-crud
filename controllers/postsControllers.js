const posts = require('../data/posts');

//index

const index = (req, res) => {
  let postsList = posts

  res.json(postsList)
}

//show
const show = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)

  res.json(post)
}

//store
const store = (req, res) => {
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
const update = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  for (let key in req.body) {
    post[key] = req.body[key]
  }

  res.json(post)
}

//modify
const modify = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)
  for (let key in req.body) {
    post[key] = req.body[key]
  }

  res.json(post)
}

//destroy
const destroy = (req, res) => {
  const post = posts.find(post => post.id == req.params.id)

  posts.splice(posts.indexOf(post), 1)
  res.sendStatus(204)
}

module.exports = {
  index,
  show,
  store,
  update,
  modify,
  destroy
}