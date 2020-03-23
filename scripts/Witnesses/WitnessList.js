import { useWitnesses } from "./WitnessProvider.js";
import  Witness  from "./Witness.js";

const contentTarget = document.querySelector(".criminalsContainer")
const eventHub = document.querySelector(".container")

contentTarget.addEventListener("click", clickEvent => {
    if (clickEvent.target.id.startsWith("witnesses--")) {
        // Get the id of the criminal that was clicked
        const [junk, witnessId] = clickEvent.target.id.split("--")

        // Yell at the system that a known associates button was clicked
        const showWitnessesEvent = new CustomEvent("knownWitnessesClicked", {
            // Make sure to tell the system exactly which criminal button was clicked
            detail: {
                chosenWitness: witnessId
            }
        })

        eventHub.dispatchEvent(showWitnessesEvent)
    }
})


export const CriminalList = () => {
    const criminals = useCriminals()

    for (const singleCriminal of criminals) {
        contentTarget.innerHTML += Criminal(singleCriminal)
    }
}