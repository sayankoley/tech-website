import React from 'react'
import { useGlobalContext } from './reducer'

export const Story = () => {
    const{state,removeId}=useGlobalContext()
    
  return (
    <>
     <div className="stories-div">

        {state.hits.length===0 &&<div className='nt'>No Articles Found..</div>} 
      
      {state.hits?.map((cur)=>{
        return(
<div className="card" key={cur.objectID}>
        <h2>{cur.title}</h2>
        <p>
          By <span>{cur.author}</span> | <span>{cur.num_comments}</span> comments
        </p>
        <div className="card-button">
          <a href={cur.url} target="_blank" rel="noreferrer">
            Read More
          </a>
          <a onClick={(e)=>removeId(e,cur.objectID)} href="#">Remove</a>
        </div>
      </div>
        )
      })}

      
    </div>
    </>
  )
}
