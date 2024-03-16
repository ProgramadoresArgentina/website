"use client";

import emailjs from "@emailjs/browser";
import { FC, FormEvent, useEffect, useRef, useState } from "react";
import { SetState } from "../../interfaces/types";

const REGEX_EMAIL = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;


export function Contact() {
  const form: any = useRef();
  const [email, setEmail] = useState<string>("");
  const [message, setMessage] = useState<string>("");
  const [sended, setSended] = useState<string>("");
  const [error, setError] = useState<{
    emailError: boolean;
    messageError: boolean;
  }>({
    emailError: true,
    messageError: true,
  });

  const handleInput = (value: string, setter: SetState<string>) =>
    setter(value);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSended("loading");

    emailjs
      .sendForm(
        process.env.SERVICE_ID_EMAILJS,
        process.env.TEMPLATE_ID_EMAILJS,
        form.current,
        process.env.USER_ID_EMAILJS
      )
      .then(() => {
        setSended("send");
        resetForm();
        setTimeout(() => setSended(""), 3000);
      })
      .catch(() => setSended("error"));
  };

  const resetForm = () => {
    setEmail("");
    setMessage("");
    setError({ emailError: true, messageError: true });
  };

  useEffect(() => {
    setError({ ...error, emailError: !REGEX_EMAIL.test(email), messageError: message.length < 10 });
  }, [message, email, error.emailError, error.messageError]);


  return (
    <div className="contact-section">
      <div className="col-10 mx-auto">
        <div className="row g-lg-4 gy-5">
          <div className="col-lg-5">
            <div className="contact-content">
              <div className="section-title white wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="500ms">
                <h2>Contacto</h2>
                <p>
                  Te estaremos respondiendo lo antes posible. Gracias por comunicarte con nosotros.
                </p>
              </div>
              <div className="contact-area wow animate fadeInUp pt-5" data-wow-delay="300ms" data-wow-duration="1000ms">
                <div className="hotline-area mb-5">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 60 60"><g><g fill="#000" fillRule="nonzero"><path d="M31.238 33.99a22.112 22.112 0 0 1-6.604-1.042 9.99 9.99 0 0 1-6.636-7.563c-.753-3.626.62-7.46 3.764-10.52a17.43 17.43 0 0 1 1.052-.944 12.746 12.746 0 0 1 11.605-2.505 9.717 9.717 0 0 1 6.756 8.937 9.206 9.206 0 0 1-2.152 6.506 5.058 5.058 0 0 1-4.946 1.816A2.857 2.857 0 0 1 32.24 27.4a2.715 2.715 0 0 1-.264-2.11c.875-3.306 1.764-8.33 1.773-8.38a1 1 0 1 1 1.97.348c-.037.209-.913 5.157-1.809 8.543a.722.722 0 0 0 .045.569.89.89 0 0 0 .58.357 3.106 3.106 0 0 0 2.985-1.185 7.198 7.198 0 0 0 1.66-5.087 7.735 7.735 0 0 0-5.356-7.13 10.701 10.701 0 0 0-9.734 2.135c-.321.267-.634.546-.934.838-1.554 1.512-4.037 4.65-3.2 8.68a8.098 8.098 0 0 0 5.285 6.064c4.69 1.496 11.43 1.677 14.98-2.738a1 1 0 0 1 1.559 1.252c-2.626 3.266-6.622 4.434-10.542 4.434z" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M27.815 28.805a4.598 4.598 0 0 1-2.92-.981c-1.919-1.536-1.972-4.205-1.434-6.022.182-.605.425-1.19.727-1.745a8.198 8.198 0 0 1 3.435-3.565 4.729 4.729 0 0 1 5.563.896 7.484 7.484 0 0 1 1.594 2.746 1 1 0 0 1-1.884.67 5.579 5.579 0 0 0-1.156-2.035 2.707 2.707 0 0 0-3.234-.483 6.269 6.269 0 0 0-2.565 2.733 7.16 7.16 0 0 0-.563 1.356c-.389 1.314-.303 3.03.769 3.888 1.172.942 3.15.544 4.263-.416a11.152 11.152 0 0 0 2.113-2.572 1 1 0 1 1 1.7 1.055 13.128 13.128 0 0 1-2.503 3.027 6.144 6.144 0 0 1-3.905 1.448z" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M57 60H3a3.003 3.003 0 0 1-3-3V20a1 1 0 0 1 1.64-.769l24.536 20.392a6.005 6.005 0 0 0 7.65 0L58.36 19.23A1 1 0 0 1 60 20v37a3.003 3.003 0 0 1-3 3zM2 22.131V57c0 .552.448 1 1 1h54a1 1 0 0 0 1-1V22.131l-22.898 19.03a8.01 8.01 0 0 1-10.203.002z" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M1.001 21a1 1 0 0 1-.58-1.816l9-6.38a1 1 0 0 1 1.157 1.632l-9 6.38a.994.994 0 0 1-.577.184zM58.999 21a.994.994 0 0 1-.577-.184l-9-6.38a1 1 0 0 1 1.156-1.632l9 6.38A1 1 0 0 1 59 21zM39.24 7a.997.997 0 0 1-.578-.184l-4.78-3.39a6.01 6.01 0 0 0-7.703-.047l-4.84 3.437a1 1 0 1 1-1.157-1.632l4.78-3.39a7.963 7.963 0 0 1 10.137.046l4.72 3.344A1 1 0 0 1 39.239 7zM1.65 59.46a1 1 0 0 1-.64-1.77l22.82-18.96a1 1 0 1 1 1.278 1.539l-22.82 18.96a.997.997 0 0 1-.638.231zM58.349 59.46a.994.994 0 0 1-.638-.231l-22.82-18.96a1 1 0 1 1 1.278-1.538l22.82 18.96a1 1 0 0 1-.64 1.77z" fill="#ffffff" opacity="1" data-original="#000000"></path><path d="M50 28.48a1 1 0 0 1-1-1V7.008c-.003.02-.043-.008-.11-.008H11.11a.162.162 0 0 0-.12.043L11 27.48a1 1 0 0 1-2 0V7a2.06 2.06 0 0 1 2.11-2h37.78A2.06 2.06 0 0 1 51 7v20.48a1 1 0 0 1-1 1z" fill="#ffffff" opacity="1" data-original="#000000"></path></g></g></svg>
                  </div>
                  <div className="content">
                    <span>Para enviar un mail</span>
                    <p className="my-0">
                      <a className="text-decoration-none text-white" href="mailto:programadoresargentina@gmail.com">programadoresargentina@gmail.com</a>
                    </p>
                  </div>
                </div>
                <div className="hotline-area">
                  <div className="icon">
                    <svg xmlns="http://www.w3.org/2000/svg" version="1.1" width="40" height="40" x="0" y="0" viewBox="0 0 512 512"
                     ><g><path d="M512 110c0-13.815-9.39-25.473-22.121-28.943A29.805 29.805 0 0 0 492 70c0-13.815-9.39-25.473-22.121-28.943A29.805 29.805 0 0 0 472 30c0-16.542-13.458-30-30-30H334.2c-22.395 0-45.021 5.338-65.473 15.456L259.639 20H150a29.83 29.83 0 0 0-11.057 2.121C135.473 9.39 123.815 0 110 0S84.527 9.39 81.057 22.121A29.83 29.83 0 0 0 70 20c-13.815 0-25.473 9.39-28.943 22.121A29.83 29.83 0 0 0 30 40C13.458 40 0 53.458 0 70v107.8c0 42.151 18.136 69.698 20 74.561V362c0 3.904.758 7.633 2.121 11.057C9.39 376.527 0 388.185 0 402s9.39 25.473 22.121 28.943A29.83 29.83 0 0 0 20 442c0 13.815 9.39 25.473 22.121 28.943A29.83 29.83 0 0 0 40 482c0 16.542 13.458 30 30 30h24.099c5.523 0 10-4.477 10-10s-4.477-10-10-10H70c-5.514 0-10-4.486-10-10s4.486-10 10-10h20c5.523 0 10-4.477 10-10s-4.477-10-10-10H50c-5.514 0-10-4.486-10-10s4.486-10 10-10h40c5.523 0 10-4.477 10-10s-4.477-10-10-10H30c-5.514 0-10-4.486-10-10s4.486-10 10-10h60c5.523 0 10-4.477 10-10s-4.477-10-10-10H50c-5.514 0-10-4.486-10-10s4.486-10 10-10h100c5.523 0 10-4.477 10-10v-10h25.2c23.908 0 45.305 13.198 55.841 34.443A10.002 10.002 0 0 0 250 372h82v90c0 3.506.61 6.87 1.72 10H270a9.987 9.987 0 0 0-4.472 1.056l-11.163 5.581C236.695 487.379 217.135 492 197.8 492h-13.898c-5.523 0-10 4.477-10 10s4.477 10 10 10H197.8c22.395 0 45.021-5.338 65.472-15.456l9.089-4.544H362a29.83 29.83 0 0 0 11.057-2.121C376.528 502.61 388.185 512 402 512s25.473-9.39 28.943-22.121A29.833 29.833 0 0 0 442 492c13.815 0 25.473-9.39 28.943-22.121A29.833 29.833 0 0 0 482 472c16.542 0 30-13.458 30-30V322c0-1.52-.349-2.954-.955-4.244-1.948-16.892-6.858-33.581-14.501-49.028L492 259.64V150a29.83 29.83 0 0 0-2.121-11.057C502.611 135.473 512 123.816 512 110zM140 332H50c-3.506 0-6.87.61-10 1.72V250a9.993 9.993 0 0 0-1.056-4.472C36.671 239.722 20 215.209 20 177.8V70c0-5.514 4.486-10 10-10s10 4.486 10 10v20c0 5.523 4.477 10 10 10s10-4.477 10-10V50c0-5.514 4.486-10 10-10s10 4.486 10 10v40c0 5.523 4.477 10 10 10s10-4.477 10-10V30c0-5.514 4.486-10 10-10s10 4.486 10 10v60c0 5.523 4.477 10 10 10s10-4.477 10-10V50c0-5.514 4.486-10 10-10s10 4.486 10 10v100c0 5.523 4.477 10 10 10h10v25.2c0 23.545-13.52 45.464-34.443 55.841A10.002 10.002 0 0 0 140 250zm45.2-20H160v-56.064c24.826-14.754 40-41.313 40-70.736V160h56.065c14.753 24.826 41.311 40 70.735 40H352v56.064c-24.826 14.754-40 41.312-40 70.736V352h-56.064c-14.754-24.825-41.312-40-70.736-40zM492 442c0 5.514-4.486 10-10 10s-10-4.486-10-10v-20c0-5.523-4.478-10-10-10s-10 4.477-10 10v40c0 5.514-4.486 10-10 10s-10-4.486-10-10v-40c0-5.523-4.478-10-10-10s-10 4.477-10 10v60c0 5.514-4.486 10-10 10s-10-4.486-10-10v-60c0-5.523-4.478-10-10-10s-10 4.477-10 10v40c0 5.514-4.486 10-10 10s-10-4.486-10-10V362c0-5.523-4.478-10-10-10h-10v-25.2c0-23.908 13.198-45.305 34.443-55.841A10 10 0 0 0 372 262v-82h90c3.506 0 6.87-.61 10-1.72V262c0 1.552.361 3.083 1.056 4.472l5.581 11.163C487.379 295.305 492 314.865 492 334.2zm-10-322h-60c-5.522 0-10 4.477-10 10s4.478 10 10 10h40c5.514 0 10 4.486 10 10s-4.486 10-10 10H362c-5.522 0-10 4.477-10 10v10h-25.2c-23.546 0-45.465-13.52-55.841-34.443A10.001 10.001 0 0 0 262 140h-82V50c0-3.506-.61-6.87-1.72-10H262a9.994 9.994 0 0 0 4.473-1.056C272.272 36.675 296.79 20 334.2 20H442c5.514 0 10 4.486 10 10s-4.486 10-10 10h-20c-5.522 0-10 4.477-10 10s4.478 10 10 10h40c5.514 0 10 4.486 10 10s-4.486 10-10 10h-40c-5.522 0-10 4.477-10 10s4.478 10 10 10h60c5.514 0 10 4.486 10 10s-4.486 10-10 10z" fill="#ffffff" opacity="1" data-original="#000000"></path><circle cx="140" cy="499" r="10" fill="#ffffff" opacity="1" data-original="#000000"></circle></g></svg>
                  </div>
                  <div className="content">
                    <span>Se parte del Staff</span>
                    <h6><a className="text-decoration-none text-primary" target="_blank" href="https://docs.google.com/forms/d/e/1FAIpQLSeMJNgdUF_OFdxRdGRhMkXDll636pfkNEQej3YOUzOP_gQRcg/viewform">Quiero Aplicar!</a></h6>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-lg-7 wow animate fadeInUp" data-wow-delay="200ms" data-wow-duration="1500ms">
            <div className="contact-form-wrap">
              <div className="contact-form-area">
                <h3 className="text-white">Completa el formulario</h3>
                <form
                  onSubmit={handleSubmit}
                  ref={form}>
                  <div className="row">
                    <div className="col-lg-6 mb-20">
                      <div className="form-inner">
                        <label>Correo electronico</label>
                        <input
                        name="from_email"
                        onChange={(e) =>
                          handleInput(e.target.value.toLowerCase(), setEmail)
                        }
                        placeholder="cuenta@gmail.com"
                        typeof="email"
                        value={email.toLowerCase()} />
                        {error.emailError && email && (
                          <p className="text-danger mt-1 mb-0">
                            <small>Correo electrónico incorrecto</small>
                          </p>
                        )}
                      </div>
                    </div>
                    <div className="col-lg-12 mb-30">
                      <div className="form-inner">
                        <label>Mensaje <small className="text-primary">*</small></label>
                        <textarea 
                          name="message"
                          onChange={(e) => handleInput(e.target.value, setMessage)}
                          placeholder="Mensaje"
                          typeof="text"
                          value={message}></textarea>
                          {error.messageError && message && (
                            <p className="text-danger mt-1 mb-0">
                              <small>
                                El mensaje debe contener al menos 10 caracteres
                              </small>
                            </p>
                          )}
                      </div>
                    </div>
                    <div className="col-lg-12">
                      <div className="form-inner">
                        <button className="primary-btn2" type="submit" data-text="Enviar" disabled={
                            error.emailError ||
                            error.messageError ||
                            sended === "loading"
                          }>
                          <span>
                            {sended === "loading" ? (
                              "Enviando..."
                            ) : (
                              "Enviar"
                            )}</span>
                        </button>
                        {sended === "send" && (
                          <p className="text-white mt-3">
                            El mensaje se envio correctamente
                          </p>
                        )}
                        {sended === "error" && (
                          <p className="text-danger mt-3">
                            Hubo un error al enviar el mensaje. Intentalo nuevamente o contactenos por redes sociales.
                          </p>
                        )}
                      </div>
                    </div>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}