import { useRef, useState } from 'react'
import EventList from '../components/EventList/EventList'
import EventSearcher from '../components/EventSearcher/EventSearcher'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')  
    const inputRef = useRef()
    return (
        <div>
            <EventSearcher 
                onSearch={setSearchTerm}
                ref={inputRef}/>
            <EventList
                searchTerm={searchTerm}/>
        </div>
  )
}

export default Home