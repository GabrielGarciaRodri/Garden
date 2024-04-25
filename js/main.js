
import {
    getAllOfficeCityAndMovil, getAllOfficeCodeCity 
} from "./module/office.js";

import{getBoss,
    getAllFullNameAndEmails,
    getAllFullNamePositionDiferentSalesRepresentative
} from "./module/employee.js"

// console.log(await getAllFullNamePositdionDiferentSalesRepresentative());

import {getAllNameFromSpain,
        getAllClientFromMadrid,
        getAllClientAndRepresentName
} from "./module/clients.js";

console.log(await getAllClientAndRepresentName());



import { getAllPaypalAndDate } from "./module/payments.js";

// console.log(await getAllPaypalAndDate())

import {getAllRequestStatus, getAllStatus} from "./module/request.js";
import {
        getAllRequestCodesClientCodesDateRequestAndDateWait,
        getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays 
} from "./module/request.js";

//console.log(await getAllStatus());