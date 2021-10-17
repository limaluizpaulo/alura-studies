import React from 'react';
import Formulario from '../components/Fomulario'
import Lista from '../components/Lista'
import Cronometro from '../components/Cronometro'
import style from './style.module.scss'

function App() {
  return (
    <div className={style.AppStyle}>
      <Formulario/>
      <Lista />
      <Cronometro />
    </div>
  );
}

export default App;
