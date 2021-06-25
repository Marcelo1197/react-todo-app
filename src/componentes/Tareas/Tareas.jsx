import { ContenedorTarea, ContenedorBotones, Boton } from "./TareaEstilo";

export default function Tareas({todos, eliminarTarea, setTareaEditar}) {

  return(
    todos.map(todo => 
    <ContenedorTarea key={todo.id}>
      <p>{todo.valor}</p>
      <strong>{todo.completado ? "COMPLETADO" : "NO COMPLETADO"}</strong>
      <ContenedorBotones>
        <Boton tipo="editar" onClick={() => setTareaEditar({id: todo.id})}>Editar</Boton>
        <Boton tipo="eliminar" onClick={() => eliminarTarea(todo.id)}>Eliminar</Boton>
      </ContenedorBotones>
    </ContenedorTarea>)
  )
}