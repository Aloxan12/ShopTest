import {v1} from "uuid";
import {InferActionsTypes} from "./store";

export type ProductType = {
    id: string
    img: string
    title: string
    price: number
    description: string
    count: number
}
const initialState = {
    product: [
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 3,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:",count:1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 8,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:",count:1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 9,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:",count:1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 2,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:",count:1
        },
    ] as Array<ProductType>
}
export const actions = {
    setProduct:()=>({type:"SET_PRODUCT"} as const),
    filterProductToBasket:(id: string, )=>({type:"FILTER_PRODUCT_TO_BASKET", id} as const),
}


const productReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {...state, product: {...state.product}}
        case "FILTER_PRODUCT_TO_BASKET":{
            const inBasket = state.product.find(p=> p.id === action.id)
            if(inBasket){
                inBasket.count++;
            }
            return {...state}
        }
        default:
            return state
    }
}

export default productReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
