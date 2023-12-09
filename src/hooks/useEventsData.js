import React, { useState, useEffect } from 'react'


export const useEventsData = () => {
    const API_KEY = '0sux7ARneFUmDm510ypGxOb92G2uatvg'
    const API_SECRET = 'y3uARfLak63W2Lvo'
    const APP_NAME = 'gadd88-App'
    
    const [eventsData, setEventsData] = useState([])
    const [isLoading, setIsLoading] = useState(true)
    const [error, setError] = useState('')

    const consultaApi = async () => {
        try {
            setIsLoading(true)
            const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events.json?countryCode=MX&apikey=${API_KEY}`)
            const result = await response.json();
            setEventsData(result._embedded.events)
        } catch (error) {
            setError(error)
        } finally{
            setIsLoading(false)
        }
    }
    useEffect(() => {
        consultaApi()
    },[])

    return {
        eventsData,
        isLoading,
        error
    }
}
