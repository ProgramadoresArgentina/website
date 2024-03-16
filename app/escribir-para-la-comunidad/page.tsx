"use client"

import React, { FormEvent, useEffect, useRef, useState } from 'react';
import { Editor } from '@tinymce/tinymce-react';
import backgroundImage from '../../public/img/innerpage/breadcrumb-bg1.png'
import Link from 'next/link';
import axios from 'axios';
import { SetState } from '@/interfaces/types';
import { useRouter } from 'next/navigation';


export default function CreateArticle() {
  const { push } = useRouter();
  const form: any = useRef();
  const editorRef: any = useRef(null);
  const [sended, setSended] = useState<string>("");
  const [error, setError] = useState<{
    titleError: boolean;
  }>({
    titleError: true,
  });
  const [title, setTitle] = useState<string>("");
  const [image, setImage] = useState<string>("");

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    setSended("loading");
    const content = editorRef.current.getContent();
    const body = {
      title: title,
      content: content,
      image: image,
      categoryId: 1
    }
    axios.post('/api/articles/publish', body)
    .then(({data}) => {
      setSended("send");
      resetForm();
      setTimeout(() => setSended(""), 3000);
      push(`/blogs/${data.article.url}`)
    })
    .catch(() => setSended("error"));
  }

  const resetForm = () => {
    setTitle("");
    setError({ titleError: true });
  };

  const handleInput = (value: string, setter: SetState<string>) => setter(value);

  useEffect(() => {
    setError({ ...error, titleError: title.length < 10 });
  }, [title, error.titleError]);

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
                  <h1>Escribir un nuevo artículo</h1>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="blog-grid-section scroll-margin pt-30 mb-120" id="blog-grid">
        <div className="container">
          
          <form
            onSubmit={handleSubmit}
            ref={form}>
            <div className="row">
              <div className="col-12 mb-20">
                <div className="form-inner">
                  <label>Imagen de encabezado</label>
                  <input
                  name="image"
                  onChange={(e) =>
                    handleInput(e.target.value, setImage)
                  }
                  placeholder="URL"
                  typeof="text"
                  value={image} />
                </div>
              </div>
              <div className="col-12 mb-20">
                <div className="form-inner">
                  <label>Titulo</label>
                  <input
                  name="from_email"
                  onChange={(e) =>
                    handleInput(e.target.value, setTitle)
                  }
                  placeholder="Titulo del Post (min 10 caracteres)"
                  typeof="text"
                  value={title} />
                  {error.titleError && title && (
                    <p className="text-danger mt-1 mb-0">
                      <small>El titulo debe contener al menos 10 caracteres.</small>
                    </p>
                  )}
                </div>
              </div>
            </div>
            
            <Editor
              onInit={(evt, editor) => editorRef.current = editor}
              apiKey='k3mkeur7vlau19rwpngss6bji32ak69e62w1fan0e4c6zo5f'
              init={{
                height: 800,
                plugins: 'anchor autolink charmap codesample emoticons image link lists media searchreplace table visualblocks wordcount checklist mediaembed casechange export formatpainter pageembed linkchecker a11ychecker tinymcespellchecker permanentpen powerpaste advtable advcode editimage advtemplate mentions tinycomments tableofcontents footnotes mergetags autocorrect typography inlinecss',
                toolbar: 'undo redo | blocks fontfamily fontsize | bold italic underline strikethrough | link image media table mergetags | addcomment showcomments | spellcheckdialog a11ycheck typography | align lineheight | checklist numlist bullist indent outdent | emoticons charmap | removeformat',
                tinycomments_mode: 'embedded',
                tinycomments_author: 'Programadores Argeitna',
              }}
            />
            <div className="col-lg-12 mt-5 d-flex justify-content-end">
              <div className="form-inner">
                <button className="primary-btn2" type="submit" data-text="Enviar" disabled={
                    error.titleError ||
                    sended === "loading"
                  }>
                  <span>
                    {sended === "loading" ? (
                      "Publicando..."
                    ) : (
                      "Publicar"
                    )}</span>
                </button>
                {sended === "send" && (
                  <p className="text-white mt-3">
                    Publicado correctamente.
                  </p>
                )}
                {sended === "error" && (
                  <p className="text-danger mt-3">
                    Ocurrió un error al publicar el artículo.
                  </p>
                )}
              </div>
            </div>
          </form>
        </div>
      </div>
    </main>
  );
}
