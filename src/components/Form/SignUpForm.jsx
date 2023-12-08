import React, { useState } from 'react'

const SignUpForm = () => {
    const handleFormSubmit = (e) => {
        e.preventDefault()
        const formData = new FormData(e.currentTarget)
        const formObject = Object.fromEntries(formData.entries())
        console.log(formObject)
    }
    const handleFormReset = () => {
        document.getElementById('signUpForm').reset()
    }
    
    return (
        <form 
            style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={handleFormSubmit}
            id='signUpForm'>
            <label htmlFor="name">Nombre</label>
            <input 
                type="text"
                name='name'
                id='name'
                required
                 />
            <label htmlFor="age">Edad</label>
            <input 
                type="number" 
                name="age" 
                id="age"
                required 
                />
            <label htmlFor="address">Dirección</label>
            <input 
                type="text"
                name='address'
                id='address'
                required
                 />
            <label htmlFor="zipCode">Codigo Postal</label>
            <input 
                type="text"
                id='zipCode'
                name='zipCode'
                required
                 />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                required 
                />
            <div className="buttons">
                <button
                    type='submit'>enviar</button>
                <button
                    type='button' onClick={handleFormReset}>reset</button>

            </div>
        </form>
    )
}

export default SignUpForm