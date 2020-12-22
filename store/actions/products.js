export const MAKE_PURCHASE = 'MAKE_PURCHASE'
export const REMOVE_PURCHASE = 'REMOVE_PURCHASE'

export const makePurchase = product => {
    return { type: MAKE_PURCHASE, product:product }
}

export const removePurchase = pid =>{
    return {type: REMOVE_PURCHASE, pid:pid}
}