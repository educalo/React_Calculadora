import React from 'react';
import '../hojas-de-estilo/BotonClear.css';

//el componente se define con una funcion flecha, en este caso se utiliza como parametro props
//props.children es lo que cotiene el componente entre la apertura y cierre de componente, en este caso esta en App.js
const BotonClear = (props) => (
  <div className='boton-clear' onClick={props.manejarClear}>
    {props.children}
  </div>
);

export default BotonClear;
