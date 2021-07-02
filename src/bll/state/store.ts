import {combineReducers, createStore} from 'redux';
import productReducer from "./product-reducer";
import basketReducer from "./basket-reducer";

// объединяя reducer-ы с помощью combineReducers,
// мы задаём структуру нашего единственного объекта-состояния
const rootReducer = combineReducers({
    product: productReducer,
    basket: basketReducer
})
// непосредственно создаём store
export const store = createStore(rootReducer);
// определить автоматически тип всего объекта состояния
export type AppRootStateType = ReturnType<typeof rootReducer>

export type InferActionsTypes<T> = T extends { [keys: string]: (...args: any[]) => infer U } ? U : never
// @ts-ignore
window.store = store;
