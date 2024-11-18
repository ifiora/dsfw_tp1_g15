import React, { useState } from "react";
import emailjs from "emailjs-com";

const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .send(
        "service_zcgjqz9",
        "template_4rojasd",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "rFVcyilDeB-W5rQ4H"
      )
      .then((response) => {
        alert("E-Mail enviado correctamente.");
      })
      .catch((err) => {
        console.error("Error: ", err);
        alert("Ocurrió un error al enviar el E-Mail.");
      });
  };

  return (
    <form onSubmit={sendEmail}>
      <p>
        Este formulario envia un email al correo ingresado con los datos
        cargados en el mismo.
      </p>

      <div className="form-container">
        <input
          type="text"
          name="name"
          placeholder="Nombre"
          value={formData.name}
          onChange={handleChange}
        />
        <input
          type="email"
          name="email"
          placeholder="Correo Electrónico"
          value={formData.email}
          onChange={handleChange}
        />
        <textarea
          name="message"
          placeholder="Mensaje"
          value={formData.message}
          onChange={handleChange}
        />
        <button type="submit">Enviar Mail</button>
      </div>
    </form>
  );
};

export default ContactForm;
