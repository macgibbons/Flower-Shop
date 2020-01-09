import { getFlowers } from "./Flowers/flowerProvider.js";
import FlowerList from "./Flowers/flowerList.js";
import { getRetailers } from "./Retailers/retailerProvider.js";
import RetailerList from "./Retailers/retailerList.js";
import { getDistributors } from "./Distributors/distributorPrivider.js";
import { getNurseries } from "./Nurseries/nurseryProvider.js";
import { getNurseryDistributor } from "./Nurseries/nurseryDistributorProvider.js";
import { getNurseryFlower } from "./Nurseries/nurseryFlowerProvider.js";

getFlowers()
    .then(FlowerList)

getRetailers()
    .then(getDistributors)
    .then(getNurseries)
    .then(getNurseryFlower)
    .then(getNurseryDistributor)
    .then(RetailerList)