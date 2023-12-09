import React, { useState } from 'react'
import { useForm } from 'react-hook-form'

const SignUpForm = () => {
    const { register, handleSubmit, reset, formState: { errors } } = useForm()
    
    const handleFormSubmit = (data) => {
        // e.preventDefault()
        // const formData = new FormData(e.currentTarget)
        // const formObject = Object.fromEntries(formData.entries())
        console.log(data)
        console.log(errors)
    }
    const handleFormReset = () => {
        // document.getElementById('signUpForm').reset()
        reset()
    }
    
    return (
        <form 
            style={{display: 'flex', flexDirection: 'column'}}
            onSubmit={handleSubmit(handleFormSubmit)}
            id='signUpForm'>
            <label htmlFor="name">Nombre</label>
            <input 
                type="text"
                name='name'
                id='name'
                {...register('name', {required:true})}
                 />
            <label htmlFor="age">Edad</label>
            <input 
                type="number" 
                name="age" 
                id="age"
                {...register('age', {required:true})}
                />
            <label htmlFor="address">Dirección</label>
            <input 
                type="text"
                name='address'
                id='address'
                {...register('address', {required:true})}
                 />
            <label htmlFor="zipCode">Codigo Postal</label>
            <input 
                type="text"
                id='zipCode'
                name='zipCode'
                {...register('zipCode', {required:true})}
                 />
            <label htmlFor="email">Email</label>
            <input 
                type="email" 
                name="email" 
                id="email"
                {...register('email', {required:true})}
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