
export const aboutTextContent = (lang: boolean) => {
    if (lang) {
      return {
        h1: "Juan",
        h2: "Hola, soy",
        p: "Actualmente estoy iniciando mi carrera como desarrollador de software frontend y diseñador UX/UI. Especializado en React y Next.js para el desarrollo y Figma para el diseño, con un enfoque directo en la creación de interfaces de usuario atractivas, escalables y altamente funcionales.",
      };
    } else {
      return {
        h1: "Juan",
        h2: "Hey, I am",
        p: "Currently I am starting my career as a frontend software developer and UX/UI designer. Specialized in React and Next.js for development and Figma for design, with a direct focus on creating attractive, scalable, and highly functional user interfaces.",
      };
    } 
      
  };