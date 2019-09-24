import {ADD_QUANTITY, ADD_TO_CART, REMOVE_ITEM, SUB_QUANTITY} from '../actions/action-types/cart-actions'
import {items} from '../utilities/Items'

const initState = items

export const cartReducer = (state = initState, action) => {

    if (action.type === ADD_TO_CART) {
        let addedItem = state.items.find(item => item.id === action.id)
        let existed_item = state.addedItems.find(item => action.id === item.id)
        if (existed_item) {
            addedItem.quantity += 1
            return {
                ...state,
                total: state.total + addedItem.price,
                wholeQuantity: state.wholeQuantity + 1
            }
        } else {
            addedItem.quantity = 1;
            let newTotal = state.total + addedItem.price
            return {
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total: newTotal,
                wholeQuantity: state.wholeQuantity + 1
            }
        }
    }

    if (action.type === REMOVE_ITEM) {
        console.log(action)
        let itemToRemove = state.addedItems.find(item => item.id === action.id)
        let new_items = state.addedItems.filter(item => action.id !== item.id)
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity)
        return {
            ...state,
            addedItems: new_items,
            total: newTotal,
            wholeQuantity: state.wholeQuantity - itemToRemove.quantity
        }
    }

    if (action.type === ADD_QUANTITY) {
        let addedItem = state.addedItems.find(item => item.id === action.id)
        addedItem.quantity += 1
        let newTotal = state.total + addedItem.price
        return {
            ...state,
            total: newTotal,
            wholeQuantity: state.wholeQuantity + 1
        }
    }

    if (action.type === SUB_QUANTITY) {
        let addedItem = state.items.find(item => item.id === action.id)
        if (addedItem.quantity === 1) {
            let new_items = state.addedItems.filter(item => item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                addedItems: new_items,
                total: newTotal,
                wholeQuantity: state.wholeQuantity - 1
            }
        } else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return {
                ...state,
                total: newTotal,
                wholeQuantity: state.wholeQuantity - 1
            }
        }
    } else {
        return state
    }
}
