export const aboutTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Juan",
      h2: "Bienvenidos, soy",
    };
  } else {
    return {
      h1: "Juan",
      h2: "Welcome, I am",
    };
  }
};

export const skillsTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Trabajos",
      h2: "Tecnologías",
      p: "Me especializo en la creación de interfaces que no solo facilitan la interacción, sino que potencian, diferencian y refuerzan la identidad de tu marca. Cada diseño está pensado para conectar con los usuarios y dejar una impresión duradera.",
      h3: "Diseño iterativo y desarrollo ágil.",
      h4: "Interfaces centradas en el usuario y código escalable.",
      h5: "Prototipos funcionales con tecnologías modernas.",
    };
  } else {
    return {
      h1: "Works",
      h2: "Tech stack",
      p: "I specialize in creating interfaces that not only facilitate interaction but also enhance, differentiate, and reinforce your brand identity. Each design is crafted to connect with users and leave a lasting impression.",
      h3: "Iterative design and agile development.",
      h4: "User-centered interfaces and scalable code.",
      h5: "Functional prototypes with modern tech.",
    };
  }
};

export const contactTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Contactame",
      p: "Envía un mensaje o contactate conmigo directamente a",
      callToAct: "Send",
    };
  } else {
    return {
      h1: "Contact me",
      p: "Get in touch or send me an email directly at",
      callToAct: "Enviar",
    };
  }
};

export const placeholderTextContent = (lang: boolean) => {
  if (lang) {
    return {
      name: "Nombre",
      email: "Email",
      message: "Mensaje",
      send: "Enviar",
    };
  } else {
    return {
      name: "Name",
      email: "Email",
      message: "Message",
      send: "Send",
    };
  }
};

export const formAlertsTextContent = (lang: boolean) => {
  if (lang) {
    return {
      name: {
        required: "El nombre es requerido",
        minLength: "El nombre debe tener al menos 3 caracteres",
      },
      email: {
        required: "El correo electrónico es requerido",
        pattern: "El correo electrónico no es válido",
      },
      message: {
        required: "El mensaje es requerido",
        minLength: "El mensaje debe tener al menos 3 caracteres",
      },
      success: "Mensaje enviado con éxito",
      error: "Hubo un error al enviar el mensaje",
      loading: "Enviando...",
    };
  } else {
    return {
      name: {
        required: "Name is required",
        minLength: "Name must be at least 3 characters",
      },
      email: {
        required: "Email is required",
        pattern: "Email is not valid",
      },
      message: {
        required: "Message is required",
        minLength: "Message must be at least 3 characters",
      },
      success: "Message sent successfully",
      error: "Error sending message",
      loading: "Sending...",
    };
  }
};
