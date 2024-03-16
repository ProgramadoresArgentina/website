import React from 'react';
import backgroundImage from '../../public/img/innerpage/breadcrumb-bg1.png'
import ArticlesGrid from '@/components/Blogs/articles-grid';
import Link from 'next/link';

export default function Articles() {
  return (
    <main>
      <div className="breadcrumb-section" style={{
        backgroundImage: `url(${backgroundImage.src}), linear-gradient(180deg, #121212 0%, #121212 100%)`,
        padding: '112px 0px 90px'
      }}>
        <div className="container">
          <div className="row">
            <div className="col-lg-12">
              <div className="banner-wrapper">
                <div className="banner-content">
                  <ul className="breadcrumb-list">
                    <li><Link href="/" className="text-decoration-none">Inicio</Link></li>
                    <li>Blogs</li>
                  </ul>
                  <h1>Artículos de la comunidad</h1>
                </div>
                <div className="scroll-down-btn">
                  <a href="#blog-grid">
                    <svg xmlns="http://www.w3.org/2000/svg" width="19" height="29" viewBox="0 0 19 29">
                      <path d="M9.5 0V28M9.5 28C10 24.3333 12.4 17.1 18 17.5M9.5 28C8.5 24.1667 5.4 16.7 1 17.5"></path>
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <ArticlesGrid />
    </main>
  );
}
