// Devuelve un listado con el nombre de los todos los clientes españoles.

export const getAllNameFromSpain = async()=>{
    //Can use encodeURIComponent to encode special characters like "ñ" 
    //In this case I want it to use it for encode "España"
    //But I thought it was easier just to use Spain
    let country = encodeURIComponent("Spain");
    let res = await fetch(`http://localhost:5501/clients?country=${country}`);
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return{
            client_code: val.client_code,
            client_name: val.client_name
        }
    });
    return dataUpdate
}

// 16. Devuelve un listado con todos los clientes que 
// sean de la ciudad de Madrid y cuyo representante de
//  ventas tenga el código de empleado 11 o 30.

export const getAll = async() =>{
    let res = await fetch ("http://localhost:5501/clients")
    let dataClient = await res.json();
    dataClient.forEach(async(val) => {
        let dataClient
    })
}