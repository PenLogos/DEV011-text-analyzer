import analyzer from './analyzer.js';

//TODO: escuchar eventos del DOM e invocar  los métodos del objeto `analyzer`
const userinput = document.querySelector('textarea[name="user-input"]');
const mostrarcaracteres = document.querySelector("[data-testid='character-count']")
const mostrarpalabras = document.querySelector("[data-testid='word-count']")
const mostrarcaracteressinespacios = document.querySelector("[data-testid='character-no-spaces-count']")
const mostrarpromedio = document.querySelector("[data-testid='word-length-average']")
const mostrarnumeros = document.querySelector("[data-testid='number-count']")
const mostrarsuma = document.querySelector("[data-testid='number-sum']")
function funcionalidades() {
  const caracteres = analyzer.getCharacterCount(userinput.value)
  mostrarcaracteres.textContent = caracteres
  const palabras = analyzer.getWordCount(userinput.value)
  mostrarpalabras.textContent = palabras
  const caracteressinespacios = analyzer.getCharacterCountExcludingSpaces(userinput.value)
  mostrarcaracteressinespacios.textContent = caracteressinespacios
  const promediopalabras = analyzer.getAverageWordLength(userinput.value)
  mostrarpromedio.textContent = promediopalabras
  const numeros = analyzer.getNumberCount(userinput.value)
  mostrarnumeros.textContent = numeros
  const suma = analyzer.getNumberSum(userinput.value)
  mostrarsuma.textContent = suma
}
userinput.addEventListener("keyup", funcionalidades)
//Botón que reinicia métricas
const btn = document.getElementById("reset-button")
function limpiarmetricas() {
  userinput.value = ("")
  mostrarcaracteres.textContent = "0"
  mostrarpalabras.textContent = "0"
  mostrarcaracteressinespacios.textContent = "0"
  mostrarpromedio.textContent = "0"
  mostrarnumeros.textContent = "0"
  mostrarsuma.textContent = "0"
}
btn.addEventListener("click", limpiarmetricas)