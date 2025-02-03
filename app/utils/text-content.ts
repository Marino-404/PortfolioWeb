
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
        h1: "Contact me!",
      };
    } 
  }

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