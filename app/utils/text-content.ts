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
      h1: "Stack de Tecnologías:",
    };
  } else {
    return {
      h1: "Tech Stack:",
    };
  }
};

export const contactTextContent = (lang: boolean) => {
  if (lang) {
    return {
      h1: "Contactame!",
    };
  } else {
    return {
      h1: "Contac tme!",
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
    };
  } else {
    return {
      name: {
        required: "El nombre es requerido",
        minLength: "El nombre debe tener al menos 3 caracteres",
      },
      email: {
        required: "El correo electrónico es requerido",
        minLength: "El correo electrónico debe tener al menos 3 caracteres",
        pattern: "El correo electrónico no es válido",
      },
      message: {
        required: "El mensaje es requerido",
        minLength: "El mensaje debe tener al menos 3 caracteres",
      },
      success: "Mensaje enviado con éxito",
      error: "Error al enviar el mensaje",
    };
  }
};
