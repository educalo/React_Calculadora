import './App.css';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';
import Boton from './componentes/Boton';
import Pantalla from './componentes/Pantalla';
import BotonClear from './componentes/BotonClear';
//hook para establecer un estado a nuestro componente
import { useState } from 'react';
//paquete mathjs para evaluar operaciones a partir de una cadena de caracteres y devuelve el resultado de una expresión matemática
//para ver mas detalle mathjs.org
//para instalarlo con npm install mathjs
//de esta manera se añade en nuestro fichero package.json
import { evaluate } from 'mathjs';

function App() {
  //definimos la logica de la calculadora
  //estamos creando un estado (input) para el componente App y una funcion para poder modificado el input que es setInput, useState define el valor inicial
  const [input, setInput] = useState('');

  //funcion para añadir valores a nuestro input
  //concateno lo que tenia antes de input con el valor pasado por la funcion val
  const agregarInput = val => {
    setInput(input + val);
  };

  //calculamos el resultado evaluando el input que tenemos en pantalla
  const calcularResultado = () => {
    if (input) {
      setInput(evaluate(input));
    } else {
      alert("Por favor ingrese valores para realizar los cálculos.");
    }
  };

  //lo que nos devuelve este componente que contiene a su vez varios componentes: Pantalla, boton, botonClear...
  //hay dos formas de llamar a los componentes pasando atributos y coger los valores que tenga entre la apertura y cierre de la etiqueta que define un componente
  //el componente pantalla no tiene cierre de componente no es necesario en este caso
  //<BotonClear manejarClear={() => setInput('')}> llamada a una funcion anonima como es muy sencilla se pone diretamente sin ponerla arriba con las otras
  return (
    <div className='App'>
      <div className='freecodecamp-logo-contenedor'>
        <img 
          src={freeCodeCampLogo}
          className='freecodecamp-logo'
          alt='Logo de freeCodeCamp' />
      </div>
      <div className='contenedor-calculadora'>
        <Pantalla input={input}/>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>1</Boton>
          <Boton manejarClic={agregarInput}>2</Boton>
          <Boton manejarClic={agregarInput}>3</Boton>
          <Boton manejarClic={agregarInput}>+</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>4</Boton>
          <Boton manejarClic={agregarInput}>5</Boton>
          <Boton manejarClic={agregarInput}>6</Boton>
          <Boton manejarClic={agregarInput}>-</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={agregarInput}>7</Boton>
          <Boton manejarClic={agregarInput}>8</Boton>
          <Boton manejarClic={agregarInput}>9</Boton>
          <Boton manejarClic={agregarInput}>*</Boton>
        </div>
        <div className='fila'>
          <Boton manejarClic={calcularResultado}>=</Boton>
          <Boton manejarClic={agregarInput}>0</Boton>
          <Boton manejarClic={agregarInput}>.</Boton>
          <Boton manejarClic={agregarInput}>/</Boton>
        </div>
        <div className='fila'>
          <BotonClear manejarClear={() => setInput('')}>
            Clear
          </BotonClear>
        </div>
      </div>
    </div>
  );
}

export default App;
