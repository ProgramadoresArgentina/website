"use client"
import Image from 'next/image';
import Culture03 from '../../public/img/home3/blog-img1.jpg';
import { useEffect, useState } from 'react';
import { ArticleTableProps } from '@/interfaces/types';


export function LastArticles() {
  const [articles, setArticules] = useState([]); // Last 3 articles


  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/articles/getHomeArticles`);
      setArticules(await res.json());
    })();
  }, []);


  function getDateFormatter(dateISO) {
    const date = new Date(dateISO);
    const day = date.getDate();
    const monthNames = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    const monthName = monthNames[date.getMonth()];
    return (
      <>
        <strong>{day}</strong> {monthName}
      </>
    );
  }


  return (
    <div className="home3-blog-section mb-110">
      <div className="container mt-5">
        <div className="row justify-content-center mb-60">
          <div className="col-lg-8">
            <div className="section-title text-center wow animate fadeInDown" data-wow-delay="200ms" data-wow-duration="1500ms"
              style={{
                visibility: 'visible',
                animationDuration: '1500ms',
                animationDelay: '200ms'
              }}>
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <g>
                    <circle cx="5" cy="5" r="5"></circle>
                  </g>
                </svg>
                Blog
                <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                  <g>
                    <circle cx="5" cy="5" r="5"></circle>
                  </g>
                </svg>
              </span>
              <h2>Artículos que debes leer</h2>
              <p>
                Antes de continuar te recomendamos leer los 3 artículos más destacados hasta la fecha por la comunidad.
              </p>
            </div>
          </div>
        </div>
        <div className="row g-4">
          {
            articles.map((article: any, i) => (
              <div key={i} className="col-lg-4 col-md-6 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms"
                style={{
                  visibility: 'visible',
                  animationDuration: '1500ms',
                  animationDelay: '200ms'
                }}>
                <div className="blog-card style-2">
                  <div className="blog-card-img-wrap">
                    <a href="blog-details.html" className="card-img">
                      <Image src={article.image} alt={article.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    </a>
                    <a href="blog-grid.html" className="date text-decoration-none">
                      <span>{getDateFormatter(article.createdAt)}</span>
                    </a>
                  </div>
                  <div className="card-content">
                    <div className="blog-meta">
                      <ul className="category">
                        <li><a href="blog-grid.html" className='text-decoration-none'>{article.category}</a></li>
                      </ul>
                      {/* <div className="blog-comment">
                        <span>Comment (0)</span>
                      </div> */}
                    </div>
                    <h4><a href="blog-details.html" className='text-decoration-none'>{article.title}</a></h4>
                    <a href="blog-details.html" className="read-more-btn text-decoration-none">Leer artículo completo
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"></path>
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
      </div>
    </div>
  )
}