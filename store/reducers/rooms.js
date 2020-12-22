import ROOMS from '../../data/dummy-data'

const initState = {
    allRooms:ROOMS,
    availableProducts:ROOMS.filter(rm=>rm.quantity > 0),
}
export default (state=initState, action) =>{
    return state
}