import Animal from './Animal'
import './App.css'

function App() {

  return (
    <div className='app'>
      <Animal icone="🐵" nome="Macaco" peso={10} extincao={false} cor="Brown" />
      <Animal icone="🦁" nome="Leão" peso={50} extincao={false} cor="Yellow"/>
      <Animal icone="🦄" nome="Unicórnio" peso={70} extincao={true} cor="Purple"/>
      <Animal icone="🐭" nome="Rato" peso={2} extincao={false} cor="Grey"/>
    </div>
  )
}

export default App
