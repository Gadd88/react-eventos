import React from 'react'
import { Link } from 'react-router-dom';
import './Eventitem.scss'

const EventItem = ({event, onEventClick}) => {
    const handleEventItemClick = (event) => {
        event.stopPropagation();
        onEventClick(id)
    }
    const { id, name, images, dates, info } = event
    return (
        <div 
            className='event-item-container'>
            <figure className='event-item-img-container'>
                <picture>
                    <img src={images[1].url} alt={id} width={400} height={220} />
                </picture>
            </figure>
            <div className="event-item-info-container">
                <h3>{name}</h3>
                <p className='event-item-date'> 
                    <strong>Fecha:</strong>
                    <span> <em>{new Date(dates.start.localDate).toLocaleString("es-ar", {weekday: "long", day: "2-digit" ,month: 'short', year:'numeric'})}</em></span>
                </p>
                <p className='event-item-info-parr'>{info}</p>
                <button 
                    className='event-item-btn'
                    onClick={(event) => handleEventItemClick(event)}>
                        {/* <Link to={`/detail/${id}`}>
                            Ver mas
                        </Link>  */}
                        Ver Mas
                </button>
            </div>
        </div>
  )
}

export default EventItem