import {createApi, fetchBaseQuery} from "@reduxjs/toolkit/query/react";
import {API_CATALOG_URL, API_URL} from "../../constants/api.ts";
import {IItem} from "../../types/catalog/items.ts";

export const catalog = createApi({
    reducerPath: 'catalog',
    baseQuery: fetchBaseQuery({baseUrl: API_URL}),
    endpoints: (build) => ({
        getAllCatalog: build.query<IItem[], {limit: number; category: string; search: string}>({
            query: (body) => {
                if(body.search && body.category){
                    return `${API_CATALOG_URL}?category=${body.category}&q=${body.search}&_limit=${body.limit}`
                }
                if(body.category){
                    return `${API_CATALOG_URL}?category=${body.category}&_limit=${body.limit}`
                }
                if(body.search){
                    return `${API_CATALOG_URL}?q=${body.search}&_limit=${body.limit}`
                }
                return `${API_CATALOG_URL}?_limit=${body.limit}`
            }
        }),
        getItemCatalog: build.query<IItem[], string | number | undefined>({
            query: (itemId) => `${API_CATALOG_URL}?id=${itemId}`
        }),
        getAllCategory: build.query<IItem[], string | undefined>({
            query: (itemCategory) => {
                if(itemCategory?.length){
                    return `${API_CATALOG_URL}?category=${itemCategory}`
                }
                return `${API_CATALOG_URL}`
            }
        })
    })
})