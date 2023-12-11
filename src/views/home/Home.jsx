import { useEffect, useRef, useState } from 'react'
import EventList from '../../components/EventList/EventList'
import EventSearcher from '../../components/EventSearcher/EventSearcher'
import { useEventsData } from '../../hooks/useEventsData'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('')  
    const inputRef = useRef()
    const { eventsData, isLoading, error } = useEventsData()
    
    return (
        <div>
            <EventSearcher 
                onSearch={setSearchTerm}
                ref={inputRef}/>
            {
                isLoading 
                ? <div>Loading...</div> 
                : <EventList
                    searchTerm={searchTerm}
                    allEvents={eventsData}/>
            }
            {
                error 
                ? <div>Ha ocurrido un error trayendo los datos</div>
                : null
            }
            
        </div>
  )
}

export default Home