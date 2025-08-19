import React from 'react'
import { ACTION, useGlobalContext } from './reducer'
import { useEffect } from 'react'



export const Search = () => {
    const { state, dispatch } = useGlobalContext()
    useEffect(() => {
        let timer = setTimeout(() => {
            dispatch({type:ACTION.DESEARCH,payload:state.query})

        },1000)
        return () => {
            clearTimeout(timer)
        }

    }, [state.query,dispatch])
  
    return (
        <>
            <h1>Sayan Creation Tech Website</h1>
            <form>
                <div>
                    <input
                        type="text"
                        value={state.query}
                        onChange={(e) => dispatch({ type: ACTION.SEARCH, payload: e.target.value })}
                        placeholder="search here"
                    />
                </div>
            </form>
        </>
    )
}
