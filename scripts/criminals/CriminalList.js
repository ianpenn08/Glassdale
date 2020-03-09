
import { useCriminals, getCriminals } from "./CriminalProvider.js"
import Criminal from "./Criminal.js";

const contentTarget = document.querySelector(".criminalsContainer")

const criminalList = () => {

getCriminals().then(() => {
    const criminalObjectsArray = useCriminals()

    for (const criminalObject of criminalObjectsArray) {
        // Convert each object to HTML representation
        const criminalHTMLRepresentation = Criminal(criminalObject)
        // Put HTML in DOM
        contentTarget.innerHTML += criminalHTMLRepresentation

    }
})


}

export default criminalList