import { useWitnesses } from "./WitnessProvider.js"

const contentTarget = document.querySelector(".knownWitnessesContainer")
const eventHub = document.querySelector(".container")

eventHub.addEventListener("knownWitnessesClicked", customEvent => {
    // Get the criminal id
    const witnessId = customEvent.detail.chosenWitness

    const witnessArray = useWitnesses()

    // Find returns the very first object that matches the condition in the callback function
    const iFoundYou = witnessArray.find(
        (currentWitness) => {
            if (currentWitness.id === parseInt(witnessId)) {
                return true
            }
            return false
        }
    )

    KnownWitnessesDialog(iFoundYou)

    const myFunnyDialog = document.querySelector("#funny")
    myFunnyDialog.showModal()
})

export const KnownWitnessesDialog = (witnessObject) => {
    contentTarget.innerHTML = `
        <dialog id="funny">
            ${
                witnessObject.statements.map(
                    (currentWitness) => {
                        return `<div>${currentWitness.name}</div>
                                <ul>
                                    <li>${currentWitness.statements}</li>
                                </ul>
                        `
                    }
                ).join("")
            }
        </dialog>
    `
}