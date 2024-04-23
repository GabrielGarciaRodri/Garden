export const getAllPaypalAndDate = async() =>{
    let res = await fetch("http://localhost:5505/payments?payment=PayPal");
    let data = await res.json();
    return data.filter(val => {
        let [year] = val.date_payment.split("-");
        return Number(year) === 2008;
    }).sort((a, b) => new Date(b.date_payment) - new Date (a.date_payment));
}