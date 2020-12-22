export const MAKE_RESERVATION = 'MAKE_RESERVATION'
export const REMOVE_RESERVATION ='REMOVE_RESERVATION'

export const makeReservation = room => {
    return { type: MAKE_RESERVATION, room:room }
}

export const removeReservation = rid =>{
    return{type:REMOVE_RESERVATION, rid:rid}
}