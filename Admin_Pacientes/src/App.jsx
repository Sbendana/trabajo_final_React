import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Form from './Form'
import Paciente from './Paciente'

function App() {
  const [pacientes, setPacientes] = useState([])

  return (
    <div className='body'>
      <div className='formcss'>
         <Form 
         pacientes={pacientes} 
         setPacientes={setPacientes}/>
      </div>
      <div>
          {pacientes.map((paciente)=>{
            return <Paciente nombre={paciente.mascota} dueno={paciente.dueño}/>
          })}
      </div>
    </div>
        
  )
}

export default App
