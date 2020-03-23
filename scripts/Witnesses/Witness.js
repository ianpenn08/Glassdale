const Witness = (witnessObject) => {

    return `

    <section class="criminal">

            <div> ${witnessObject.name}</div>
            <div>Statements: ${witnessObject.statements}</div>
            <button id="witnesses--${witnessObject.id}" class="knownDialog">Show Witnesses</button>
    </section>
     `
}

export default Witness