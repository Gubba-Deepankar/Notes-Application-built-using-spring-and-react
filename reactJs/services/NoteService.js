import axios from 'axios';

const NOTE_BASE_API_URL = 'http://localhost:8080/api/notesHomePage';
const NOTE_CREATE_API_URL = 'http://localhost:8080/api/AddNote';

class NoteService
{
    getNotes(){
        return axios.get(NOTE_BASE_API_URL);
    }

    createnotes(note)
    {
        return axios.post(NOTE_CREATE_API_URL,note);
    }

    getNoteById(id)
    {
        let url = 'http://localhost:8080/api/note/'+id;
        console.log(url);
        return axios.get(url);
    }

    updateNote(note)
    {
        let url = 'http://localhost:8080/api/updateNote';
        return axios.put(url,note);
    }

    deleteNote(givenId)
    {
        let url = 'http://localhost:8080/api/deleteNote/'+givenId;
        return axios.delete(url);
    }

    getNotesByRecent()
    {
        let url = 'http://localhost:8080/api/notesByRecentDate';
        return axios.get(url);
    }

    getNotesByAlphaOrder()
    {
        let url = 'http://localhost:8080/api/notesByAlpha';
        return axios.get(url);
    }
}

export default new NoteService();