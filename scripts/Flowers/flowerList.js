import { useFlowers } from "./flowerProvider.js";
import Flower from "./flower.js";


const contentTarget = document.querySelector(".flower__container")

const FlowerList = () => {
    const flowers = useFlowers()

    const render = () => {
        contentTarget.innerHTML = flowers.map(
            flower => {
                const html = Flower(flower)
                
                return html
            }
        ).join("")
    }
    render()
}

export default FlowerList
