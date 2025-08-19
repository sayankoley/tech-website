import { useContext } from "react"
import { createContext } from "react"

export const Initial = {
    loading: false,
    query: "css",
    dequery: "css",
    hits: [],
    page: 0,
    nbPages: 0

}

export const ACTION = {
    SETloading: "Setloading",
    FETCHEDdata: "fetcheddata",
    SEARCH: "SEARCHQUERY",
    DESEARCH: "DESEARCHQUERY",
    REMOVED: "REMOVED",
    Increment: "Increment",
    Decrement: "decrement"
}
export const reducer = (state, action) => {
    switch (action.type) {
        case ACTION.SETloading:
            return {
                ...state,
                loading: true
            }

        case ACTION.FETCHEDdata:
            return {
                ...state,
                hits: action.payload.data,
                nbPages: action.payload.nbPages,
                loading: false
            }
        case ACTION.SEARCH:
            return {
                ...state,
                query: action.payload
            }

        case ACTION.DESEARCH:
            return {
                ...state,
                dequery: action.payload
            }

        case ACTION.REMOVED:
            const filters = [...state.hits].filter((cur) => cur.objectID !== action.payload)
            //console.log(filters)
            return {
                ...state,
                hits: filters
            }
        case ACTION.Increment:
            const newpage = state.page + 1 >= state.nbPages ? 0 : state.page + 1
            return {
                ...state,
                page: newpage
            }
            case ACTION.Decrement:
                let prevpage=state.page-1 <= 0 ? 0 : state.page - 1
                return{
                    ...state,
                    page:prevpage
                }


        default: return state
    }
}

export const Appcontext = createContext();
export const useGlobalContext = () => useContext(Appcontext)