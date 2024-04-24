// 7. Devuelve un listado con los distintos estados por los que puede pasar un pedido.

export const getAllRequestStatus = async()=>{
    // let status = encodeURIComponent("status");
    let res = await fetch("http://localhost:3000/requests");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return{
            code_request: val.code_request,
            status: val.status
        }
    })
    return dataUpdate
}

// 9. Devuelve un listado con el código de pedido, código de cliente, fecha esperada y fecha de entrega de los pedidos que no han sido entregados a tiempo.

export const getAllDates = async() => {
    let res = await fetch("http://localhost:5507/requests");
    let data = await res.json();
    let dataUpdate = [] 

    data.forEach(val => {
        let {date_request, date_wait} = val;
        if  (date_wait > date_request){
            dataUpdate.push(val)
        }
    })
        let newData = dataUpdate.map(val => {
            return {
                code_client: val.code_client,
                code_request: val.code_request,
                date_request: val.date_request,
                date_wait: val.date_wait
                
            }
        })
    return newData;
}
