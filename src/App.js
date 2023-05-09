import { useState } from 'react';
import Banner from './componentes/Banner';
import Formulario from './componentes/Formulario';
import Time from './componentes/Time';

function App() {

  const times = [
    {
      nome: 'Potência de 0 - 200 CV',
      corPrimaria: '#30475E',
      corSecundaria: '#C1A57B'
    },
    {
      nome: 'Potência de 200 - 500 CV',
      corPrimaria: '#C1A57B',
      corSecundaria: '#30475E'
    },
    {
      nome: 'Potência de 500+ CV',
      corPrimaria: '#ECECEC',
      corSecundaria: '#222831'
    },
    
  ]

  const [colaboradores, setColaboradores] = useState([])

  const aoNovoColaboradorAdicionado = (colaborador) => {
    console.log(colaborador)
    setColaboradores([...colaboradores, colaborador])
  }

  return (
    <div className="App">
      <Banner />
      <Formulario times={times.map(time => time.nome)} aoColaboradorCadastrado={colaborador => aoNovoColaboradorAdicionado(colaborador)}/>

      {times.map(time => <Time 
        key={time.nome} 
        nome={time.nome} 
        corPrimaria={time.corPrimaria} 
        corSecundaria={time.corSecundaria} 
        colaboradores={colaboradores.filter(colaborador => colaborador.time === time.nome)}
      />)}   

    </div>
  );
}

export default App;