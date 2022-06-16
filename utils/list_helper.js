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

module.exports = {
  dummy,
  totalLikes
}