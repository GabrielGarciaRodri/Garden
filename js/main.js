
import {
    getAllOfficeCityAndMovil, getAllOfficeCodeCity 
} from "./module/office.js";

import{getBoss,
    getAllFullNameAndEmails,
    getAllFullNamePositionDiferentSalesRepresentative
} from "./module/employee.js"

// console.log(await getAllFullNamePositionDiferentSalesRepresentative());

import { getAllNameFromSpain } from "./module/clients.js";

// console.log(await getAllNameFromSpain());

import {getAllRequestStatus} from "./module/request.js";

// console.log(await getAllRequestStatus());

import { getAllPaypalAndDate } from "./module/payments.js";

// console.log(await getAllPaypalAndDate())

import {getAllRequestCodesClientCodesDateRequestAndDateWait,
        getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays 
} from "./module/request.js";

console.log(await getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays());