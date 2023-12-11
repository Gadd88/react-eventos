import { Link, useParams } from 'react-router-dom'
import { useEventsData } from '../../hooks/useEventsData'

const EventDetailView = () => {
    const { eventId } = useParams()

    const { eventsData } = useEventsData(eventId)
    
    return (
        <div>
            <h1>{eventsData[0]?.name}</h1>
            <button>
                <Link to='/'>Volver</Link>
            </button>
        </div>
    )
}

export default EventDetailView