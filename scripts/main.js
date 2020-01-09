import { getFlowers } from "./Flowers/flowerProvider.js";
import FlowerList from "./Flowers/flowerList.js";
import { getRetailers } from "./Retailers/retailerProvider.js";
import RetailerList from "./Retailers/retailerList.js";
import { getDistributors } from "./Distributors/distributorPrivider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(RetailerList)