import {catalog} from "./api-list/catalog.ts";
import {blogApi} from "./api-list/blog.ts";

export const {
    useGetAllCatalogQuery,
    useGetItemCatalogQuery,
    useGetAllCategoryQuery,
} = catalog

export const {
    useGetAllBlogPostsQuery,
    useGetBlogPostQuery
} = blogApi