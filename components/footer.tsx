
import Logo from '../public/img/home1/footer-logo-bg.png';
import FooterLogoDark from '../public/img/home1/footer-logo-bg-dark.png';
import LogoDark from '../public/img/LogoProgramadoresArgentinaByW.png';
import Image from 'next/image';

export function Footer() {
  return (
    <footer className="footer-section">
      <div className="col-10 mx-auto">
        <div className="footer-top">
          <div className="row align-items-center justify-content-center">
            <div className="col-lg-4 col-md-6">
              <div className="footer-widget">
                <div className="widget-title">
                  <h4>Servicios</h4>
                </div>
                <div className="menu-container">
                  <ul className="widget-list flex-column">
                    <li><a className="text-decoration-none" href="service-details.html">Incubadora</a></li>
                    <li><a className="text-decoration-none" href="service-details.html">Busco Programadores</a></li>
                    <li><a className="text-decoration-none" href="service-details.html">Quiero impulsar mi carrera</a></li>
                    <li><a className="text-decoration-none" href="service-details.html">Ver material gratuito</a></li>
                    <li><a className="text-decoration-none" href="service-details.html">Bolsa de talentos</a></li>
                  </ul>
                </div>
              </div>
            </div>
            <div className="col-lg-4 col-md-6 d-flex justify-content-lg-center justify-content-md-end justify-content-sm-start">
              <div className="footer-logo-area">
                <div className="logo-bg">
                    <Image src={FooterLogoDark} alt="" className="dark" />
                    </div>
                    <div className="logo">
                      <Image src={LogoDark} alt="" className="dark" width={100} />
                    </div>
                    </div>
                </div>
                <div className="col-lg-4 col-md-8
                     d-flex justify-content-lg-end justify-content-sm-end">
                  <div className="footer-widget">
                    <div className="widget-title two">
                      <h3>Te gustaria apoyar a la comunidad?</h3>
                    </div>
                    <div className="content">
                      <p>
                        Ayudanos compartiendo y reaccionando a nuestras publicaciones. También puedes ayudar a otros en los grupos de whatsapp y telegram. 
                        <br />Gracias por formar parte de la comunidad IT más grande de Argentina.
                      </p>
                    </div>
                      </div>
                  </div>
                </div>
              </div>
              <div className="footer-bottom">
                <div className="copyright-area">
                  <p>Copyright 2024 | Diseñado por la comunidad</p>
                </div>
                {/* <div className="footer-bottom-right">
                  <ul>
                    <li><a href="#">Support Policy</a></li>
                    <li><a href="#">Terms &amp; Conditions</a></li>
                    <li><a href="#">Privacy Policy</a></li>
                  </ul>
                </div> */}
              </div>
            </div>
          </footer>
          )
}