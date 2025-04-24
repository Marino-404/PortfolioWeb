"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useAppState } from "../store/app-state";
import {
  contactTextContent,
  placeholderTextContent,
} from "../utils/text-content";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { tittleStyle, containerStyle } from "../components/styles";

export default function Contact() {
  const { lang } = useAppState((state) => state);
  const textContent = contactTextContent(lang);
  const placeholders = placeholderTextContent(lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

  useEffect(() => {
    emailjs.init("x-1aGYnOGyLoMHtBX");
  }, []);

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const validateForm = () => {
    if (!formData.name || !formData.email || !formData.message) {
      setErrorMessage("Por favor completá todos los campos.");
      return false;
    }

    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage("El email no es válido.");
      return false;
    }

    return true;
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!validateForm()) {
      setStatus("error");
      return;
    }

    setStatus("loading");
    setErrorMessage("");

    emailjs
      .send("service_28fzavh", "template_4eqxgsm", {
        from_name: formData.name,
        from_email: formData.email,
        message: formData.message,
      })
      .then(() => {
        setStatus("success");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch(() => {
        setStatus("error");
        setErrorMessage("Hubo un error al enviar el mensaje.");
      });
  };

  return (
    <div className={containerStyle}>
      <motion.h1
        className={tittleStyle}
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1 }}
      >
        {textContent.h1}
      </motion.h1>

      <motion.form
        onSubmit={handleSubmit}
        className="w-full max-w-lg"
        initial={{ opacity: 0, scale: 0.9 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.8, delay: 0.4 }}
      >
        <div className="flex gap-4">
          <motion.input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder={placeholders.name}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
          <motion.input
            type="text"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={placeholders.email}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
        </div>

        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={placeholders.message}
          rows={3}
          className="mt-4 w-full border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2 resize-none"
        ></motion.textarea>

        <div className="mt-2 h-8 overflow-hidden">
          {status === "error" && (
            <p className="text-sm text-red-500 font-medium">{errorMessage}</p>
          )}
          {status === "success" && (
            <p className="text-sm text-green-500 font-medium">
              ¡Mensaje enviado con éxito!
            </p>
          )}
          {status === "loading" && (
            <p className="text-sm text-gray-500 font-medium">Enviando...</p>
          )}
        </div>

        <div className="mt-6 flex justify-end">
          <motion.button
            type="submit"
            className="flex items-center gap-2 text-md font-medium"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            {placeholders.send}
            <FiSend />
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
