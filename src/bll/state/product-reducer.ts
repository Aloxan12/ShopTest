import {v1} from "uuid";
import {InferActionsTypes} from "./store";
import {log} from "util";

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
            id: v1(), img: "https://sushichefarts.by/upload/iblock/ba7/ba79b531e47dfa1bec62fce7d1817916.jpg", title: "Sushi", price: 8,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: v1(), img: "https://article.innovadatabase.com/articleimgs/article_images/637393054641064736meat%20types%20[800x800].jpg", title: "Meat", price: 9,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: v1(), img: "https://amandascookin.com/wp-content/uploads/2009/01/italian-bread-680-500x500.jpg", title: "Bread", price: 2,
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
    checkoutBasket: (baskets: ProductType[]) => ({type: "CHECKOUT_BASKETS", baskets} as const),
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
        case "ADD_DELETE_PRODUCT":
            const addProd = state.productInBasket.find(p => p.id === action.id)
            const startPrice = state.product.find(p => p.id === action.id)
            if (addProd && startPrice) {
                action.act==='plus'? addProd.count++ : addProd.count--;
                addProd.price = startPrice.price * addProd.count
            }
            const filterBasket = state.productInBasket.filter(p=> p.count > 0)
            return {...state, productInBasket: [...filterBasket]}
        case "CHECKOUT_BASKETS":{
            console.log(JSON.stringify(action.baskets))
            return state
        }
        default:
            return state
    }
}

export default productReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>
