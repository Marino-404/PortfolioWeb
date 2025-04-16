"use client";

import React, { useState } from "react";
import emailjs from "@emailjs/browser";
import { useAppState } from "../store/app-state";
import { contactTextContent } from "../utils/text-content";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import { tittleStyle, containerStyle } from "../components/styles";
import { placeholderTextContent } from "../utils/text-content";

interface FormData {
  name: string;
  email: string;
  message: string;
}

export default function Contact() {
  const { lang } = useAppState((state) => state);
  const textContent = contactTextContent(lang);

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [status, setStatus] = useState<
    "idle" | "loading" | "success" | "error"
  >("idle");
  const [errorMessage, setErrorMessage] = useState("");

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
    // Validación básica de email
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
      .send(
        "service_28fzavh",
        "template_4eqxgsm",
        {
          from_name: formData.name,
          from_email: formData.email,
          message: formData.message,
        },
        "x-1aGYnOGyLoMHtBX"
      )
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
        className=" w-full max-w-lg"
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
            placeholder={placeholderTextContent(lang).name}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
          <motion.input
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder={placeholderTextContent(lang).email}
            className="w-1/2 border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2"
          />
        </div>

        <motion.textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          placeholder={placeholderTextContent(lang).message}
          rows={3}
          className="mt-4 w-full border-b border-gray-500 focus:border-primary bg-transparent outline-none py-2 resize-none"
        ></motion.textarea>

        <div className="mt-6 flex justify-end">
          <motion.button
            type="submit"
            className="flex items-center gap-2 text-md font-medium"
          >
            {placeholderTextContent(lang).send}
            <FiSend />
          </motion.button>
        </div>
      </motion.form>
    </div>
  );
}
