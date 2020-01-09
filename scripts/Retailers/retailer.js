const Retailer = (retailer, distributor) => {
    return `
    <section class="retailer__card">
    <header class="retailer__header">
        <h1 class="retailer__name"> ${retailer.name}</h1>
    </header>
    <article class="retailer__info">
        <div class="retailer__location">${retailer.address} ${retailer.city}, ${retailer.state}</div>
        <div class="retailer__distributor">Distributor: ${distributor.name}</div>
    </article>
</section>
    `
}

export default Retailer

