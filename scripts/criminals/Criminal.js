const Criminal = (criminalObject) => {

    return `

    <section class="criminal">

            <div> ${criminalObject.name}</div>
            <div>Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
            <button id="associates--${criminalObject.id}" class="knownDialog">Show Associates</button>
    </section>
     `
}

export default Criminal




