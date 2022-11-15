import pasta from '../../utils/imgs/pasta.png'
import sushi from '../../utils/imgs/sushi.png'
import bread from '../../utils/imgs/bread.png'
import meat from '../../utils/imgs/meat.png'


import {InferActionsTypes} from "./store";

export type ProductType = {
    id: number
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
            id: 1, img: pasta, title: "Pasta", price: 3,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: 2, img: sushi, title: "Sushi", price: 8,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: 3, img: meat, title: "Meat", price: 9,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
        {
            id: 4, img: bread, title: "Bread", price: 2,
            description: "Пакеты для ручной и автоматической фасовки сыпучих продуктов из комбинаций плёнок:", count: 1
        },
    ] as Array<ProductType>,
    productInBasket: [] as Array<ProductType>,
    price: 0
}

export const actions = {
    setProduct: () => ({type: "SET_PRODUCT"} as const),
    addProductToBasket: (id: number) => ({type: "ADD_PRODUCT_TO_BASKET", id} as const),
    setTotalPrice: (totalPrice: number) => ({type: "SET_TOTAL_PRICE", totalPrice} as const),
    addAndDeleteProductAC: (id: number, act: ActType) => ({type: "ADD_DELETE_PRODUCT", id, act} as const),
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
                action.act === 'plus'? addProd.count++ : addProd.count--;
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
