export const getAllFullNameAndEmails = async () => {
    let res = await fetch("http://localhost:5502/employee");
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            name: val.name,
            fullLastName: `${val.lastname1} ${val.lastname2}`,
            email: val.email.match(/(?<=\[)[^[]+@[^[\]]+(?=\])/)[0]};
    });
    return dataUpdate;
}

export const getBoss = async() => {
    let res = await fetch("http://localhost:5502/employee?code_boss");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if (val.code_boss == null){
            dataUpdate.push({
                position: val.position,
                name: val.name,
                fullLastName: `${val.lastname1} ${val.lastname2}`,
                email: val.email.match(/(?<=\[)[^@\[\]]+@[^@\[\]]+(?=\])/)[0]
            })
        } 
    })
    return dataUpdate
}

// 5. Devuelve un listado con el nombre, apellidos y puesto de aquellos empleados que no sean representantes de ventas.

export const getAllFullNamePositionDiferentSalesRepresentative = async()=>{
    let res = await fetch ("http://localhost:5502/employee=position_ne=Representante");
    let data = await res.json();
    let dataUpdate = []
    data.forEach(val => {
        if(val.code_boss != null){
            dataUpdate.push({
                name: val.name,
                fullLastName: `${val.lastname1} ${val.lastname2}`,
                position: val.position
            })
        }
    })
    return dataUpdate;
}