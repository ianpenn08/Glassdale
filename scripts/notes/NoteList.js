
import { useNotes } from './NoteDataProvider.js'
import { useCriminals } from '../criminals/CriminalProvider.js'


const render = (noteCollection, criminalCollection) => {
    contentTarget.innerHTML = noteCollection.map(note => {
        // Find the related criminal
        const relatedCriminal = criminalCollection.find(criminal => criminal.id === note.criminalId)

        return `
            <section class="note">
                <h2>Note about ${relatedCriminal.name}</h2>
                ${note.noteText}
            </section>
        `
    })
}

export const NoteList = () => {
    const notes = useNotes()
    const criminals = useCriminals()

    render(notes, criminals)
}