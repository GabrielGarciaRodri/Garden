// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllRequestStatus = async()=>{
    // let status = encodeURIComponent("status");
    let res = await fetch("http://localhost:5507/requests");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return{
            code_request: val.code_request,
            status: val.status
        }
    })
    return dataUpdate
}

export const getAllStatus = async() =>{
    let res = await fetch("http://localhost:5507/requests")
    let data = await res.json();
    let uniqueStatusMethods = new Set();
    data.forEach(val => {
        uniqueStatusMethods.add(val.status);
    });

    let uniqueStatusMethodsArray = Array.from(uniqueStatusMethods);
    return uniqueStatusMethodsArray;

}
// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllRequestCodesClientCodesDateRequestAndDateWait = async() => {
    let res = await fetch(`http://localhost:5507/requests?status=Entregado`);
    let data = await res.json();
    let dataUpdate = [] 

    data.forEach(val => {
        let {date_wait, date_delivery} = val;
        if  (date_delivery > date_wait){
            dataUpdate.push(val)
        }
    })
        let newData = dataUpdate.map(val => {
            return {
                code_request: val.code_request,
                code_client: val.code_client,
                date_request: val.date_request,
                date_wait: val.date_wait,
                date_delivery: val.date_delivery,
                status: val.status
            }
        })
    return newData;
}

//10. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos cuya fecha de entrega ha sido al menos dos días antes de la fecha esperada.

export const getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays = async () =>{
    let res = await fetch ("http://localhost:5507/requests?status=Entregado")
    let data = await res.json();
    let dataUpdate = [];
    
    data.forEach(val =>{
        let{date_wait, date_delivery} = val;
        let dateWait = new Date(date_wait);
        let dateDelivery = new Date(date_delivery);
        let difference = dateWait.getTime() - dateDelivery.getTime();
        let differenceInDays = difference / (1000 * 3600 * 24);
        if (differenceInDays >= 2){
            dataUpdate.push(val)
        }
    })
    return dataUpdate;
}

// ESTA ES OTRA FORMA DE HACERLO::::::::::

// export const getAllCodeRequestClientCodeDateWaitDateRequestAtLeastTwoDays = async () => {
//     const res = await fetch("http://localhost:5507/requests?status=Entregado");
//     const data = await res.json();

//     const dataUpdate = data.filter(val => {
//         const { date_wait, date_delivery } = val;
//         const differenceInDays = Math.floor((new Date(date_wait) - new Date(date_delivery)) / (1000 * 3600 * 24));
//         return differenceInDays >= 2;
//     });

//     return dataUpdate;
// }

// Devuelve un listado de todos los pedidos que fueron rechazados en 2009.

// export const getAllDeliveryRejectedYear2009 = async () =>{
//     let res = await fetch ("http://localhost:5507/requests?status=Entregado")
//     let data = await res.json();
//     let 
// }