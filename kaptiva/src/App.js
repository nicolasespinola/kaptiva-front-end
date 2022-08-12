import React, {Fragment} from 'react';
import './App.css';
import circle from './assets/circle.svg';
import circle2 from './assets/circle2.svg'
import photoUno from './assets/img-m1new.png';
import photoDos from './assets/img-n2new.png';
import photoTres from './assets/img-n3new.png';
import star from './assets/star.png';
import photoS31 from './assets/img-s31new.png';
import photoS32 from './assets/imgs32new.png';
import photoS33 from './assets/imgs33new.png';
import photoS34 from './assets/imgs34new.png';
import photoS35 from './assets/imgs35new.png';
import photoS36 from './assets/imgs36new.png';
import photoEstrella1 from './assets/star1.png';
import photoCuatroUno from './assets/imgs41new.png';
import photoCuatroDos from './assets/imgs42new.png';
import photoCuatroTres from './assets/imgs43new.png';
import estrella4 from './assets/star2.png'


function App() {
  return (
    <Fragment>
      <div className="div-lila">
        <img className='circle' src={circle} alt="" />   
        <h1 className='titulo'>Un nuevo<br/> modo de<br/> trabajo →</h1>
        <p>Actividades <br/>
        Espacios <br/>
        Socios K <br/>
        Planes <br/>
        Contacto <br/>
        </p>
      </div>
      <div className='div-naranja'>
        <h2 className='sec2'>actividades actividades actividades actividades actividades</h2>
        <img className='estrella' alt="" src={star} />
        <div className='img-n01'>
          <img alt="" src={photoUno} />
          <p>Talk Talks! <br /><span>01/02/22 - 18hs</span></p>
        </div>
        <div className='img-n02'>
          <img alt="" src={photoDos} />
          <p>Kapti-After <br /><span>07/02/22 - 19hs</span></p>
        </div>
        <div className='img-n03'>
          <img alt="" src={photoTres} />
          <p>Kulture Day <br /><span>07/02/22 - 19hs</span></p>
        </div>
      </div>
      <div className='div-sec3'>
        <h2 className='sec3'>Espacios</h2>
        <img className='estrella1' alt="" src={photoEstrella1} />
        <img className='img-n1'  alt="" src={photoS31}/>
        <img className='img-n2' alt="" src={photoS32}/>
        <img className='img-n3' alt="" src={photoS33}/>
        <img className='img-n4' alt="" src={photoS34}/>
        <img className='img-n5' alt="" src={photoS35}/>
        <img className='img-n6' alt="" src={photoS36}/>
      </div>
      <div className='div-sec4'>
        <h2 className='sec4'>Socios K</h2>
        <img className='estrella4' alt="" src={estrella4} />
        <div className='img41'>
          <img alt="" src={photoCuatroUno} />
          <p>Ultimate Lab Agency</p>
        </div>
        <div className='img42'>
          <img alt="" src={photoCuatroDos} />
          <p>Mistral Web Design</p>
        </div>
        <div className='img43'>
          <img alt="" src={photoCuatroTres} />
          <p>Maka Real Estate</p>
        </div>
      </div>
      <div className='div-sec5'>
        <h2 className='sec5'>Planes</h2>
        <div>
          <h3>Desk</h3>
          <p>
            Escritorio personal <br/>
            Acceso 24/7 <br/>
            Café de máquina <br/>
            Acceso a comedor <br/>
            Sala de reunión virtual<br/>
            <br/>
            <br />
            <br />
            <br />
            <span>Gs 670.000 x PERSONA</span>
          </p>
        </div>
      </div>
      <div className='div-sec6'>
        <div className='whatsapp'>
          <h3>Whastapp</h3>
          <p>+595 991 667 901</p>
        </div>
        <div className='correo'>
          <h3>Correo</h3>
          <p>hola@kaptiva.com</p>
        </div>
      </div>
    </Fragment>
  );
}

export default App;
