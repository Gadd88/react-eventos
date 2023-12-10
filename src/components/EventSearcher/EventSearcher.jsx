import React, { useState, forwardRef, useImperativeHandle } from 'react'

const EventSearcher = forwardRef(({onSearch}, ref) => {
    //usando forwardRef, podemos pasar el elemento de referencia hacia el padre donde definimos la referencia, y por medio de useImperativeHandle podemos elegir directamente que valor o parte del elemento en cuestion es lo que queremos compartir, en este caso el valor del input.
    
    const [inputValue, setInputValue] = useState('')

    const handleInputChange = (e) => {
        setInputValue(e.target.value)
    }
    const handleInputKeyDown = (e) => {
        if(e.key === 'Enter'){
            onSearch(inputValue)
        }
    }
    useImperativeHandle( ref, () => {
        inputValue
      }, [inputValue])
  
    return (
        <div
            ref={ref}
            style={{
                marginBottom: 14,
                maxWidth: '500px',
                margin: 'auto',
                height: '60px',
                display: 'flex',
                justifyContent: 'space-evenly',
                alignItems: 'center'
            }}>
            <label 
                htmlFor='searchedEvent'
                style={{
                    fleX: 1,
                }}>
                Busca tu Evento
            </label>
            <input 
                type="text" 
                id='searchedEvent'
                onChange={handleInputChange}
                value={inputValue}
                onKeyDown={handleInputKeyDown}
                style={{
                    padding: 10, 
                    borderRadius: 10, 
                    outline: 'none', 
                    border: 0,
                    width: '300px',
                    caretColor: 'red'
                }}/>
        </div>
    )
})

EventSearcher.displayName = 'EventSearcher'

export default EventSearcher