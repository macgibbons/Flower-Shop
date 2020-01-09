import { getFlowers } from "./Flowers/flowerProvider.js";
import FlowerList from "./Flowers/flowerList";

getFlowers()
    .then(FlowerList)