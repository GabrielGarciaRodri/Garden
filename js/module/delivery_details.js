export const getAllRequestDetailsByCode = async(code) =>{
    let res = await fetch(`http://172.16.101.146:5508/request_details?`)
    let data = await res.json();
    return data
}