import React from "react";
import "./Contact.css";
import { useLanguage } from "../../hooks/useLanguage";
import { TranslateContext } from "../../context/language";

export const Contact = () => {
  const { language, setLanguage } = useLanguage(TranslateContext);
  return (
    <>
      <div id="Contact" className="href" />
      <div id="" className="card__container">
        {language === "en" ? (
          <div className="">
            <h2>
              <b>4.</b> Get in touch
            </h2>
            <form
              target="_blank"
              action="https://formsubmit.co/villalba.4gustin@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="input__form"
                      placeholder="Full Name"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="input__form"
                      placeholder="Email Address"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <textarea
                  placeholder="Your Message"
                  className="input__form"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn__form">
                Submit
              </button>
              <input
                type="hidden"
                name="_url"
                value="https://villalbaagustin.github.io/Portfolio/#Contact"
              ></input>
            </form>
          </div>
        ) : (
          <div className="">
          <h2>
            <b> 4.</b> Contacto
          </h2>
            <form
              target="_blank"
              action="https://formsubmit.co/villalba.4gustin@gmail.com"
              method="POST"
            >
              <div className="form-group">
                <div className="form-row">
                  <div className="col">
                    <input
                      type="text"
                      name="name"
                      className="input__form"
                      placeholder="Nombre Completo"
                      required
                    />
                  </div>
                  <div className="col">
                    <input
                      type="email"
                      name="email"
                      className="input__form"
                      placeholder="Email"
                      required
                    />
                  </div>
                </div>
              </div>
              <div className="">
                <textarea
                  placeholder="Tu mensaje..."
                  className="input__form"
                  name="message"
                  rows="5"
                  required
                ></textarea>
              </div>
              <button type="submit" className="btn__form">
                Enviar
              </button>
              <input
                type="hidden"
                name="_url"
                value="https://villalbaagustin.github.io/Portfolio/#Contact"
              ></input>
            </form>
          </div>
        )}
      </div>
    </>
  );
};
