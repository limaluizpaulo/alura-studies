import React from 'react';
import style from './style.module.scss'

class Botao extends React.Component{
  render() {
    
    return (
      <button className={style.botao}>
        Botão
      </button>
    )
  }
}

export default Botao