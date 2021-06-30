import checkImg from "../../imagenes/checked.png"

const divEstilo = {
  paddingLeft: '30px',
  margin: '0px',
}

const imgEstilo = {
  width: '60px',
}

export default function Checked({completarTarea, idTarea}) {
  return <a style={divEstilo} onClick={() => completarTarea(idTarea)}><img src={checkImg} alt="" style={imgEstilo} /></a>
}