import {useState} from "react"
import { uuid } from 'uuidv4';

import { Formulario } from "./FormularioTareaEstilos"
import { Boton } from "../Tareas/TareaEstilo"

export default function FormularioTarea({agregarTarea, actualizarTarea, tipoForm, idTareaEditar}) {

  const [tarea, setTarea] = useState("")

  const enviarTarea = () => {
    
    if (tipoForm == "agregar")
      agregarTarea({
        id: uuid(),
        valor: tarea,
      })
    if (tipoForm == "editar")
      actualizarTarea(idTareaEditar, tarea)

    setTarea("");
  }

  return (
    <Formulario>
      <input type="text" value={tarea} onChange={(e) => setTarea(e.target.value)}/>
      <Boton tipo="agregar" onClick={enviarTarea}>
        {tipoForm === "agregar" ? "Agregar" : "Actualizar"}
      </Boton>
    </Formulario>)
}


/*
  En el formulario es en el único lugar donde me encargo de generar la ID de la tarea
  y manejar el value del input para usar ambos en un obj literal y pasarlo como tarea 
  al método agregarTarea.
  En ningún otro lado modifico o agrego una ID.
  
*/