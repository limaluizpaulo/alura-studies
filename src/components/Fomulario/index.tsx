import React from 'react';
import Botao from '../Botao'

class Formulario extends React.Component {
  render() {
    return (
      <form >
        <div>
        <label htmlFor="tarefa">Adicione um novo estilo</label>
        <input type="text" name="tarefa" id="tarefa" placeholder="O que você quer estudar" required/>
        </div>
        <div>
          <label htmlFor="tempo">
            Tempo
        <input type="time" name="tempo" id="tempo" min="00:00:00" max="01:30:00" step="1" placeholder="Tempo" required/>
        </label>
        </div>
        <Botao />
      </form>
    )
  }
}

export default Formulario;