  
import "./Witnesses/WitnessList.js"
import "./criminals/KnownAssociatesDialog.js"
import { NoteForm } from "./notes/NoteForm.js"
import  NotesList  from "./notes/NoteList.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getCriminals } from "./criminals/CriminalProvider.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { getConvictions } from "./convictions/ConvictionProvider.js"
import  ConvictionSelect  from "./convictions/ConvictionSelect.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import { WitnessStatementButton } from "./Witnesses/WitnessDialog.js"

getCriminals()
    .then(CriminalList)
    .then(NotesList)
    .then(NoteForm)

getConvictions()
    .then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()


WitnessStatementButton()

