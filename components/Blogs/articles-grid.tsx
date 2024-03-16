"use client"
import { ArticleTableProps } from '@/interfaces/types';
import Image from 'next/image';
import Link from 'next/link';
import React, { useEffect, useState } from 'react';
import RickyLoader from '../ricky-loader';


export default function ArticlesGrid() {
  const [articles, setArticules] = useState([]); // Last 3 articles
  const [pageNr, setPageNr] = useState(1);
  const [total, setTotal] = useState(0);
  const [perPage, setPerPage] = useState(0);
  const [loading, setLoading]: any = useState(true);


  useEffect(() => {
    getArticles();
  }, [pageNr]);

  async function getArticles() {
    setLoading(true);
    const req = await fetch(`${window.location.origin}/api/articles/${pageNr}`);
    const response = await req.json();
    setLoading(false);
    setArticules(response.result);
    setTotal(response.total);
    setPerPage(response.perPage);
  }


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

  function handlePreviousPage() {
    if (pageNr > 1) {
      setPageNr(pageNr - 1);
    }
  }

  function handleNextPage() {
    const totalPages = Math.ceil(total / perPage);
    if (pageNr < totalPages) {
      setPageNr(pageNr + 1);
    }
  }


  if(loading) return (
    <div className="blog-grid-section scroll-margin pt-120 mb-120" id="blog-grid">
      <div className="container">
        <div className="text-center">
          <RickyLoader />
        </div>
      </div>
    </div>
  )

  return (
    <div className="blog-grid-section scroll-margin pt-30 mb-120" id="blog-grid">
      <div className="container">
        <div className="row g-4 mb-50">
          {
            articles.map((article: any, i) => (
              <div className="col-lg-4 col-md-6 wow animate fadeInDown" key={i}
              style={{
                visibility: 'visible',
                'animationDuration': '1500ms',
              }}>
                <div className="blog-card style-2">
                  <div className="blog-card-img-wrap">
                    <Link href={`/blogs/${article.url}`} className="card-img">
                      <Image src={article.image} alt={article.title}
                        width={0}
                        height={0}
                        sizes="100vw"
                        style={{ width: '100%', height: '150px', objectFit: 'cover' }} />
                    </Link>
                    <Link href={`/blogs/${article.url}`} className="date text-decoration-none">
                      <span>{getDateFormatter(article.createdAt)}</span>
                    </Link>
                  </div>
                  <div className="card-content">
                    <div className="blog-meta">
                      <ul className="category">
                        <li>
                          <span className="text-white">{article.category}</span>
                        </li>
                      </ul>
                    </div>
                    <h4>
                      <Link href={`/blogs/${article.url}`} className="text-decoration-none">{article.title}</Link>
                    </h4>
                    <Link href={`/blogs/${article.url}`} className="read-more-btn text-decoration-none">Ver artículo
                      <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                        <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"></path>
                      </svg>
                    </Link>
                  </div>
                </div>
              </div>
            ))
          }
        </div>
        <div className="row">
          <div className="col-lg-12 d-flex justify-content-center wow animate fadeInUp">
            <div className="pagination-area">
              <ul className="paginations">
                {
                  pageNr > 1 &&
                  <li className="page-item paginations-button">
                    <a href="#" className="text-decoration-none" onClick={handlePreviousPage}>
                      <i className='bi bi-arrow-left'></i> Anterior
                    </a>
                  </li>
                }
                <li className="page-item active">
                  <a href="#" className="text-decoration-none">{pageNr}</a>
                </li>
                {
                  pageNr * perPage < total &&
                  <li className="page-item paginations-button">
                    <a href="#" className="text-decoration-none" onClick={handleNextPage}>
                      Siguiente <i className='bi bi-arrow-right'></i>
                    </a>
                  </li>
                }
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
