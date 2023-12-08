import React from 'react'

const EventItem = ({event}) => {
    const { id, name, images, dates, info } = event
  return (
    <div>
        <h3>{name}</h3>
        <figure>
            <picture>
                <img src={images[1].url} alt={id} width={400} height={220} />
            </picture>
        </figure>
        <p> <strong>Fecha:</strong>
            <span> <em>{new Date(dates.start.localDate).toLocaleString("es-ar", {weekday: "long", day: "2-digit" ,month: 'short', year:'numeric'})}</em></span>
        </p>
        <details>
            <summary>Presiona aquí para ver mas información del evento</summary>
            <p>{info}</p>    
        </details>
    </div>
  )
}

export default EventItem