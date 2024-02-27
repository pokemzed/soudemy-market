import {configureStore, combineReducers} from "@reduxjs/toolkit";
import {catalog} from "../api/api-list/catalog.ts";
import {setupListeners} from "@reduxjs/toolkit/query";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER
} from 'redux-persist'
import storage from 'redux-persist/lib/storage'
// Reducers
import initialGoodsCatalogRequest from './slices/initialGoods.ts'
import initialPosts from "./slices/initialPosts.ts";
import catalogCategories from './slices/catalogCategories.ts'
import favoriteGoods from "./slices/favoriteGoods.ts";
import cartSlice from './slices/cartSlice.ts'
import blogPost from "./slices/blogPost.ts";
import authSlice from "./slices/authSlice.ts";
import {blogApi} from "../api/api-list/blog.ts";


//Связывание стора и персиста
const rootReducer = combineReducers({
    goods: initialGoodsCatalogRequest,
    categories: catalogCategories,
    favorite: favoriteGoods,
    cart: cartSlice,
    posts: initialPosts,
    blogPost,
    auth: authSlice,
    [catalog.reducerPath]: catalog.reducer,
    [blogApi.reducerPath]: blogApi.reducer
})
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['categories', 'catalog']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(catalog.middleware, blogApi.middleware),
})
export const persist = persistStore(store)
setupListeners(store.dispatch)
