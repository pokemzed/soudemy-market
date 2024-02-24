import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_BLOG_POST_URL, API_URL} from "../../constants/api.ts";
import {IBlogPost} from "../../types/blog.ts";

export const blogApi = createApi({
    reducerPath: 'blogApi',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: build => ({
        getAllBlogPosts: build.query<IBlogPost[], {limitOrder: number; category: string; search: string}>({
            query: (body) => {
                if(body.category && body.search){
                    return `${API_BLOG_POST_URL}?category=${body.category}&q=${body.search}&_limit=${body.limitOrder}`
                }
                if(body.category){
                    return `${API_BLOG_POST_URL}?category=${body.category}&_limit=${body.limitOrder}`
                }
                if(body.search){
                    return `${API_BLOG_POST_URL}?q=${body.search}&_limit=${body.limitOrder}`
                }
                return API_BLOG_POST_URL
            }
        }),
        getBlogPost: build.query<IBlogPost[], string>({
            query: (postId) => `${API_BLOG_POST_URL}?id=${postId}`
        })
    })
})