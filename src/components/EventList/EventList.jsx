import React, { useEffect, useState } from 'react'
import { API_KEY } from '../../dataApi/data'
import EventItem from '../EventItem/EventItem'

const EventList = ({ searchTerm }) => {

    const [eventsData, setEventsData] = useState([])
    const consultaApi = async () => {
        const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=${API_KEY}`)
        const result = await response.json();
        setEventsData(result._embedded.events)
    }

    useEffect(() => {
        consultaApi()
    },[])
    const handleEventClick = (id) => {
        
        console.log(id)
    }

    const renderEvents = () => {
        let eventsFiltered = eventsData
        if (searchTerm.length > 0) {
            eventsFiltered = eventsFiltered.filter(event => event.name.toLocaleLowerCase().includes(searchTerm.toLocaleLowerCase()))
        }
        return (
            eventsFiltered.map((event) => (
                <EventItem 
                    key={event.id} 
                    event={event}
                    onEventClick={handleEventClick} />
            ))
        )
    }
    
  return (
    <div>
        <h2>Lista de Eventos</h2>
        {
            renderEvents() 
        }
    </div>
  )
}

export default EventList