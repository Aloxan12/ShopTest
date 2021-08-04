import {combineReducers, createStore} from 'redux';
import productReducer from "./product-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    product: productReducer,
})

let preloadedState;
const persistedTodosString = localStorage.getItem('state')
if(persistedTodosString){
    preloadedState = JSON.parse(persistedTodosString)
}

// непосредственно создаём store
export const store = createStore(rootReducer, preloadedState);

store.subscribe(()=>{
    localStorage.setItem('state', JSON.stringify(store.getState()))
    localStorage.setItem('productInBasket', JSON.stringify(store.getState().product.productInBasket))
})

// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
// @ts-ignore
window.store = store;
