import React from "react";
import { FloatingWhatsApp } from "react-floating-whatsapp";
import logo from "/ESTUCONT.png"; // reemplaza con tu logo o quítalo si no lo necesitas

export default function WhatsappButton() {
  return (
    <FloatingWhatsApp
      phoneNumber="5218714930498" // ← pon aquí tu número de WhatsApp
      accountName="Estucont"
      avatar="/ESTUCONT.png" // puedes remover esto si no usas avatar
      chatMessage="¡Hola! ¿En qué podemos ayudarte?"
      statusMessage="Normalmente responde en unos minutos"
      placeholder="Escribe un mensaje..."
      allowEsc
      allowClickAway
      notification
      notificationSound
    />
  );
}