import React from "react";

function Contact() {
  return (
    <div id="contact">
      <h1>FALE CONOSCO</h1>
      <form>
        <input type="text" placeholder="Nome Completo" />
        <input type="email" placeholder="Seu e-mail" />
        <textarea placeholder="Digite o que deseja..."></textarea>
        <input type="submit" value="Enviar" />
      </form>
    </div>
  );
}

export default Contact;
