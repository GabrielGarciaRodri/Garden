import prompt from 'async-prompt'

import { postProfile } from './module/camper.js'

// console.log(await getAllProfile())
let name = await prompt("Ingrese el nombre: ")
console.log(await postProfile(name));