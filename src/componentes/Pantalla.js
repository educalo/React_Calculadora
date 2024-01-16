import React from 'react';
import '../hojas-de-estilo/Pantalla.css';

//otra alternativa es definir el componente como muy funcion flecha
//paso los paramentros con desectructuracion
//seria lo mismo si pongo en vez de {imput} poner props, en ese caso tendria que poner mas abajo props.input
const Pantalla = ({ input }) => (
  <div className='input'>
    {input}      
  </div>
); 

export default Pantalla;