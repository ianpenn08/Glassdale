const Criminal = (criminalObject) => {

    return `

    <section class="criminal">

            <div> ${criminalObject.name}</div>
            <div>Age: ${criminalObject.age}</div>
            <div>Crime: ${criminalObject.conviction}</div>
            <div>Start: ${new Date(criminalObject.incarceration.start).toLocaleDateString('en-US')}</div>
            <div>End: ${new Date(criminalObject.incarceration.end).toLocaleDateString('en-US')}</div>
       
    </section>
     `
}

export default Criminal




// export const Criminal = (criminalObject) => {
//     return `
//     <div class="criminal">
//         <h4>${criminalObject.name}</h4>
//         <div class="criminal__details">
//             <p>Convicted for ${criminalObject.conviction}</p>
//             <p>Arrested by ${criminalObject.arrestingOfficer}</p>
//             <p>Incarcerated between:
//                 ${new Date(criminalObject.incarceration.start).toLocaleDateString()} and
//                 ${new Date(criminalObject.incarceration.end).toLocaleDateString()}
//             </p>
//             <p>Age: ${criminalObject.age}</p>
//         </div>
//     </div>
//     `
// }

