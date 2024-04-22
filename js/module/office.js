export const getAllOfficeCodeCity = async() =>{
    let res = await fetch ("http://localhost:3000/offices")
    let data = await res.json();
    let dataUpdate = data.map(val =>{
        return{
            code_office: val.code_office,
            city: val.city
        }
    });
    return dataUpdate;
}

export const getAllOfficeCityAndMovil = async() => {
    let res = await fetch("http://localhost:3000/offices?country=España")
    let data = await res.json();
    let dataUpdate = data.map(val => {
        return {
            code_office: val.code_office,
            movil: val.movil
        }
    });
    return dataUpdate

}