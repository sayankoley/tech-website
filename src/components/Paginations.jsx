import React from 'react'
import { ACTION, useGlobalContext } from './reducer';

const Paginations = () => {
  const {state,inCrement,dispatch}=useGlobalContext()
  return (
  
    <>
      <div className="pagination-btn">
        <button onClick={()=>dispatch({type:ACTION.Decrement})} >PREV</button>
        <p>{state.page+1} of {state.nbPages}</p>
        <button onClick={inCrement}>NEXT</button>
      </div>
    </>
  );


}

export default Paginations