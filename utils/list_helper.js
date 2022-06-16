const _ = require('lodash');

const dummy = (blogs) => {
  return 1
}

const totalLikes = (blogs) => {
  if(blogs?.length === 0) {
    return 0
  } else if(blogs?.length === 1) {
    return Number(blogs[0]?.likes)
  } else {
    return blogs.reduce((acc, blog) => {
      return acc + Number(blog?.likes)
    }, 0)
  }
}

const favoriteBlog = (blogs) => {
  if(blogs?.length === 0) {
    return {}
  } else if(blogs?.length === 1) {
    return {
      title: blogs[0]?.title,
      author: blogs[0]?.author,
      likes: blogs[0]?.likes,
    }
  } else {
    const sortedBlogs = blogs.slice().sort((a,b) => Number(b?.likes) - Number(a?.likes))
    return {
      title: sortedBlogs[0]?.title,
      author: sortedBlogs[0]?.author,
      likes: sortedBlogs[0]?.likes,
    }
  }
}

const mostBlogs = (blogs) => {
  if(blogs?.length === 0) {
    return {}
  } else if(blogs?.length === 1) {
    return {
      author: blogs[0]?.author,
      blogs: 1,
    }
  } else {
    const authors = _.groupBy(blogs, 'author')
    return Object.entries(authors).map(([key,value]) => ({
      author: key,
      blogs: Number(value?.length)
    })).sort((a,b) => b.blogs - a.blogs)[0]
  }
}

const mostLikes = (blogs) => {
  if(blogs?.length === 0) {
    return {}
  } else if(blogs?.length === 1) {
    return {
      author: blogs[0]?.author,
      likes: blogs[0]?.likes,
    }
  } else {
    const authors = _.groupBy(blogs, 'author')
    return Object.entries(authors).map(([key,value]) => ({
      author: key,
      likes: Number(totalLikes(value))
    })).sort((a,b) => b.likes - a.likes)[0]
  }
}

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog,
  mostBlogs,
  mostLikes
}