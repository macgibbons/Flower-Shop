const Retailer = (retailer) => {
    return `
    <section class="retailer__card">
    <header class="retailer__header">
        <h1 class="retailer__name"> ${retailer.name}</h1>
    </header>
    <article class="retailer__info">
        <div class="retailer__location">${retailer.address} ${retailer.city}, ${retailer.state}</div>
    </article>
</section>
    `
}

export default Retailer

