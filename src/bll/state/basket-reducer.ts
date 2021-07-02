import {InferActionsTypes} from "./store";
import {ProductType} from "./product-reducer";

const initialState = {
    productInBasket: [] as Array<ProductType>,
    price: 10
}
export const actions = {
    addProductToBasket: (product: ProductType) => ({type: "ADD_PRODUCT_TO_BASKET", product} as const),
    setTotalPrice: (totalPrice: number) => ({type: "SET_TOTAL_PRICE", totalPrice} as const),
}


const basketReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_BASKET":
            return {...state, productInBasket: [...state.productInBasket, action.product]}
        case "SET_TOTAL_PRICE":
            return {...state, price: action.totalPrice}
        default:
            return state
    }
}

export default basketReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>