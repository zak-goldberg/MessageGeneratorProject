// Create arrays of Spanish phrases
const messageArray1 = ['¡Hola!', 'Buenas.', 'Buenas noches.', '¡Bienvenido!', 'Que te vaya bien!'];
const messageArray2 = ['¿Qué te gusta hacer?', '¡Me gustan las albondigas!', '¡Me encanta el basquetbol!', 'No me interesa las noticias de celebridades.', 'Me gusta ir al museo \"the Legion of Honor\" en San Fransisco.'];
const messageArray3 = ['¡Feliz cumpleaños!', '¡Buena suerte!', '¡Bien hecho!', '¡Cuídate!', '¡Felicitaciones!', '¡Salud!'];

// Package the arrays into an object
const messageObj = {
    array1: messageArray1,
    array2: messageArray2,
    array3: messageArray3
}

// Function to concatenate one random phrase from each array
function returnRandomMessage(packagedArrays) {
  // Create array of arrays
  let arrayValues = Object.values(packagedArrays);
  // Create an array of random values from the arrays
  let randomValues = arrayValues.map((subArray) => {
    let randomIndex = Math.floor(Math.random() * subArray.length);
    return subArray[randomIndex];
  });
  // Concatenate the random values and return them
  return randomValues.join(' ');
}

// Print 3 random concantenated strings to the console
/*
for (let i = 0; i < 3; i++) {
    console.log(returnRandomMessage(messageObj));
}
*/

// Store message and button elements in a variable
const messageBlock = document.getElementById('phrase-output');
const phraseButton = document.getElementById('generate-phrase');

// Function for event listener
// Change this into an anonymous function?
function changeElementText(){
    messageBlock.innerHTML = returnRandomMessage(messageObj);
}

// Create event listener on button
phraseButton.addEventListener("click", changeElementText);