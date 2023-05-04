import React from 'react'
import './paciente.css'

export default function Paciente({nombre,dueno}) {
  return (
    <div>
        <h1>Nombre:{nombre}</h1>
        <h2>Dueno:{dueno}</h2>
    </div>
  )
}
