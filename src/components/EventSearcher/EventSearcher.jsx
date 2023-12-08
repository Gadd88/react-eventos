import React, { useState } from 'react'

const EventSearcher = ({onSearch}) => {
    
    const [inputValue, setInputValue] = useState('')
    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSearch(inputValue)
        }
        
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
                value={inputValue}
                onKeyDown={handleInputKeyDown} />
        </div>
    )
}

export default EventSearcher