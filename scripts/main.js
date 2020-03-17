import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/convictionProvider.js"
import ConvictionSelect from "./convictions/ConvictionSelect.js"
import NoteForm from "./notes/NoteForm.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import "./notes/NoteList.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"

getCriminals().then(CriminalList)

// first get all convictions, THEN create the conviction dropdown
getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
