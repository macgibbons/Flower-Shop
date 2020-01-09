import Retailer from "./retailer.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../Distributors/distributorPrivider.js";


const contentTarget = document.querySelector(".retailer__container") 

const RetailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()

    const render = () => {
        contentTarget.innerHTML = `
        <h1 class="retailer__title">Flower Shops of Middle Tennessee</h1>
        <section class="retailers">${

            retailers.map( 
                retailer => {
                    const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)
                    const html = Retailer(retailer, distributor)
                    
                    return html
                }
            ).join("")

        }</section>
        `

    }
    render()

}
export default RetailerList

