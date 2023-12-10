import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import styles from './error.module.css'

const Error404 = () => {
  const error = useRouteError()
  return (
    <div className={styles.container}>
        <h1 className={styles.title}>Upss...{ error.status }</h1>
        <p className={styles.description}>No hemos encontrado la ruta...</p>
        <p>
          { error.data  }
        </p>
        <Link to='/'>
          <button className={styles.btnBack}>
              Volver a Inicio
          </button>
        </Link>
    </div>
  )
}

export default Error404