import {InferActionsTypes} from "./store";
import {ProductType} from "./product-reducer";

const initialState = {
    productInBasket: [] as Array<ProductType>,
    price: 10
}
export const actions = {
    addProductToBasket: (product: ProductType) => ({type: "ADD_PRODUCT_TO_BASKET", product} as const),
    setTotalPrice: (totalPrice: number) => ({type: "SET_TOTAL_PRICE", totalPrice} as const),
    //addProductAC: (id: string, price: number, count: number) => ({type: "ADD_PRODUCT",id,price, count} as const),
    addProductAC: (id: string) => ({type: "ADD_PRODUCT", id} as const),
}


const basketReducer = (state = initialState, action: ActionsTypes): InitialState => {
    switch (action.type) {
        case "ADD_PRODUCT_TO_BASKET":
            const addProd = state.productInBasket.find(p => p.id === action.product.id)
            if (addProd) {
                action.product.count++;
            } else {
                return {...state, productInBasket: [...state.productInBasket, action.product]}
            }
            return state
        case "SET_TOTAL_PRICE":
            return {...state, price: action.totalPrice}
        case "ADD_PRODUCT": {
            const addProd = state.productInBasket.find(p => p.id === action.id)
            if (addProd) {
                addProd.count++; //= action.count//addProd.count++;
                addProd.price = addProd.price * addProd.count
            }
            return state
        }
        default:
            return state
    }
}

export default basketReducer

export type InitialState = typeof initialState
type ActionsTypes = InferActionsTypes<typeof actions>