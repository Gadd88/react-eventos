import React, { useEffect } from 'react'
import { useNavigate } from 'react-router-dom'
import { useEventsData } from '../../hooks/useEventsData'
import EventItem from '../EventItem/EventItem'

const EventList = ({ searchTerm, allEvents }) => {
    const navigate = useNavigate()

    const handleEventClick = (id) => {
        navigate(`/detail/${id}`)
    }
    const { eventsData, consultaApi } = useEventsData()
    let searchedEvent

    useEffect(() => {
      consultaApi(searchTerm)
    }, [searchTerm])
    searchedEvent = eventsData
    
    const renderEvents = () => {
        let eventsFiltered = allEvents
        if(searchedEvent?.length > 0) eventsFiltered = searchedEvent
        return (
            eventsFiltered.length > 0 &&
            eventsFiltered?.map((event) => (
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