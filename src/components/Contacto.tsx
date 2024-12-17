"use client";

import React, { useState, useRef } from "react";
import Input from "@/components/ui/Input";
import Textarea from "@/components/ui/Textarea";
import Button from "@/components/ui/Button";
import TerminosModal from "./ui/TerminosModal";
import emailjs from "@emailjs/browser";

const Contacto: React.FC = () => {
  const [aceptaTerminos, setAceptaTerminos] = useState(false);
  const [modalAbierto, setModalAbierto] = useState(false);
  const [formErrors, setFormErrors] = useState({
    user_name: "",
    user_email: "",
    user_phone: "",
    message: "",
  });
  const [isSending, setIsSending] = useState(false);
  const [successMessage, setSuccessMessage] = useState("");
  const form = useRef<HTMLFormElement>(null);

  const sanitizeInput = (value: string) => value.replace(/<[^>]*>/g, ""); // Elimina etiquetas HTML

  const validateForm = (formData: FormData) => {
    const errors: any = {};
    const userName = sanitizeInput(formData.get("user_name") as string);
    const userEmail = formData.get("user_email") as string;
    const userPhone = formData.get("user_phone") as string;
    const message = sanitizeInput(formData.get("message") as string);

    if (!/^[a-zA-Z\s]+$/.test(userName)) {
      errors.user_name = "El nombre debe contener solo letras y espacios.";
    } else if (userName.length > 50) {
      errors.user_name = "El nombre no puede superar los 50 caracteres.";
    }

    if (!/^\S+@\S+\.\S+$/.test(userEmail)) {
      errors.user_email = "Introduce un correo electrónico válido (ej. usuario@email.com).";
    }

    if (userPhone && !/^\d{7,15}$/.test(userPhone)) {
      errors.user_phone = "El teléfono debe contener entre 7 y 15 números.";
    }

    if (message.length > 500) {
      errors.message = "El mensaje no puede superar los 500 caracteres.";
    } else if (message.trim() === "") {
      errors.message = "El mensaje no puede estar vacío.";
    }

    return errors;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormErrors({ user_name: "", user_email: "", user_phone: "", message: "" });
    setSuccessMessage("");

    if (!aceptaTerminos) {
      setFormErrors((prev) => ({
        ...prev,
        general: "Debes aceptar los términos y condiciones para continuar.",
      }));
      return;
    }

    if (form.current) {
      const formData = new FormData(form.current);
      const errors = validateForm(formData);

      if (Object.keys(errors).length > 0) {
        setFormErrors(errors);
        return;
      }

      setIsSending(true);
      try {
        await emailjs.sendForm(
          "service_ypxn2wg",   // Service ID
          "template_f3v931d",  // Template ID
          form.current,      // Formulario
          "rwCwMqzXUaqFNXAL2"    // Public Key
        );
        setSuccessMessage("Mensaje enviado con éxito. Nos pondremos en contacto pronto.");
        form.current.reset();
        setAceptaTerminos(false);
      } catch (error) {
        console.error("Error al enviar el mensaje:", error);
        setFormErrors((prev) => ({
          ...prev,
          general: "Hubo un problema al enviar el mensaje. Inténtalo de nuevo.",
        }));
      } finally {
        setIsSending(false);
      }
    }
  };

  return (
    <>
      <section id="contacto" className="py-8 sm:py-12 md:py-16 bg-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
              Contacta con Nosotros
            </h2>
            <p className="text-gray-600 max-w-2xl mx-auto">
              ¿Tienes un proyecto en mente? Cuéntanos tus ideas y te ayudaremos a hacerlas realidad. 
            </p>
          </div>

          <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">
            <div className="order-2 md:order-1">
              <form ref={form} className="space-y-4 sm:space-y-5" onSubmit={handleSubmit}>
                <div>
                  <Input type="text" name="user_name" placeholder="Nombre" maxLength={50} required />
                  {formErrors.user_name && <p className="text-red-500 text-sm">{formErrors.user_name}</p>}
                </div>

                <div>
                  <Input type="email" name="user_email" placeholder="Correo electrónico" required />
                  {formErrors.user_email && <p className="text-red-500 text-sm">{formErrors.user_email}</p>}
                </div>

                <div>
                  <Input
                    type="tel"
                    name="user_phone"
                    placeholder="Número de teléfono"
                    maxLength={15}
                    pattern="^\d{7,15}$"
                  />
                  {formErrors.user_phone && <p className="text-red-500 text-sm">{formErrors.user_phone}</p>}
                </div>

                <div>
                  <Textarea
                    name="message"
                    placeholder="Descripción del proyecto"
                    maxLength={500}
                    required
                    className="min-h-[100px] sm:min-h-[120px] resize-none"
                  />
                  {formErrors.message && <p className="text-red-500 text-sm">{formErrors.message}</p>}
                </div>

                <div className="flex items-start space-x-2">
                  <input
                    type="checkbox"
                    id="terminos"
                    checked={aceptaTerminos}
                    onChange={() => setAceptaTerminos(!aceptaTerminos)}
                  />
                  <label htmlFor="terminos" className="text-sm text-gray-600">
                    Acepto los{" "}
                    <button
                      type="button"
                      onClick={() => setModalAbierto(true)}
                      className="text-primary underline hover:text-primary/90"
                    >
                      términos y condiciones
                    </button>
                  </label>
                </div>

                {formErrors.general && <p className="text-red-500 text-sm">{formErrors.general}</p>}
                {successMessage && <p className="text-green-500 text-sm">{successMessage}</p>}

                <Button
                  type="submit"
                  disabled={isSending}
                  className={`w-full ${
                    isSending ? "bg-gray-500 cursor-not-allowed" : "bg-primary hover:bg-primary/90"
                  }`}
                >
                  {isSending ? "Enviando..." : "Enviar Mensaje"}
                </Button>
              </form>
            </div>

            <div className="order-1 md:order-2 h-[250px] sm:h-[300px] md:h-full min-h-[400px]">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3074.7481362034614!2d-0.33647045043861723!3d39.58782639854247!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd6040ddc158a81f%3A0x47767a8f26027fd6!2sCarrer%20Trencat%2C%2026%2C%2046138%20Rafelbunyol%2C%20Val%C3%A8ncia%2C%20Espa%C3%B1a!5e0!3m2!1ses!2snl!4v1734008859004!5m2!1ses!2snl"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                className="w-full h-full rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>

      <TerminosModal isOpen={modalAbierto} onClose={() => setModalAbierto(false)} />
    </>
  );
};

export default Contacto;
