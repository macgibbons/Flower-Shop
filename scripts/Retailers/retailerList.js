import Retailer from "./retailer.js";
import { useRetailers } from "./retailerProvider.js";


const contentTarget = document.querySelector(".retailer__container") 

const RetailerList = () => {
    const retailers = useRetailers()

    const render = () => {
        contentTarget.innerHTML = `
        <h1 class="retailer__title">Flower Shops of Middle Tennessee</h1>
        <section class="retailers">${

            retailers.map( 
                retailer => {
                    const html = Retailer(retailer)
                    
                    return html
                }
            ).join("")

        }</section>
        `

    }
    render()

}
export default RetailerList

