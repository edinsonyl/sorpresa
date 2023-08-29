import './App.css'
import FortuneSelec from './components/FortuneSelec'
import phrases from './utils/phrases'
import { useState } from 'react'
import fondo1 from './assets/fondo1.jpg'
import fondo2 from './assets/fondo2.jpg'
import fondo3 from './assets/fondo3.jpg'
import fondo4 from './assets/fondo4.jpg'

function App() {
  const [index, setIndex] = useState(0);
  const changeIndex = () => {
    if (index < phrases.length - 1) {
      setIndex(index + 1)
    } else {
      setIndex(0)
    }
  }

  const imagenesFondo = [fondo1, fondo2, fondo3, fondo4];
  const [indiceFondo, setIndiceFondo] = useState(0);

  const cambiarFondo = () => {
    let nuevoIndice = indiceFondo + 1;
    if (nuevoIndice >= imagenesFondo.length) {
      nuevoIndice = 0;
    }
    setIndiceFondo(nuevoIndice);
  }
  const style = {
    backgroundImage: `url(${imagenesFondo[indiceFondo]})`
  };
  return (
    <div className="app-container" style={style} onClick={() => changeIndex()}>
      <h1>GALLETAS DE LA FORTUNA</h1>
      <FortuneSelec data={phrases[index]} />
      <button onClick={cambiarFondo}>ver otro</button>
    </div>
  )
}

export default App;