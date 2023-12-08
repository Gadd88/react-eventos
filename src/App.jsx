import { useEffect, useState } from 'react'
import EventList from './components/EventList/EventList';
import EventSearcher from './components/EventSearcher/EventSearcher';
import { API_KEY } from './dataApi/data'

function App() {
  
  const [eventsData, setEventsData] = useState([])
  const consultaApi = async () => {
    const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=${API_KEY}`)
    const result = await response.json();
    setEventsData(result._embedded.events)
  }

  useEffect(() => {
    consultaApi()
  },[])
  return (
    <>
      <EventSearcher />
      <EventList 
        eventsData={eventsData}/>
    </>
  )
}

export default App
