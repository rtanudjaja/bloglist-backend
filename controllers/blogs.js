const blogsRouter = require('express').Router()
const Blog = require('../models/blogs')
const User = require('../models/user')

blogsRouter.get('/', async (request, response) => {
  const blogs = await Blog.find({}).populate('user', { username: 1, name: 1 })
  response.json(blogs)
})

blogsRouter.post('/', async (request, response, next) => {
  const usersAtStart = await User.find({})
  // const user = await User.findById(body.userId)
  const user = usersAtStart[1]

  const blog = new Blog({
    title: request.body.title,
    author: request.body.author,
    url: request.body.url,
    likes: request.body.likes,
    user: user.id
  })
  if(!blog.title && !blog.url) {
    return response.sendStatus(400)
  }
  if(!blog.likes) {
    blog.likes = 0
  }
  try {
    const result = await blog.save()
    user.blogs = user.blogs.concat(result.id)
    await user.save()
    response.status(201).json(result)
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.delete('/:id', async (request, response, next) => {
  try {
    await Blog.findByIdAndRemove(request.params.id)
    response.status(204).end()
  } catch (exception) {
    next(exception)
  }
})

blogsRouter.put('/:id', async (request, response, next) => {
  const body = request.body
  const blog = {
    title: body.title,
    author: body.author,
    url: body.url,
    likes: body.likes,
  }

  try {
    const updateBlog = await Blog.findByIdAndUpdate(request.params.id, blog, { new: true })
    response.json(updateBlog.toJSON())
  } catch (exception) {
    next(exception)
  }
})

module.exports = blogsRouter