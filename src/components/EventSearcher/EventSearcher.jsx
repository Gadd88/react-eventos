import React, { useState } from 'react'

const EventSearcher = () => {
    
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
  
    return (
        <div>
            <label 
                htmlFor='searchedEvent'>
                Busca tu Evento
            </label>
            <input 
                type="text" 
                id='searchedEvent'
                onChange={handleInputChange}
                value={inputValue} />
        </div>
    )
}

export default EventSearcher