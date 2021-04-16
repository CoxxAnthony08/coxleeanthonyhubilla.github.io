import { ADD_PERSON } from './actionCreator'
export const globalContext = {
    people: []
}

export const reducer = (state, action) => {
    const {type, payload} = action
    switch(type){
        case ADD_PERSON:
            const newPeople = [...state.globalContext.people, payload]
            return {...state.globalContext, people:newPeople}
        default:
            throw new Error('Type Error')
    }
}