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
import InitialGoodsCatalogRequest from './slices/initialGoods.ts'
import CatalogCategories from './slices/catalogCategories.ts'
import FavoriteGoods from "./slices/favoriteGoods.ts";
import CartSlice from './slices/cartSlice.ts'


//Связывание стора и персиста
const rootReducer = combineReducers({
    goods: InitialGoodsCatalogRequest,
    categories: CatalogCategories,
    favorite: FavoriteGoods,
    cart: CartSlice,
    [catalog.reducerPath]: catalog.reducer
})
const persistConfig = {
    key: 'root',
    storage,
    blacklist: ['categories', 'catalog', 'goods']
}
const persistedReducer = persistReducer(persistConfig, rootReducer)


export const store = configureStore({
    reducer: persistedReducer,
    middleware: (getDefaultMiddleware) =>
        getDefaultMiddleware({
            serializableCheck: {
                ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
            },
        }).concat(catalog.middleware),
})
export const persist = persistStore(store)
setupListeners(store.dispatch)
