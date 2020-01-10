import Retailer from "./retailer.js";
import { useRetailers } from "./retailerProvider.js";
import { useDistributors } from "../Distributors/distributorPrivider.js";
import { useNurseryDistributor } from "../Nurseries/nurseryDistributorProvider.js";
import { useNurseries } from "../Nurseries/nurseryProvider.js";
import { useFlowers } from "../Flowers/flowerProvider.js";
import { useNurseryFlower } from "../Nurseries/nurseryFlowerProvider.js";


const contentTarget = document.querySelector(".retailer__container") 

const RetailerList = () => {
    const retailers = useRetailers()
    const distributors = useDistributors()
    const distNurs = useNurseryDistributor()
    const nurseries = useNurseries()
    const flowers = useFlowers()
    const nursFlower = useNurseryFlower()

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
                    const FlowerArray = foundNurserysArray.map(
                        nursery => {
                            const nurseryFlowerRelationship = nursFlower.filter(
                                cr => cr.nurseryId === nursery.id
                            )
                            const foundFlowerArray = nurseryFlowerRelationship.map(
                                cr => {
                                    const foundFlower = flowers.find(flower => flower.id === cr.flowerId)

                                    return foundFlower
                                }
                                )
                                return foundFlowerArray
                        }
                    )


                    const html = Retailer(retailer, distributor, foundNurserysArray, FlowerArray)
                    
                    return html
                }
            ).join("")

        }</section>
        `

    }
    render()

}
export default RetailerList

