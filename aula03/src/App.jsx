import React from 'react';
import Aluno from './components/Aluno';

const App = () => {
  return (
    <div>
      {
        [
          { nome: "João", email: "joao@gmail.com", curso: "Sistemas para Internet", media: 7 },
          { nome: "Maria", email: "maria@gmail.com", curso: "Sistemas para Informação", media: 8 },
          { nome: "Lucio", email: "lucio@gmail.com", curso: "Sistemas para Internet", media: 9 }
        ].map((aluno) =>
          <Aluno
            nome={aluno.nome}
            email={aluno.email}
            curso={aluno.curso}
            media={aluno.media}
          />
        )
      }
    </div>
  )
}

export default App;

