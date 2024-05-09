import {getAllNameFromSpain} from "../module/clients.js"

export class myCard extends HTMLElement{
    constructor(){
        super();
        this.attachShadow({mode : "open"})
        this.shadowRoot.innerHTML =  /*HTML*/ `
        <link rel="stylesheet" href=../css/myCard.css">
        `
    }

    async getAllNameFromSpainDesign(){
        let data = await getAllNameFromSpain()
        console.log(await data)
    }

    static get ObservedAttributes(){
        return
    }
}

