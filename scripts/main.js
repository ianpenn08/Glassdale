import { getCriminals } from "./criminals/CriminalProvider.js"
import { CriminalList } from "./criminals/CriminalList.js"
import { getConvictions } from "./convictions/convictionProvider.js"
import  ConvictionSelect  from "./convictions/ConvictionSelect.js"
import { DisplayNotesButton } from "./notes/DisplayNotesButton.js"
import { DisplayNoteFormButton } from "./notes/DisplayNoteFormButton.js"
import  NoteForm  from "./notes/NoteForm.js"
import { NotesList } from "./notes/NoteList.js"

getCriminals().then(CriminalList)
getConvictions().then(ConvictionSelect)

DisplayNotesButton()
DisplayNoteFormButton()
NoteForm()
NotesList()

