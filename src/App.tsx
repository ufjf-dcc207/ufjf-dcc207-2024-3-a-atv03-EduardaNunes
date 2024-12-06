import Animal from './Animal'
import './App.css'
import Exibicao from "./Exibicao";

function App() {

  return (
    <div className='app'>
      <Exibicao abertura={new Date("2024-12-06T08:00:00.000-03:00")} fechamento={new Date("2024-12-06T16:00-03:00")} cercado="A1"/>
      <Animal icone="🐵" nome="Macaco" peso={10} extincao={false} cor="Brown" />
      <Animal icone="🦁" nome="Leão" peso={50} extincao={false} cor="Yellow"/>
      <Animal icone="🦄" nome="Unicórnio" peso={70} extincao={true} cor="Purple"/>
      <Animal icone="🐭" nome="Rato" peso={2} extincao={false} cor="Grey"/>
      <Exibicao abertura={new Date("2024-12-07T10:00:00.000-03:00")} fechamento={new Date("2024-12-07T17:00-03:00")} cercado="A2"/>
      <Animal icone="🐢" nome="Tartaruga" peso={2} extincao={false} cor="Green"/>
    </div>
  )
}

export default App
