import React from 'react';
import style from './style.module.scss'
import Item from './Item'

function Lista(){

  const tarefas = [{
    tarefa: "React",
    tempo: "02:00:00",
  },{
    tarefa: "Javascript",
    tempo: "01:00:00",
  },
  {
    tarefa: "Typescript",
    tempo: "03:00:00",
  }]

  return(
    <aside className={style.listaTarefas}>
      <h2>Estudos dos Dia</h2>
      <ul>
        {tarefas.map((item, index) => (
            <Item key={index} tarefa={item.tarefa} tempo={item.tempo} />
          )
        )}
      </ul>
    </aside>
  )
}

export default Lista;