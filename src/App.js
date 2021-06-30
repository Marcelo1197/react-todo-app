import { useState, useEffect } from "react";
import styled from "styled-components";

import FormularioTarea from "./componentes/FormularioTarea/FormularioTarea";
import Tareas from "./componentes/Tareas/Tareas";

const Main = styled.div`
  display: flex;
  flex-direction: column;
  background-color: #293b5f;
  width: 100%;
  height: 100vh;
  padding-top: 20%;
`;

export default function App() {
  const [todos, setTodos] = useState([]);
  const [tareaEditar, setTareaEditar] = useState(null);

  const agregarTarea = (tareaNueva) => {
    setTodos([...todos, tareaNueva]);
  };

  const eliminarTarea = (idTarea) => {
    setTodos(todos.filter((tarea) => tarea.id != idTarea));
  };

  const actualizarTarea = (idTarea, valorNuevo) => {
    console.log("App.js/actualizarTarea() Me llega ", idTarea, valorNuevo);
    setTodos(
      todos.map((tarea) =>
        tarea.id == idTarea ? { id: tarea.id, valor: valorNuevo } : tarea
      )
    );
    setTareaEditar(null);
  };

  const completarTarea = (idTarea) => {
    console.log("App.js/completarTarea: recibe ", idTarea);
    setTodos(
      todos.map((tarea) =>
        tarea.id == idTarea
          ? { ...tarea, completado: !tarea.completado }
          : tarea
      )
    );
  };

  //DEBUG:
  window.todo = {
    agregarTarea,
    actualizarTarea,
    eliminarTarea,
    completarTarea,
  };

  return tareaEditar ? (
    <Main>
      <FormularioTarea
        actualizarTarea={actualizarTarea}
        tipoForm="editar"
        idTareaEditar={tareaEditar.id}
      />
    </Main>
  ) : (
    <Main>
      <FormularioTarea agregarTarea={agregarTarea} tipoForm="agregar" />
      <br />
      <Tareas
        todos={todos}
        eliminarTarea={eliminarTarea}
        setTareaEditar={setTareaEditar}
        completarTarea={completarTarea}
      />
    </Main>
  );
}
