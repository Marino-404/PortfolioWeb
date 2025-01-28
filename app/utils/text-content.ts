
export const aboutTextContent = (lang: boolean) => {
    if (lang) {
      return {
        h1: "Juan",
        h2: "Hey, I'm",
      };
    } else {
      return {
        h1: "Juan",
        h2: "Hola, soy",
      };
    }
  };