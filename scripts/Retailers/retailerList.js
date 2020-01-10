import Retailer from "./retailer.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../Distributors/distributorPrivider.js";
import { useNurseryDistributor } from "../Nurseries/nurseryDistributorProvider.js";
import { useNurseries } from "../Nurseries/nurseryProvider.js";


const contentTarget = document.querySelector(".retailer__container") 

const RetailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const distNurs = useNurseryDistributor()
    const nurseries = useNurseries()

    const render = () => {
        contentTarget.innerHTML = `
        <h1 class="retailer__title">Flower Shops of Middle Tennessee</h1>
        <section class="retailers">${

            retailers.map( 
                retailer => {
                    const distributor = distributors.find(distributor => distributor.id === retailer.distributorId)

                    const distributorNurseryRelationship = distNurs.filter(cr => cr.distributorId === distributor.id)

                    const foundNurserysArray = distributorNurseryRelationship.map(cr => {
                        const foundNursery = nurseries.find(nursery => nursery.id === cr.nurseryId)
                        return foundNursery
                    })
                    const html = Retailer(retailer, distributor, foundNurserysArray)
                    
                    return html
                }
            ).join("")

        }</section>
        `

    }
    render()

}
export default RetailerList

