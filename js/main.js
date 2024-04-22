// import prompt from 'async-prompt'

// import { postProfile } from './module/camper.js'

// // console.log(await getAllProfile())
// let name = await prompt("Ingrese el nombre: ")
// console.log(await postProfile(name));

// import {
//     getAllOfficeCityAndMovil, getAllOfficeCodeCity 
// } from "./module/office.js";

// console.log(await getAllOfficeCityAndMovil());

import{getBoss,
    getAllFullNameAndEmails
} from "./module/employee.js"

console.log(await getBoss());