import React, { useState } from 'react'
export default function Form() {
    const [pacientes, setPacientes] = useState([])
    const [mascota, setMascota] = useState("")
    const [dueño, setDueño] = useState("")

    function agregarPaciente(){
      const informacion={
        mascota,
        dueño
      }
      setPacientes([...pacientes,informacion])
      
      setMascota("")
      setDueño("")
    }

    return (
        <div>
            <form className='inputForm' action="">
                <label htmlFor="mascota">Nombre Mascota </label>
                <input id='mascota' onChange={(e) => { setMascota(e.target.value) }} value={mascota} type="text" />
                <label htmlFor="">Nombre Dueño</label>
                <input onChange={(e) => { setDueño(e.target.value) }} value={dueño} type="text" />
                <label for="date">Fecha:</label>
                <input type="date" id="date" className="date"></input>
                <label for="hour">Hora</label>
                <input type="time" id="hour" name="hour"></input>
                <textarea className="message" rows="10" cols="30">
                    Sintomas
                </textarea>
                <button onClick={agregarPaciente} type='button'>Agregar</button>

            </form>
        </div>
    )
}