//Devuelve un listado con todos los pagos que se realizaron en el año 2008 mediante Paypal. Ordene el resultado de mayor a menor.

export const getAllPaypalAndDate = async() =>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    return data.filter(val => {
        let [year] = val.date_payment.split("-");
        return Number(year) === 2008;
    }).sort((a, b) => new Date(b.date_payment) - new Date (a.date_payment));
}

export const getPaymentsMethods = async() => {
    let res = await fetch("http://localhost:5505/payments");
    let data = await res.json();
    let uniquePaymentMethods = new Set();
    data.forEach(val => {
        uniquePaymentMethods.add(val.payment);
    });

    let uniquePaymentMethodsArray = Array.from(uniquePaymentMethods);
    return uniquePaymentMethodsArray;

}

export const getAllPaymentsByCode = async(code)=>{
    let res = await fetch(`http://localhost:5505/payments?code_client=${code}`)
    let data = await res.json();
    return data
}