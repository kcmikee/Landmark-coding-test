export const BOOK_ENTRY = 'BOOK_ENTRY'
export const REMOVE_ENTRY ='REMOVE_ENTRY'

export const bookEntry = entry => {
    return { type: BOOK_ENTRY, entry:entry }
}

export const removeEntry = eid =>{
    return{type:REMOVE_ENTRY, eid:eid}
}