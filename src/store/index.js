import { createStore } from 'redux'

const reducer = (state={contador:1, users: []}, action) => {
    if(action.type === 'add_user')
        return {...state, users: [...state.users, action.user]}
    if(action.type === 'increment') 
        return {...state, contador: state.contador+1}
    return state
}

const store = createStore(reducer)
// store.subscribe(()=>console.log('updated state', store.getState()))

export default store;