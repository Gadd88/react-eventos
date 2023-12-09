import React from 'react'
import { useEventsData } from '../../hooks/useEventsData'
import EventItem from '../EventItem/EventItem'

const EventList = ({ searchTerm }) => {

    const { eventsData, isLoading, error } = useEventsData()

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
    if(isLoading){
        return <div>Cargando Eventos...</div>
    }
    if(error){
        return <div>Ha ocurrido un error trayendo los datos</div>
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