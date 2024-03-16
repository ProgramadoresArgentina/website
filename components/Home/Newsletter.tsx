export function Newsletter() {
  return (
    <div className="home3-newsletter-section mb-110">
      <div className="col-10 mx-auto mt-5">
        <div className="newsletter-wrapper">
          <div className="row g-lg-4 gy-5 align-items-center">
            <div className="col-lg-7 col-md-6 wow animate fadeInLeft" data-wow-delay="200ms" data-wow-duration="1500ms"
            style={{
              visibility: 'visible',
              animationDuration: '1500ms',
              animationDelay: '200ms'
            }}>
              <div className="section-title white">
                <span>
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <g>
                      <circle cx="5" cy="5" r="5"></circle>
                    </g>
                  </svg>
                  Newsletter
                  <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                    <g>
                      <circle cx="5" cy="5" r="5"></circle>
                    </g>
                  </svg>
                </span>
                <h2>
                  Recibí notificaciones de la comunidad.  
                </h2>
              </div>
            </div>
            <div className="col-lg-5 col-md-6 wow animate fadeInRight" data-wow-delay="200ms" data-wow-duration="1500ms"
            style={{
              visibility: 'visible',
              animationDuration: '1500ms',
              animationDelay: '200ms'
            }}>
              <div className="newsletter-form-area">
                <h6>Suscribirme</h6>
                <div className="form-inner">
                  <input type="email" placeholder="Correo electrónico" />
                    <button type="submit"><i className="bi bi-arrow-right"></i></button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}