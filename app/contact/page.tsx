"use client";

import React, { useState, useEffect } from "react";
import emailjs from "@emailjs/browser";
import { useAppState } from "../store/app-state";
import {
  contactTextContent,
  placeholderTextContent,
  formAlertsTextContent,
} from "../utils/text-content";
import { motion } from "framer-motion";
import { FiSend } from "react-icons/fi";
import {
  AiFillWarning,
  AiOutlineClockCircle,
  AiOutlineCheckCircle,
} from "react-icons/ai";
import { tittleStyle, containerStyle } from "../components/styles";

const inputStyle =
  "text-sm w-1/2 border-b-2 border-gray-500 focus:border-primary bg-transparent outline-none py-2 appearance-none rounded-none";

export default function Contact() {
  const { lang } = useAppState((state) => state);
  const textContent = contactTextContent(lang);
  const placeholders = placeholderTextContent(lang);
  const formAlerts = formAlertsTextContent(lang);

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
    if (!formData.name) {
      setErrorMessage(formAlerts.name.required);
      return false;
    }
    if (formData.name.length < 3) {
      setErrorMessage(formAlerts.name.minLength);
      return false;
    }
    if (!formData.email) {
      setErrorMessage(formAlerts.email.required);
      return false;
    }
    const emailRegex = /\S+@\S+\.\S+/;
    if (!emailRegex.test(formData.email)) {
      setErrorMessage(formAlerts.email.pattern);
      return false;
    }
    if (!formData.message) {
      setErrorMessage(formAlerts.message.required);
      return false;
    }
    if (formData.message.length < 3) {
      setErrorMessage(formAlerts.message.minLength);
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
        setErrorMessage(formAlerts.error);
      });
  };

  return (
    <div className={containerStyle}>
      <div className="flex flex-col h-auto w-auto items-start justify-start p-4 min-h-[350px]">
        <motion.h1
          className={tittleStyle}
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 1.2 }}
        >
          {textContent.h1}
        </motion.h1>

        <motion.h1
          className="text-xs md:text-sm"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <p className="mb-2 md:mb-6">
            {textContent.p}{" "}
            <strong className="flex gap-1 items-center">
              Marinorova25@gmail.com
            </strong>
          </p>
        </motion.h1>

        <motion.form
          onSubmit={handleSubmit}
          className="w-[400px] md:w-[600px] max-w-lg"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.8 }}
        >
          <div className="flex gap-4">
            <motion.input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder={placeholders.name}
              className={inputStyle}
            />
            <motion.input
              type="text"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder={placeholders.email}
              className={inputStyle}
            />
          </div>

          <motion.textarea
            name="message"
            value={formData.message}
            onChange={handleChange}
            placeholder={placeholders.message}
            rows={3}
            className="mt-4 w-full border-b-2 border-gray-500 focus:border-primary bg-transparent outline-none py-2 resize-none appearance-none rounded-none"
          ></motion.textarea>

          <div className="mt-2 h-8 overflow-hidden">
            {status === "error" && (
              <p className="text-sm text-red-500 font-medium flex items-center gap-1">
                <AiFillWarning className="text-lg" />
                {errorMessage}
              </p>
            )}
            {status === "success" && (
              <p className="text-sm text-green-500 font-medium flex items-center gap-1">
                <AiOutlineCheckCircle className="text-lg" />
                {formAlerts.success}
              </p>
            )}
            {status === "loading" && (
              <p className="text-sm text-gray-500 font-medium flex items-center gap-1">
                <AiOutlineClockCircle className="text-lg" />
                {formAlerts.loading}
              </p>
            )}
          </div>

          <div className="mt-2 flex justify-end">
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
    </div>
  );
}
