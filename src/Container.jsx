import { Footer } from './components/Footer'
import Paginations from './components/Paginations'
import { useGlobalContext } from './components/reducer'
import { Search } from './components/Search'
import { Story } from './components/Story'

const Container = () => {
     const {state}=useGlobalContext()
    return (
        <>
            <Search></Search>
             {state.loading ? (<div className="loader"></div>):(<>
             <Paginations></Paginations>
            <Story></Story>
             </>)}
             <Footer></Footer>
            
        </>

    )
}

export default Container