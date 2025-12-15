import React, { useState } from "react";
import "./Contact.css";

export default function Contact() {
  const [form, setForm] = useState({ name: "", email: "", message: "" });
  const [sent, setSent] = useState(false);

  const handleChange = (e) =>
    setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!form.name || !form.email || !form.message) {
      alert("Tous les champs sont obligatoires !");
      return;
    }

    console.log("Message envoyé :", form);
    setSent(true);
  };

  return (
    <section id="contact" className="contact">
      <h2>Contactez-moi</h2>

      {sent ? (
        <p className="success">Message bien envoyé !</p>
      ) : (
        <form onSubmit={handleSubmit}>
          <input name="name" placeholder="Nom" onChange={handleChange} />
          <input name="email" placeholder="Email" onChange={handleChange} />
          <textarea
            name="message"
            placeholder="Message"
            onChange={handleChange}
          ></textarea>
          <button type="submit">Envoyer</button>
        </form>
      )}
    </section>
  );
}
