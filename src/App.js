import React, { useState } from 'react'
import { Provider, connect } from 'react-redux'
import store from './store'

function Homepage() {

  const increment = () => {
    store.dispatch({type:'increment'})
  }

  const renderCounter = () => {
    return <button onClick={increment}>{store.getState().contador}</button>
  }
  
  const addUser = () => {
    const user = {name:`User ${store.getState().contador}`}
    
    store.dispatch({type:'add_user', user })
  }

  const renderUsers = () => {
    return (
      <div>
        {
          store.getState().users.map((user, index)=>
            (
            <p key={index}>{user && user.name || '?'}</p>
            )
          )
        }
        <button onClick={addUser}>Add user +</button>
      </div>
    )
  }

  return (
    <div>
      <h1>Homer page</h1>

      cont: {store.getState().contador} | qnt users: {store.getState().users.length} | {renderCounter()}
      
      {renderUsers()}
    </div>
  )
}

const Home = connect(e=>e)(Homepage)

function App() {  
  return (
    <Provider store={store}>
      <Home></Home>
    </Provider>
  )
}

export default App;