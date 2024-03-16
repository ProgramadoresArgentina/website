'use client';

import React, { useEffect, useState } from 'react';
import Link from 'next/link';
import { usePathname, useRouter } from 'next/navigation';
import { useUser } from '@auth0/nextjs-auth0/client';
import Logo from '../public/img/LogoProgramadoresArgentina.png';
import LogoLight from '../public/img/LogoProgramadoresArgentina.png';
import Image from 'next/image';

export default function Nav() {
  const { push } = useRouter();
  const [user, setUser]: any = useState();
  const pathname = usePathname();
  const pageName = pathname?.split('/').pop();
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    (async () => {
      const res = await fetch(`${window.location.origin}/api/session`);
      setUser(await res.json());
    })();
  }, []);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  }

  const redirectToAndCloseModal = (url: string) => {
    push(url);
    setMenuOpen(false);
  }

  return (
    <>
      <div className={`sidebar-menu ${menuOpen && 'active'}`}>
        <div className="sidebar-menu-top-area">
          <div className="container d-flex align-items-center justify-content-between">
            <div className="sidebar-menu-logo">
              <Link href="/" className="logo-dark"><Image width={200} alt="image" className="img-fluid" src={Logo} /></Link>
              <Link href="/" className="logo-light"><Image width={200} alt="image" className="img-fluid" src={Logo} /></Link>
            </div>
            <div className="sidebar-menu-close"
            onClick={toggleMenu}>
              <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 18 18">
                <path fillRule="evenodd" clipRule="evenodd" d="M18 0L11.1686 8.99601L18 18L9.0041 11.1605L0 18L6.83156 8.99601L0 0L9.0041 6.83156L18 0Z"></path>
              </svg>
            </div>
          </div>
        </div>
        <div className="container">
          <div className="row g-lg-4 gy-5">
            <div className="col-lg-8">
              <div className="sidebar-menu-wrap">
                <ul className="main-menu">
                  <li onClick={() => redirectToAndCloseModal('/')}>
                    <Link href={''}>
                      Inicio
                    </Link>
                  </li>
                  <li onClick={() => redirectToAndCloseModal('/blogs')}>
                    <Link href="#">
                    Artículos
                    </Link>
                  </li>
                  <li onClick={() => redirectToAndCloseModal('/#contacto')}>
                    <Link href={''}>
                    Contacto
                    </Link>
                  </li>
                </ul>
              </div>
            </div>
            <div className="col-lg-4 d-lg-flex align-items-center align-content-start flex-wrap d-none">
              <div className="sidebar-contact">
                <div className="social-link-area mb-60">
                  <h6>{user && user.nickname ? 'Conectado' : 'Iniciar Sesion'}
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h6>
                  <ul className="social-area">
                    <li>
                      {
                        user && user.nickname ?
                        <>
                          <a className="text-decoration-none mb-2" href="/profile">
                            <Image width={30} height={30} src={user.avatar} alt={user.nickname}
                            className="rounded" /> {user.nickname}
                          </a>
                          <a className="text-decoration-none" href="/api/auth/logout">
                            Cerrar sesión
                          </a>
                        </>
                        :
                        <a className="text-decoration-none" href="/api/auth/login">
                          <i className="bi bi-person"></i> Ingresar
                        </a>
                      }
                    </li>
                  </ul>
                </div>
                <div className="social-link-area">
                  <h6>Redes Sociales
                    <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12">
                      <path d="M10.0035 3.40804L1.41153 12L0 10.5885L8.59097 1.99651H1.01922V0H12V10.9808H10.0035V3.40804Z" />
                    </svg>
                  </h6>
                  <ul className="social-area">
                    <li><a className="text-decoration-none" target="_blank" href="https://www.linkedin.com/company/programadores-argentina"><i className="bi bi-linkedin"></i> Linkedin</a></li>
                    <li><a className="text-decoration-none" target="_blank" href="https://www.instagram.com/programadores_argentina/"><i className="bi bi-instagram"></i> Instagram</a></li>
                    <li><a className="text-decoration-none" target="_blank" href="https://t.me/programadores_argentina"><i className="bi bi-telegram"></i> Telegram</a></li>
                    <li><a className="text-decoration-none" target="_blank" href="https://t.me/programadores_argentina"><i className="bi bi-telegram"></i> Telegram</a></li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      

      <header className="header-area style-3">
        <div className="container-fluid   d-flex flex-nowrap align-items-center justify-content-between">
          <div className="company-logo">
            <Link href="/" className="logo-dark"><Image alt="image" className="img-fluid" src={Logo} /></Link>
            <Link href="/" className="logo-light"><Image alt="image" className="img-fluid" src={LogoLight} /></Link>
          </div>
          <div className="main-menu d-lg-flex d-none">
            <ul className="menu-list">
              <li className="active">
                <Link href="/" className="text-decoration-none">Inicio</Link><i className="bi bi-plus dropdown-icon"></i>
              </li>
              <li>
                <Link href="/blogs" className="text-decoration-none">Artículos</Link><i className="bi bi-plus dropdown-icon"></i>
              </li>
              {/* <li className="menu-item-has-children">
                <a href="case-study.html" className="text-decoration-none">Generador de CV</a><i className="bi bi-plus dropdown-icon"></i>
              </li>
              <li className="menu-item-has-children">
                <a href="blog-grid.html" className="text-decoration-none">Bolsa de talentos</a><i className="bi bi-plus dropdown-icon"></i>
              </li> */}
              <li>
                <Link href="/#contacto" className="text-decoration-none">Contacto</Link>
              </li>
            </ul>
          </div>
          <div className="nav-right d-flex jsutify-content-end align-items-center"
          onClick={toggleMenu}>
            <div className="sidebar-and-btn">
              <div className="sidebar-btn">
                <svg className="open" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20">
                  <g>
                    <path d="M6.79688 9.375H2.57812C1.15652 9.375 0 8.21848 0 6.79688V2.57812C0 1.15652 1.15652 0 2.57812 0H6.79688C8.21848 0 9.375 1.15652 9.375 2.57812V6.79688C9.375 8.21848 8.21848 9.375 6.79688 9.375ZM2.57812 1.25C1.84578 1.25 1.25 1.84578 1.25 2.57812V6.79688C1.25 7.52922 1.84578 8.125 2.57812 8.125H6.79688C7.52922 8.125 8.125 7.52922 8.125 6.79688V2.57812C8.125 1.84578 7.52922 1.25 6.79688 1.25H2.57812ZM17.4219 9.375H13.2031C11.7815 9.375 10.625 8.21848 10.625 6.79688V2.57812C10.625 1.15652 11.7815 0 13.2031 0H17.4219C18.8435 0 20 1.15652 20 2.57812V6.79688C20 8.21848 18.8435 9.375 17.4219 9.375ZM13.2031 1.25C12.4708 1.25 11.875 1.84578 11.875 2.57812V6.79688C11.875 7.52922 12.4708 8.125 13.2031 8.125H17.4219C18.1542 8.125 18.75 7.52922 18.75 6.79688V2.57812C18.75 1.84578 18.1542 1.25 17.4219 1.25H13.2031ZM15.3125 20C12.7278 20 10.625 17.8972 10.625 15.3125C10.625 12.7278 12.7278 10.625 15.3125 10.625C17.8972 10.625 20 12.7278 20 15.3125C20 17.8972 17.8972 20 15.3125 20ZM15.3125 11.875C13.4171 11.875 11.875 13.4171 11.875 15.3125C11.875 17.2079 13.4171 18.75 15.3125 18.75C17.2079 18.75 18.75 17.2079 18.75 15.3125C18.75 13.4171 17.2079 11.875 15.3125 11.875ZM6.79688 20H2.57812C1.15652 20 0 18.8435 0 17.4219V13.2031C0 11.7815 1.15652 10.625 2.57812 10.625H6.79688C8.21848 10.625 9.375 11.7815 9.375 13.2031V17.4219C9.375 18.8435 8.21848 20 6.79688 20ZM2.57812 11.875C1.84578 11.875 1.25 12.4708 1.25 13.2031V17.4219C1.25 18.1542 1.84578 18.75 2.57812 18.75H6.79688C7.52922 18.75 8.125 18.1542 8.125 17.4219V13.2031C8.125 12.4708 7.52922 11.875 6.79688 11.875H2.57812Z" />
                  </g>
                </svg>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
