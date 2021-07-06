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
export type ActType = 'plus' | 'minus'
const initialState = {
    product: [
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 3,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 8,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 9,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: v1(), img: "https://ptk-sp.ru/d/upakovka-dlya-spagetti-makfa-2.jpg", title: "Pasta", price: 2,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
    ] as Array<ProductType>,
    productInBasket: [] as Array<ProductType>,
    price: 0
}

export const actions = {
    setProduct: () => ({type: "SET_PRODUCT"} as const),
    addProductToBasket: (id: string) => ({type: "ADD_PRODUCT_TO_BASKET", id} as const),
    setTotalPrice: (totalPrice: number) => ({type: "SET_TOTAL_PRICE", totalPrice} as const),
    addAndDeleteProductAC: (id: string, act: ActType) => ({type: "ADD_DELETE_PRODUCT", id, act} as const),
    filterCountProductAC: (count: number) => ({type: "FILTER_COUNT_PRODUCT", count} as const),
}


const productReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "SET_PRODUCT":
            return {...state, product: state.product}
        case 'ADD_PRODUCT_TO_BASKET': {
            const copyProduct:Array<ProductType> = JSON.parse(JSON.stringify(state.product))
            const addProd = copyProduct.filter(p => p.id === action.id)
            return {...state, productInBasket: [...state.productInBasket, ...addProd]}
        }
        case "SET_TOTAL_PRICE":
            return {...state, price: action.totalPrice}
        case "FILTER_COUNT_PRODUCT":
            return {...state, productInBasket: state.productInBasket}
        case "ADD_DELETE_PRODUCT":
            const addProd = state.productInBasket.find(p => p.id === action.id)
            const startPrice = state.product.find(p => p.id === action.id)
            if (addProd && startPrice) {
                action.act==='plus'? addProd.count++ : addProd.count--;
                addProd.price = startPrice.price * addProd.count
            }
            return {...state, productInBasket: [...state.productInBasket]}
        default:
            return state
    }
}

export default productReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
