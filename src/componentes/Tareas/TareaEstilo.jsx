import styled from "styled-components"

export const ContenedorTarea = styled.div`
  display: flex;
  width: 70%;
  background-color: #666;
  box-sizing: border-box;
  border: 2px solid black;
  padding: 10px;
  margin: 0px auto;
  justify-content: space-between;
  align-items: center;
`;

export const ContenedorBotones = styled.div`
  display: flex;
  width: 150px;
  justify-content: space-between;
`;

export const Boton = styled.a`
  background-color: ${ props => {
    switch (props.tipo) {
      case "editar":
        return `#DBE6FD`;
      case "eliminar":
        return `#D83A56`;
      case "agregar":
        return `#66DE93`;
      default:
        return '';
    }}
  };
  border-radius: 3px;
  width: 70px;
  height: 30px;
  line-height: 30px;
  text-align: center;
  c;
  &:hover {
    cursor: pointer;
  }
`