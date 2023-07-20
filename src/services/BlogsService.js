import { AppState } from "../AppState"
import { Blog } from "../models/BlogModel"
import { api } from "./AxiosService"

class BlogsService {
    async getBlogs() {
        const res = await api.get('api/blogs')
        const blogs = res.data.map(blog => new Blog(blog))
        AppState.blogs = blogs


    }

    setActiveBlog(blog) {
        AppState.activeBlog = blog
    }

}
export const blogsService = new BlogsService()