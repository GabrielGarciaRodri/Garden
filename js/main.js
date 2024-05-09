
import {
    getAllOfficeCityAndMovil, getAllOfficeCodeCity 
} from "./module/office.js";

import{getBoss,
    getAllFullNameAndEmails,
    getAllFullNamePositionDiferentSalesRepresentative,
    getEmployeesByCode,
    getAllEmployeesAndBoss,
    getAllEmployeesAndBossOfBoss,
    getEmployeesWithBosses,
    mapEmployeesAndBossesRecursively,
    getEmployeesWithoutClients,
    getEmployeesWithoutClientsAndOffices,
    getEmployeesWithoutOfficeAndClients

} from "./module/employee.js"


import {getAllNameFromSpain,
        getAllClientFromMadrid,
        getAllClientWithRepresentativeInfo,
        getAllClientsAndManager,
        getAllClientsPaymentsAndManger,
        getClientsNotPaymentsAndEmployee,
        getClientsOfFuenlabrada,
        getAllClientsAndEmployee,
        getAllclientsNotPayments,
        getAllclientsNotRequests,
        getAllclientsNotRequestsAndNotPayments

} from "./module/clients.js";



import {getAllPaypalAndDate,
        getPaymentsMethods
 } from "./module/payments.js";

// console.log(await getAllPaypalAndDate())

import {getAllRequestStatus, 
        getAllStatus,
        getAllRequestCodesClientCodesDateRequestAndDateWait,
        getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays,
        getAllRequestsDeliveryEarly,

    } from "./module/request.js";

import { 
    getAllOrnamentalesPlus100,
    getProductsNeverOrdered,
    getProductsNotOrdered 
} from "./module/product.js";

