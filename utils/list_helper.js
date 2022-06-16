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

module.exports = {
  dummy,
  totalLikes,
  favoriteBlog
}