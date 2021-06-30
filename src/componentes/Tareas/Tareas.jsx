import { ContenedorTarea, ContenedorBotones, Boton } from "./TareaEstilo";

import Checked from "../Checked/Checked"
import { Contenedor } from "../../ui/contenedor/Contenedor";

export default function Tareas({todos, eliminarTarea, setTareaEditar, completarTarea}) {

  return(
    todos.map(todo => 
    <Contenedor>
      <Checked completarTarea={completarTarea} idTarea={todo.id}/>
      <ContenedorTarea key={todo.id}>
        <p>{todo.valor}</p>
        <strong>{todo.completado ? "COMPLETADO" : "NO COMPLETADO"}</strong>
        <ContenedorBotones>
          <Boton tipo="editar" onClick={() => setTareaEditar({id: todo.id})}>Editar</Boton>
          <Boton tipo="eliminar" onClick={() => eliminarTarea(todo.id)}>Eliminar</Boton>
        </ContenedorBotones>
      </ContenedorTarea>
    </Contenedor>)
  )
}