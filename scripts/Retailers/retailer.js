const Retailer = (retailer, distributor, nurseries, flowersArray) => {
    return `
    <section class="retailer__card">
    <header class="retailer__header">
        <h1 class="retailer__name"> ${retailer.name}</h1>
    </header>
    <article class="retailer__info">
        <div class="retailer__location">${retailer.address} ${retailer.city}, ${retailer.state}</div>
        <div class="retailer__distributor">Distributor: ${distributor.name}</div>
        <div class="distributor__nursery">this distributor sources their flowers from
        ${
            nurseries.map(
                nursery => {
                    return `<div>${nursery.name}</div>`
                }
            ).join("")
        }
        </div>
        <div>
        This shop sells:
        ${
            flowersArray.map(
                flowers => { 
                    return flowers.map(
                        flower=> {
                            return `<div>${flower.color} ${flower.commonName}s </div>`
                        }
                    ).join("")
                }
            ).join("")
        }
        </div>
        
    </article>
</section>
    `
}

export default Retailer

