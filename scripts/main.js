import { getFlowers } from "./flowerProvider.js";
import FlowerList from "./flowerList.js";

getFlowers()
    .then(FlowerList)