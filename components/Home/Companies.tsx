import Image from "next/image";
import LogoCoderHouse from '../../public/img/companies/logo-coderhouse.png';
import LogoJalaUniversity from '../../public/img/companies/logo-jala.png';
import LogoDigitalHouse from '../../public/img/companies/logo-digitalhouse.png';
import LogoCertificateDigitalHouse from '../../public/img/companies/logo-certificate-digitalhouse.png';
import LogoOxford from '../../public/img/companies/logo-oxford.png';


export default function Companies() {
  return (
    <div className="logo-section mb-110 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"
      style={{
        'visibility': 'visible',
        'animationDuration': '1500ms',
        'animationDelay': '200ms'
      }}>
      <div className="container-fluid">
        <div className="logo-wrap">
          <div className="logo-title">
            <h6>Empresas que apoyan la comunidad</h6>
          </div>
          <div className="logo-area">
            <div className="marquee_text2">
              <div
                style={{
                  'transform': 'translateX(0px)',
                  'animation': '18.9639s linear 0s infinite normal none running marqueeAnimation-767373'
                }}
                className="js-marquee-wrapper justify-content-center">
                <div className="js-marquee" style={{ 'marginRight': '50px', 'float': 'left' }}>
                  <a target="_blank" href="https://coderhouse.com"><Image src={LogoCoderHouse} alt="" width={100} /></a>
                  <a target="_blank" href="https://jala.university/"><Image src={LogoJalaUniversity} alt="" width={100} /></a>
                  <a target="_blank" href="https://www.digitalhouse.com/"><Image src={LogoDigitalHouse} alt="" width={100} /></a>
                  <a target="_blank" href="https://www.digitalhouse.com/"><Image src={LogoCertificateDigitalHouse} alt="" width={100} /></a>
                  <a target="_blank" href="https://eit.org/ellisonscholars/"><Image src={LogoOxford} alt="" width={100} /></a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}