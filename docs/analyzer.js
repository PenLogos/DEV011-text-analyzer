const analyzer = {
  getWordCount: (text) => {
    //TODO: esta función debe retornar el recuento de palabras que se encuentran en el parámetro `text` de tipo `string`.
    const separarencadenas = text.split(" ")
    let contarpalabras = 0
    for (let i = 0; i < separarencadenas.length; i++) {
      if (separarencadenas[i].trim() !== "") {
        contarpalabras++;
      }
    }
    return contarpalabras
  },
  getCharacterCount: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres que se encuentran en el parámetro `text` de tipo `string`.
    const contarcaracteres = text.length
    if ((text) === "") { return "0" }
    else { return contarcaracteres }
  },
  getCharacterCountExcludingSpaces: (text) => {
    //TODO: esta función debe retornar el recuento de caracteres excluyendo espacios y signos de puntuación que se encuentran en el parámetro `text` de tipo `string`.
    const separarcaracteres = text.split(" ")
    const quitarespacios = separarcaracteres.join("")
    const quitarpuntuacion = quitarespacios
      .replaceAll(",", "")
      .replaceAll(".", "")
      .replaceAll(";", "")
      .replaceAll(":", "")
    const contarcaracteressinespacios = quitarpuntuacion.length
    return contarcaracteressinespacios

  },
  getAverageWordLength: (text) => {
    //TODO: esta función debe retornar la longitud media de palabras que se encuentran en el parámetro `text` de tipo `string`.
    function obtenernumpalabras() {
      const separarcadenas = text.split(" ")
      let numeropalabras = 0
      for (let i = 0; i < separarcadenas.length; i++) {
        if (separarcadenas[i].trim() !== "") {
          numeropalabras++;
        }
      }
      return numeropalabras
    }
    const separarcad = text.split(" ")
    const quitarespacio = separarcad.join("")
    const largopalabras = quitarespacio.length
    const resultado = obtenernumpalabras()
    const promedio = largopalabras / resultado
    const limitardecimales = promedio.toFixed(2)
    const anumber = parseFloat(limitardecimales)
    if (text) {
      return anumber
    }
    else {
      return "0"
    }
  },
  getNumberCount: (text) => {
    //TODO: esta función debe retornar cúantos números se encuentran en el parámetro `text` de tipo `string`.
    const separar = text.split(" ")
    let contarnumeros = 0
    for (let i = 0; i < separar.length; i++) {
      const numeroscadena = parseFloat(separar[i])
      if ((!isNaN(numeroscadena)) && (!/[a-zA-Z]/.test(separar[i]))) {
        contarnumeros++;
      }
    }
    return contarnumeros
  },
  getNumberSum: (text) => {
    //TODO: esta función debe retornar la suma de todos los números que se encuentran en el parámetro `text` de tipo `string`.
    const cadenas = text.split(" ")
    let sumanumeros = 0.0
    for (let i = 0; i < cadenas.length; i++) {
      const solonumeros = parseFloat(cadenas[i])
      if ((!isNaN(solonumeros)) && (!/[a-zA-Z]/.test(cadenas[i]))) {
        sumanumeros += solonumeros
      }
    }
    return sumanumeros
  },
};
export default analyzer;

