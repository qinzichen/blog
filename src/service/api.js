const database = require('./database.json')

const fetch = {
    getBlogs() {
        return new Promise((a, b) => {
            let blogs = database.blogs;
            if (blogs)
                a(blogs)
            else
                b({
                    code: -1,
                    message: 'error'
                })
        })
    },
    getBlogsByTagId(tagId) {
        let blogs = database.blogs;
        let res = blogs.filter(blog => blog.tag.includes(tagId))
        return new Promise((a, b) => {
            if (res)
                a(res)
            else
                b({
                    code: -1,
                    message: 'error'
                })
        })
    },
    getTags() {
        return new Promise((a, b) => {
            a(database.tags)
        })
    },
    getTagsById(tagIdArray) {
        let tags = database.tags;
        let res = tags.filter(item=>tagIdArray.includes(item.id))
        return new Promise((a, b) => {
            if (res)
                a(res)
            else
                b({
                    code: -1,
                    message: 'error'
                })
        })
    },
    getArticleById(id) {
        let res = database.blogs.find(blog => blog.id === id)
        return new Promise((a, b) => {
            if (res)
                a(res)
            else
                b({
                    code: -1,
                    message: 'error'
                })
        })
    }
}
export default fetch