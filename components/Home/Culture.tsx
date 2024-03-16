
import Image from 'next/image';
import Culture01 from '../../public/img/culture/pic-1.jpeg';
import Culture02 from '../../public/img/culture/pic-2.jpg';
import Culture03 from '../../public/img/culture/pic-3.jpg';



export default function Culture() {
  return (
    <div className="home4-process-section mb-130">
      <div className="container">
        <div className="process-bottom-area">
          <div className="row">
            <div className="col-lg-11 wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms" 
            style={{
              'visibility': 'visible',
              'animationDuration': '1500ms',
              'animationDelay': '200ms',
            }}>
              <div className="process-bottom-title">
                <h2>La mejor manera de predecir el <span>futuro</span> es creándolo.</h2>
                <small className="text-white">- Alan Kay</small>
              </div>
            </div>
          </div>
          <div className="row justify-content-between">
            <div className="col wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" 
            style={{
              'visibility': 'visible',
              'animationDuration': '1500ms',
              'animationDelay': '200ms',
            }}>
              <div className="process-bottom-content-and-img">
                <Image src={Culture01} alt="Programadores Argentina Nerdearla"
                    style={{width: '100%'}} />
              </div>
            </div>
            <div className="col-lg-8 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms" 
            style={{
              'visibility': 'visible',
              'animationDuration': '1500ms',
              'animationDelay': '200ms',
            }}>
              <div className="process-bottom-content-and-img">
                <p>Fundada en 2018 en Mar del Plata, nos embarcamos en la misión de crear un espacio único, open-source e innovador. 
                  <br />
                  Desde humildes comienzos hasta nuestras actuales aspiraciones, en nuestra comunidad <span style={{'color': '#f79f40'}}>intentamos encaminar el futuro tecnológico de Argentina y el mundo.</span></p>
                <div className="row">
                  <div className="col-6">
                    <Image src={Culture02} alt="Programadores Argentina Nerdearla"
                    style={{width: '100%'}} />
                  </div>
                  <div className="col-6">
                    <Image src={Culture03} alt="Programadores Argentina Nerdearla"
                    style={{width: '100%'}} />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}