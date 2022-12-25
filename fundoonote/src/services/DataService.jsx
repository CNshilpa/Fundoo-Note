import axios from "axios"


const headerConfig = {
    headers : {
        Authorization : localStorage.getItem("token")

    }
}

export const createNoteApi = (data) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/addNotes',data,headerConfig)
    return response
}

export const getNoteListApi = () =>
{
    let response = axios.get('http://fundoonotes.incubation.bridgelabz.com/api/notes/getNotesList',headerConfig)
    return response
}

export const updateColorApi = (noteobj) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/changesColorNotes',noteobj,headerConfig)
    return response
}

export const updateArchiveApi =(noteobj) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/archiveNotes',noteobj,headerConfig)
    return response
} 

export const updateDeleteApi = (deleteNote) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/trashNotes',deleteNote,headerConfig )
    return response
}

export const updateNoteApi = (updateNote) =>
{
    let response = axios.post('http://fundoonotes.incubation.bridgelabz.com/api/notes/updateNotes',updateNote,headerConfig)
    return response
}