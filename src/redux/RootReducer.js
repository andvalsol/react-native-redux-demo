import {combineReducers} from "redux";
import cakeReducer from "./cakes/CakeReducer";
import iceCreamReducer from "./iceCream/IcecreamReducer";

const rootReducer = combineReducers({
    cake: cakeReducer,
    iceCream: iceCreamReducer
})

export default rootReducer
