
import { useEffect } from 'react'
import './App.css'
import Container from './Container'
import { useReducer } from 'react'
import { ACTION, Appcontext, Initial, reducer } from './components/reducer'



function App() {
  const [state, dispatch] = useReducer(reducer, Initial)
  
  const Api = "https://hn.algolia.com/api/v1/"
  const getData = (api) => {
    dispatch({ type: ACTION.SETloading })
    fetch(api)
      .then((res) => res.json())
      .then((data) => dispatch({ type: ACTION.FETCHEDdata, payload: { data: data.hits, nbPages: data.nbPages } }))
      .catch((er) => console.log(er))
  }
  useEffect(() => {
    getData(`${Api}search?query=${state.dequery}&page=${state.page}`)
  }, [state.dequery,state.page])

//  Removepost
const removeId=(e,id)=>{
   e.preventDefault(); 

  dispatch({type:ACTION.REMOVED,payload:id})
}
// increment
const inCrement=(e)=>{
  e.preventDefault()
  dispatch({type:ACTION.Increment})
}
  return (
    <>
      <Appcontext.Provider value={{state,dispatch,removeId,inCrement}}>
        <Container></Container>
      </Appcontext.Provider>

    </>
  )
}

export default App


