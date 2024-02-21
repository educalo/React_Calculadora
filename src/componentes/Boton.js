import React from 'react';
import '../hojas-de-estilo/Boton.css';




//isNaN intenta convertir el parámetro pasado a un número. Si el parámetro no se puede convertir, devuelve true; en caso contrario, devuelve false.
function Boton(props) {

  //literal con la comilla invertida, para añadir js se pone $ con las llaves
  //la clase se define como una operación ternaria
  //hay dos formas de llamar a los componentes pasando atributos y coger los valores que tenga entre la apertura y cierre de la etiqueta que define un componente
  //props.children se utiliza para coger los valores que haya dentro de la apertura y cierre de los compoentes creados  return 

  //onclick cuando se haga clic que haga una llamada a la funcion que retorna el resultado de llama a manejarClic
  const esOperador = valor => {
    return isNaN(valor) && (valor != '.') && (valor != '=');
  };
  return (
    <div
      className={`boton-contenedor ${esOperador(props.children) ? 'operador' : ''}`.trimEnd()}
      onClick={() => props.manejarClic(props.children)}>
      {props.children}
    </div>
  );
}

export default Boton;