import React from 'react'
import EventItem from '../EventItem/EventItem'

const EventList = ({eventsData}) => {
  return (
    <div>
        <h2>Lista de Eventos</h2>
        {
            eventsData && eventsData.map((event) => (
                <EventItem key={event.id} event={event} />
            ))
        }
    </div>
  )
}

export default EventList