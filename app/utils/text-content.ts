
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