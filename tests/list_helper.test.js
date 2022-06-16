const listHelper = require('../utils/list_helper')

test('dummy returns one', () => {
  const blogs = []

  const result = listHelper.dummy(blogs)
  expect(result).toBe(1)
})

describe('total likes', () => {
  test('of empty list is zero', () => {
    const result = listHelper.totalLikes([])
    expect(result).toBe(0)
  })

  const listWithOneBlog = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    }
  ]

  test('when list has only one blog, equals the likes of that', () => {
    const result = listHelper.totalLikes(listWithOneBlog)
    expect(result).toBe(5)
  })

  const listWithThreeBlogs = [
    {
      _id: '5a422aa71b54a676234d17f8',
      title: 'Go To Statement Considered Harmful',
      author: 'Edsger W. Dijkstra',
      url: 'http://www.u.arizona.edu/~rubinson/copyright_violations/Go_To_Considered_Harmful.html',
      likes: 5,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17f9',
      title: 'The Alchemist',
      author: 'Paulo Coelho',
      url: 'https://www.amazon.com/Alkymisten-Alchemist-Paulo-Coelho/dp/8776040011',
      likes: 88,
      __v: 0
    },
    {
      _id: '5a422aa71b54a676234d17fA',
      title: 'Wings of Fire',
      author: 'Tui T. Sutherland',
      url: 'https://www.amazon.com/Wings-Fire-Graphix-Box-Books/dp/1338796879/',
      likes: 7,
      __v: 0
    }
  ]

  test('of a bigger list is calculated right', () => {
    const result = listHelper.totalLikes(listWithThreeBlogs)
    expect(result).toBe(100)
  })
})