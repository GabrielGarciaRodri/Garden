import {
    getAllNameFromSpain,
    getAllClientFromMadridAndCode,
    getAllClientWithRepresentativeInfo,
    getAllClientsAndManager,
    getAllClientsPaymentsAndManger


} 
from "../module/clients.js"

export class Mycard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : "open"})
        this.shadowRoot.innerHTML =  /*HTML*/ `
        <link rel="stylesheet" href=../css/myCard.css">
        `
    }

    // Devuelve un listado con el nombre de los todos los clientes españoles.

    async getAllNameFromSpainDesign(){
        let data = await getAllNameFromSpain()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /*HTML*/`
                <div class = "report__card">
                    <div class = "card_title">
                        <div>${val.client_name}</div>
                    </div>
                
                    <div class = "card_body">
                        <div class = "body__marck">
                            <p> <b>Codigo del empleado: </b>${val.client_code}</p>
                            <p> <b>Codigo del empleado: </b>${val.contact_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    // 16. Devuelve un listado con todos los clientes que 
    // sean de la ciudad de Madrid y cuyo representante de
    //  ventas tenga el código de empleado 11 o 30.

    async getAllClientFromMadridAndCodeDesign(){
        let data = await getAllClientFromMadridAndCode()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /*HTML*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.contact_name}${val.contact_lastname}</div>
                    </div>

                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>ID: </b>${val.id}</p>
                            <p><b>Nombre del cliente: </b>${val.client_name}</p>
                            <p><b>Ciudad: </b>${val.city}</p>
                            <p><b>Numero: </b>${val.phone}</p>
                        </div>
                    </div>
                </div>
                </div>
            `;
        });
    }

    async getAllClientWithRepresentativeInfoDesign(){
        let data = await getAllClientWithRepresentativeInfo()
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /*HTML*/`
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class = "body__marck">
                            <p><b>Code Office: </b>${val.employee_office_code}</p>
                            <p><b>Nombre del empleado: </b>${val.employee_full_name}</p>
                            <p><b>Ciudad: </b>${val.city_employees}</p>
                        </div>
                    </div>
                </div>
            `;
        });    
    }

    async getAllClientsAndManagerDesign(){
        let data = await getAllClientsAndManager();
        data.forEach(val =>{
            this.shadowRoot.innerHTML = /*HTML*/ `
                <div class="report__card">
                    <div class="card__title">
                        <div>${val.client_name}</div>
                    </div>
                    <div class="card__body">
                        <div class="body__marck">
                            <p><b>Code Office: </b> ${val.employee_office_code}</p>
                            <p><b>Nombre Empleado </b>${val.employee_full_name}</p>
                        </div>
                    </div>
                </div>
            `;
        });
    }

    async getAllClientsPaymentsAndMangerDesign(){
        let data= await getAllClientsPaymentsAndManger();
        data.forEach(val =>{
            this.shadowRoot.innerHTML += /* html */`
            <div class="report__card">
                <div class="card__title">
                    <div>${val.client_name}</div>
                </div>
                    <div class="card__body">
                        <div class="body__marck">
                        <p><b>Payment: </b> ${val.payment}</p>
                        <p><b>Nombre Empleado </b>${val.employee_full_name}</p>
                        </div>
                    </div>
            </div>
            `;
        });
    }

    static get ObservedAttributes(){
        return ["logic"]
    }

    attributeChangedCallback(name, old, now){
        if(name == "logic" && now == "client_1") this.getAllNameFromSpainDesign();
        if(name == "logic" && now == "client_2") this.getAllClientFromMadridAndCodeDesign(); 
        if(name == "logic" && now == "client_3") this.getAllClientsWithRepresentativesInfoDesign();
        if(name == "logic" && now == "client_4") this.getAllClientsAndManagerDesign();
        if(name == "logic" && now == "client_5") this.getAllClientsPaymentsAndMangerDesign();
    }
}

