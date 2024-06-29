# Spanish Message Generator Project
## Goals
- Create a program that prints a random Spanish phrase to help the user learn Spanish.
- Practice building out HTML, CSS, and JavaScript from scratch.
- Practice using git to track changes.
## Requirements
[From CodeAcademy] For this project, you will build a message generator program. **Every time a user runs a program, they should get a new, randomized output.** You’re welcome to take the project in a couple of different forms, like an astrology generator, inspirational message, or nonsensical jokes. **To make your program truly random, the message that it outputs should be made up of at least three different pieces of data.** Take what you know of JavaScript syntax so far to build the program and customize it to your liking.
## High Level Design
1. Create 3 arrays with different messages stored as strings:
```
['message 1', 'message 2',...,'message n']
```
2. Store the 3 arrays in an object to keep them organized.
3. Create a function that randomly fetches one string from each array, concatenates them, and returns the concatenated string.
4. Run the function and:
  1. Print the results to the console. Once it works:
  1. Updated the .innerHTML attribute for an element in a page's DOM
## UI Mocks
[Figma link](https://www.figma.com/design/P6bIFmXko8NybCQwi1SN2Y/Spanish-Phrase-Generator-Project?node-id=0-1&t=tEPkTx3h5o1Ytzvf-1)
## Open Questions
- [CLOSED] How do you make a background image fill a section of the page and scale with the page when the browser is resized?
*CSS example:*
``` css
#title-block {
  display: flex;
  background-image: url(https://www.civitatis.com/blog/wp-content/uploads/2023/07/shutterstock_557625622-1920x1289.jpg);
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 50vh;
}
```
- [CLOSED] How do you center text horizontally and vertically?
*CSS example:*
``` css
#message-section {
    height: 30vw;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
}
```
## To-Do
- Improve mobile rendering

## Appendix
### List of Common Spanish Phrases
**Ref:** https://www.mondly.com/spanish-phrases-expressions
#### Greetings
- **Hola:** Hello
- **Buenas:** Hi (informal)
- **Buenas noches:** Good evening
- **Bienvenido:** Welcome
- **Buenas noches:** Good night
- **Que te vaya bien:** Have a good day
### Interests and hobbies
- **¿Qué te gusta hacer?:** What do you like to do?
- **Me gusta / No me gusta…:** I like / I don’t like…
- **Me encanta…:** I love…
- **No me interesa.:** I am not interested.
- **Me gusta ir al museo.:** I like going to the museum.
### Celebrations and well wishes
- **¡Feliz cumpleaños!:** Happy birthday!
- **¡Buena suerte!:** Good luck!
- **¡Bien hecho!:** Well done!
- **¡Cuídate!:** Take care
- **¡Felicitaciones!:** Congratulations
- **¡Salud!:** Cheers!
