"use client"

import axios from 'axios';
import { redirect } from 'next/navigation';
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import RickyLoader from '@/components/ricky-loader';
import Link from 'next/link';
import backgroundImage from '../../../public/img/innerpage/breadcrumb-bg1.png'

export default function SingleBlog({ params, searchParams }) {
  const { push } = useRouter();
  const [article, setArticle]: any = useState();
  const [loading, setLoading]: any = useState(true);

  useEffect(() => {
    getBlogDetails();
  }, [])

  function getBlogDetails() {
    setLoading(true);
    axios.get(`/api/articles/getById/${params.url}`)
    .then(res => {
      setArticle(res.data);
      setLoading(false);
    }).catch(err => {
      push('/');
      setLoading(false);
    })
  }

  function getDateFormatter(dateISO) {
    const date = new Date(dateISO);
    const day = date.getDate();
    const year = date.getFullYear();
    const monthNames = [
      "Ene", "Feb", "Mar", "Abr", "May", "Jun",
      "Jul", "Ago", "Sep", "Oct", "Nov", "Dic"
    ];
    const monthName = monthNames[date.getMonth()];
    return `${day} ${monthName}, ${year}`;
  }

  if(loading) return (
    <div className="blog-details scroll-margin pt-120 mb-120 style-6" id="blog-details">
      <div className="container">
        <div className="text-center">
          <RickyLoader />
        </div>
      </div>
    </div>
  )
  if (!article) return false;

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
                <h1>{article.title}</h1>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
      <div className="blog-details scroll-margin pt-30 mb-120 style-6" id="blog-details">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <div className="blog-details-thumb">
                <div className="batch">
                  <span>{article.category}</span>
                </div>
                <Image src={article.image} alt={article.title}
                  width={0}
                  height={0}
                  sizes="100vw"
                  style={{ width: '100%', height: 'auto', maxHeight: '300px', objectFit: 'cover', objectPosition: 'center' }} />
              </div>
              <div className="blog-details-author-meta">
                <div className="author-area">
                  <div className="author-img">
                    <Image src={article.avatar} alt={article.username}
                      width={0}
                      height={0}
                      sizes="100vw"
                      style={{ width: '50px', height: '50px', objectFit: 'cover' }} />
                  </div>
                  <div className="author-content">
                    <h6>Escrito por {article.username}</h6>
                  </div>
                </div>
                <ul>
                  <li>
                    <svg viewBox="0 0 16 16" xmlns="http://www.w3.org/2000/svg">
                      <path d="M8 0C3.60594 0 0 3.60594 0 8C0 12.3941 3.60594 16 8 16C12.3941 16 16 12.3941 16 8C16 3.60594 12.3941 0 8 0ZM11.646 3.69106C11.8291 3.508 12.1259 3.508 12.3089 3.69106C12.492 3.87413 12.492 4.17091 12.3089 4.35397C12.1259 4.53703 11.8291 4.53703 11.646 4.35397C11.463 4.17091 11.463 3.87413 11.646 3.69106ZM7.53125 2.375C7.53125 2.11591 7.74091 1.90625 8 1.90625C8.25909 1.90625 8.46875 2.11591 8.46875 2.375V3.3125C8.46875 3.57159 8.25909 3.78125 8 3.78125C7.74091 3.78125 7.53125 3.57159 7.53125 3.3125V2.375ZM2.375 8.46875C2.11591 8.46875 1.90625 8.25909 1.90625 8C1.90625 7.74091 2.11591 7.53125 2.375 7.53125H3.3125C3.57159 7.53125 3.78125 7.74091 3.78125 8C3.78125 8.25909 3.57159 8.46875 3.3125 8.46875H2.375ZM4.35397 12.3089C4.17091 12.492 3.87413 12.492 3.69106 12.3089C3.508 12.1259 3.508 11.8291 3.69106 11.646C3.87413 11.4629 4.17091 11.4629 4.35397 11.646C4.53703 11.8291 4.53703 12.1259 4.35397 12.3089ZM4.35397 4.35397C4.17091 4.53703 3.87413 4.53703 3.69106 4.35397C3.508 4.17091 3.508 3.87413 3.69106 3.69106C3.87413 3.508 4.17091 3.508 4.35397 3.69106C4.53703 3.87413 4.53703 4.17091 4.35397 4.35397ZM8.46875 13.625C8.46875 13.8841 8.25909 14.0938 8 14.0938C7.74091 14.0938 7.53125 13.8841 7.53125 13.625V12.6875C7.53125 12.4284 7.74091 12.2188 8 12.2188C8.25909 12.2188 8.46875 12.4284 8.46875 12.6875V13.625ZM11.1439 11.1439C10.9608 11.327 10.6642 11.327 10.4811 11.1439L7.66856 8.33141C7.58069 8.24353 7.53125 8.1245 7.53125 8V5.1875C7.53125 4.92841 7.74091 4.71875 8 4.71875C8.25909 4.71875 8.46875 4.92841 8.46875 5.1875V7.80591L11.1439 10.4811C11.327 10.6642 11.327 10.9608 11.1439 11.1439ZM12.3089 12.3089C12.1259 12.492 11.8291 12.492 11.646 12.3089C11.463 12.1259 11.463 11.8291 11.646 11.646C11.8291 11.4629 12.1259 11.4629 12.3089 11.646C12.492 11.8291 12.492 12.1259 12.3089 12.3089ZM14.0938 8C14.0938 8.25909 13.8841 8.46875 13.625 8.46875H12.6875C12.4284 8.46875 12.2188 8.25909 12.2188 8C12.2188 7.74091 12.4284 7.53125 12.6875 7.53125H13.625C13.8841 7.53125 14.0938 7.74091 14.0938 8Z"></path>
                    </svg>{getDateFormatter(article.updatedAt)}
                  </li>
                </ul>
              </div>
            </div>
          </div>
          <div className="blog-details-content">
            <div dangerouslySetInnerHTML={{ __html: article.content }} />
          </div>
          <div className="blog-tag-and-social-area">
            <div className="blog-tag">
              <h6>Tag:</h6>
              <ul>
                <li><a href="blog-grid.html">Industry,</a></li>
                <li><a href="blog-grid.html">Marketing,</a></li>
                <li><a href="blog-grid.html">Technology,</a></li>
                <li><a href="blog-grid.html">Health Care</a></li>
              </ul>
            </div>
            <ul className="social-list">
              <li>
                <a href="https://www.linkedin.com/">
                  <i className="bi bi-linkedin"></i>
                  <span>LinkedIn</span>
                </a>
              </li>
              <li>
                <a href="https://www.facebook.com/">
                  <i className="bi bi-facebook"></i>
                  <span>Facebook</span>
                </a>
              </li>
              <li>
                <a href="https://twitter.com/">
                  <i className="bi bi-twitter-x"></i>
                  <span>Twitter</span>
                </a>
              </li>
              <li>
                <a href="https://www.instagram.com/">
                  <i className="bi bi-instagram"></i>
                  <span>Instagram</span>
                </a>
              </li>
            </ul>
          </div>
          <div className="row mb-120">
            <div className="col-lg-12">
              <div className="details-navigation">
                <div className="single-navigation">
                  <div className="star-btn">
                    <a href="#">
                      <div className="bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="163" height="80" viewBox="0 0 163 80">
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z"></path>
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                          <path fillRule="evenodd" clipRule="evenodd" d="M1.51122 0.885308L10 9.37364L9.37364 10L0.885308 1.51122V7.38037H0V0H7.38037V0.885308H1.51122Z"></path>
                        </svg>
                        <span>PRV PROJECT</span>
                      </div>
                    </a>
                  </div>
                  <div className="content">
                    <p>The complete gu unlocking your team’s power of our unique work.</p>
                  </div>
                </div>
                <div className="single-navigation two text-end">
                  <div className="content">
                    <p>Challenges creating structure multiple brand system.</p>
                  </div>
                  <div className="star-btn">
                    <a href="#">
                      <div className="bg">
                        <svg xmlns="http://www.w3.org/2000/svg" width="163" height="80" viewBox="0 0 163 80">
                          <path d="M2.83106 43.4757L2.50599 43.8556L2.83105 43.4757L2.51942 43.209C0.549281 41.5233 0.549281 38.4768 2.51942 36.791L2.83105 36.5243L2.50599 36.1444L2.83106 36.5243C4.3642 35.2125 4.87856 33.0628 4.10522 31.1991C3.34371 29.3639 4.18611 27.2563 6.00282 26.4516L10.271 24.5611C11.8256 23.8725 12.9744 22.5035 13.3826 20.8529L13.6874 19.621C14.0981 17.9605 15.4147 16.6764 17.085 16.3074L25.222 14.5098C26.2804 14.276 27.2461 13.7347 27.9978 12.9538L31.4198 9.3992C32.2068 8.58167 33.2736 8.09167 34.4066 8.02736L45.2063 7.41434C45.9803 7.37041 46.7363 7.16333 47.4247 6.80669L54.6193 3.07925C55.3877 2.68117 56.2545 2.51308 57.1159 2.59511L68.4067 3.67024C69.06 3.73244 69.719 3.67725 70.3528 3.50727L80.3343 0.830297C81.0979 0.625498 81.9021 0.625497 82.6657 0.830296L92.6472 3.50727C93.281 3.67725 93.94 3.73244 94.5933 3.67024L105.884 2.59511C106.746 2.51308 107.612 2.68117 108.381 3.07925L115.575 6.80669C116.264 7.16333 117.02 7.37041 117.794 7.41434L128.593 8.02736C129.726 8.09167 130.793 8.58167 131.58 9.39921L135.002 12.9538C135.754 13.7347 136.72 14.276 137.778 14.5098L145.915 16.3074C147.585 16.6764 148.902 17.9605 149.313 19.621L149.617 20.8529C150.026 22.5035 151.174 23.8725 152.729 24.5611L156.997 26.4516C158.814 27.2563 159.656 29.3639 158.895 31.1991C158.121 33.0628 158.636 35.2125 160.169 36.5243L160.481 36.791C162.451 38.4768 162.451 41.5232 160.481 43.209L160.169 43.4757C158.636 44.7875 158.121 46.9372 158.895 48.8009C159.656 50.6361 158.814 52.7437 156.997 53.5484L152.729 55.4389C151.174 56.1275 150.026 57.4965 149.617 59.1471L149.313 60.379C148.902 62.0395 147.585 63.3236 145.915 63.6926L137.778 65.4902C136.72 65.724 135.754 66.2654 135.002 67.0462L131.58 70.6008C130.793 71.4183 129.726 71.9083 128.593 71.9726L117.794 72.5857C117.02 72.6296 116.264 72.8367 115.575 73.1933L108.381 76.9208C107.612 77.3188 106.746 77.4869 105.884 77.4049L94.5933 76.3298C93.94 76.2676 93.281 76.3228 92.6472 76.4927L82.6657 79.1697C81.9021 79.3745 81.0979 79.3745 80.3343 79.1697L70.3528 76.4927C69.719 76.3228 69.06 76.2676 68.4067 76.3298L57.1159 77.4049C56.2545 77.4869 55.3876 77.3188 54.6193 76.9208L47.4247 73.1933C46.7363 72.8367 45.9803 72.6296 45.2063 72.5857L34.4066 71.9726C33.2736 71.9083 32.2068 71.4183 31.4198 70.6008L27.9978 67.0462C27.2461 66.2654 26.2804 65.724 25.222 65.4902L17.085 63.6926C15.4147 63.3236 14.0981 62.0395 13.6874 60.379L13.3826 59.1471C12.9744 57.4965 11.8256 56.1275 10.271 55.4389L6.00282 53.5484C4.18611 52.7437 3.34371 50.6361 4.10522 48.8009C4.87856 46.9372 4.3642 44.7875 2.83106 43.4757Z"></path>
                        </svg>
                      </div>
                      <div className="nav-btn">
                        <span>NXT PROJECT</span>
                        <svg xmlns="http://www.w3.org/2000/svg" width="10" height="10" viewBox="0 0 10 10">
                          <path fillRule="evenodd" clipRule="evenodd" d="M8.48878 0.885308L0 9.37364L0.626356 10L9.11469 1.51122V7.38037H10V0H2.61963V0.885308H8.48878Z"></path>
                        </svg>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
}
