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

export const getAllClientFromMadrid = async() =>{
    let res = await fetch ("http://localhost:5501/clients?city=Madrid")
    let data = await res.json();
    let clientUpdate = [];
    clientUpdate = data.filter(val => val.code_employee_sales_manager == 11 || val.code_employee_sales_manager == 30);
    return clientUpdate;
}

//1. Obtén un listado con el nombre de cada cliente y el nombre y apellido de su representante de ventas.
// export const getAllClientAndRepresentName = async() =>{
//     let res = await fetch("http://localhost:5501/clients");
//     let data = await res.json();
    
// }


export const getAllClientAndRepresentNameTry1 = async () => {
    
    try {
        return await Promise.all((await (await fetch("http://localhost:5501/clients")).json()).map(async (client) => {
            const [employee] = await getEmployeesByCode(client.code_employee_sales_manager);
            const [office] = await getOfficesByCode(employee.code_office);
            
            return {
                client_name: client.client_name,
                employees_full_name: `${employee.name} ${employee.lastname1} ${employee.lastname2}`,
                employees_office_code: office.code_office,
                city_employees: client.city
            };
        }));
    } catch (error) {
        console.error("Error fetching clients:", error);
        return [];
    }
}

// export const getAllClientAndRepresentNameTry2 = async () => {
//     try {
//         const clients = await (await fetch("http://localhost:5501/clients")).json();

//         return await Promise.all(clients.map(async (client) => {
//             const employees = await getEmployeesByCode(client.code_employee_sales_manager);
            
//             return {
//                 client_name: client.client_name,
//                 employees_full_name: `${employees[0].name} ${employees[0].lastname1} ${employees[0].lastname2}`,
//                 city_employees: client.city
//             };
//         }));
//     } catch (error) {
//         console.error("Error fetching clients:", error);
//         return [];
//     }
// }