const {BUY_CAKE} = require("./CakeTypes");

export const buyCake = (numberOfCakesToBuy = 1) => {
    return {
        type: BUY_CAKE,
        payload: numberOfCakesToBuy, // payload is the name that is usually used
        info: 'Function for buying a cake'
    }
}
