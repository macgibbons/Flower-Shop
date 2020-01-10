const Retailer = (retailer, distributor, nurseries, flowersArray) => {
    return `
    <section class="retailer__card">
    <header class="retailer__header">
        <h1 class="retailer__name"> ${retailer.name}</h1>
    </header>
    <article class="retailer__info">
        <div class="retailer__location">${retailer.address} ${retailer.city}, ${retailer.state}</div>
        <div class="retailer__distributor">Distributor: ${distributor.name}</div>

        <section class="distributor__nursery">
            <div class="distributor__title">This distributor sources their flowers from:</div>
            <ol class="nursery">
            ${
                nurseries.map(
                    nursery => {
                        return `<li>${nursery.name}</li>`
                    }
                ).join("")
            }
            </ol>
        </section>

        <section class="flowers"> 
        <div class="flower__title">This shop sells:</div>
        <ol class="flower">
        ${
            flowersArray.map(
                flowers => { 
                    return flowers.map(
                        flower=> {
                            return `<li>${flower.color} ${flower.commonName}s </li>`
                        }
                    ).join("")
                }
            ).join("")
        }
        </ol>
        </section>
        
    </article>
</section>
    `
}

export default Retailer

