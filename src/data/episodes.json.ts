export interface Template {
  title: string;
  image: string;
  episode: string;
  date: string;
  audio: string;
  description: string;
};
const one: Template = {
  title: "Estudiante UADY",
  image: "src/assets/uady.jpg",
  episode: "Episode 1",
  description: "Actualmente curso la carrera de Ingeniería en software en la Universidad Autónoma de Yucatán.",
  date: "",
  audio: ""
};
const two: Template = {
  title: "Lenguaje C",
  image: "src/assets/lenguajeC.png",
  episode: "Episode 2",
  description: "He tenido oportunidad de desarrollar varios programas en lenguaje C durante mi carrera y he adquirido un buen dominio del mismo.",
  date: "",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const three: Template = {
  title: "Lenguaje Ensamblador",
  image: "src/assets/ASM.png",
  episode: "Episode 3",
  description: "Pasé la materia de arquitectura de computadoras con Otilio.",
  date: "",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const four: Template = {
  title: "Lenguaje Java",
  image: "src/assets/lenguajeJava.jpg",
  episode: "Episode 4",
  description: "He desarrollado múltiples proyectos en lenguaje Java, incluidos algunos proyectos con microservicios",
  date: "",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const five: Template = {
  title: "JS & TS",
  image: "src/assets/jsts.png",
  episode: "Episode 5",
  description: "Conocimiento en los lenguajes de programación JavaScript y TypeScript",
  date: " ",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
const six: Template = {
  title: "Angular",
  image: "src/assets/Angular.png",
  episode: "Episode ",
  description: "Tengo conocimiento suficiente para el desarrollo de aplicaciones con el uso de este framework",
  date: "",
  audio: "https://www.coothead.co.uk/audio/You-Cant-Always-Get-What-You-Want.mp3"
};
export const bytitle = {
  one,
  two,
  three,
  four,
    five,
  six,
};
export const episodes = Object.values(bytitle);
