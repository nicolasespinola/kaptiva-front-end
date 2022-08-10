import './App.css';
import circle from './assets/img1.png';
import photoUno from './assets/img-n1.png';
import photoDos from './assets/img-n2.png';
import photoTres from './assets/img-n3.png';
import star from './assets/star.png';
import photoS31 from './assets/img-s31.png';
import photoS32 from './assets/imgs32.png';
import photoS33 from './assets/imgs33.png';
import photoS34 from './assets/imgs34.png';
import photoS35 from './assets/imgs35.png';
import photoS36 from './assets/imgs36.png';
import photoEstrella1 from './assets/star1.png'
import photoCuatroUno from './assets/imgs41.png'
import photoCuatroDos from './assets/imgs42.png'
import photoCuatroTres from './assets/imgs43.png'

function App() {
  return (
    <div>
      <div className="div-lila">
        <img src={circle}/>
        <h1 className='titulo'>Un nuevo<br/> modo de<br/> trabajo →</h1>
      </div>
      <div className='div-naranja'>
        <h2 className='sec2'>actividades actividades actividades actividades actividades</h2>
        <img className='estrella' src={star}/>
        <img className='img-n' src={photoUno}/>
        <img className='img-n' src={photoDos}/>
        <img className='img-n'  src={photoTres}/>
        <p>Talk Talks! <br/><span>01/02/22 - 18hs</span></p>
        <p>Kapti-After <br/><span>07/02/22 - 19hs</span></p>
        <p>Kulture Day <br/><span>07/02/22 - 19hs</span></p>
      </div>
      <div className='div-sec3'>
        <h2 className='sec3'>Espacios</h2>
        <img className='estrella1' src={photoEstrella1} />
        <img className='img-n1'  src={photoS31}/>
        <img className='img-n2'  src={photoS32}/>
        <img className='img-n3'  src={photoS33}/>
        <img className='img-n4'  src={photoS34}/>
        <img className='img-n5'  src={photoS35}/>
        <img className='img-n6'  src={photoS36}/>
      </div>
      <div className='div-sec4'>
        <h2 className='sec4'>Socios K</h2>
        <img classname='img41' src={photoCuatroUno} />
        <img classname='img42' src={photoCuatroDos} />
        <img classname='img43' src={photoCuatroTres} />
        <p className='p1'>Ultimate Lab Agency</p>
        <p className='p2'>Mistral Web Design</p>
        <p className='p3'>Maka Real Estate</p>
      </div>
    </div>
  );
}

export default App;
