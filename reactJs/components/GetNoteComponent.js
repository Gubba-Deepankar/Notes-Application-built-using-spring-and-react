import React, { Component } from 'react';
import NoteService from '../services/NoteService';

class GetNoteComponent extends Component {

    constructor(props){
        super(props);
        this.state = {
            theNote : {},
            title : '',
            content : '',
            id : 1,
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.addNoteButton = this.addNoteButton.bind(this);
        this.deleteButton = this.deleteButton.bind(this);
    }

    componentDidMount(){
        let c = this.props.match.params.id;
        //console.log('Hello '+c);
        NoteService.getNoteById(c).then((response) => {
            this.setState({theNote : response.data,
            id : c});
        });
    }

    addNoteButton = (e) =>
    {
        e.preventDefault();   
        let note = {id : this.state.id, title : this.state.theNote.title, content : this.state.theNote.content, date : new Date().toISOString().slice(0, 19).replace('T', ' ')};
        console.log('note => '+ JSON.stringify(note));
        console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));



       NoteService.updateNote(note).then(res => {
            this.props.history.push('/notes');
        });
    }

    deleteButton = () =>
    {
        let c = window.confirm("Are you sure you want to Delete this note?");
        let id = this.state.id;
        if(c === true)
        {
            NoteService.deleteNote(id);
            this.props.history.push('/notes');
            
        }
    }

    cancel = (event) =>
    {
       this.props.history.push('/notes');
    }

    changeTitleHandler= (event) =>{
        this.setState({title : event.target.value,
        theNote : {
            ...this.state.theNote,
            title : event.target.value
        }
        });
    }

    changeContentHandler = (event) =>{
        this.setState({content : event.target.value,
            theNote : {
                ...this.state.theNote,
                content : event.target.value
            }
        });
    }

    render() {
        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-sm-6 offset-md-3 offset-md-3'>
                            <h3>{this.state.theNote.title}</h3>
                            <div className = 'card-body'>
                                <form >
                                    <div className = 'form-group'>
                                        <label>Title:</label>
                                        <input name = 'title' className = "form-control" 
                                        value = {this.state.theNote.title} onChange = {this.changeTitleHandler}></input>
                                    </div>
                                    <div className = 'form-group'>
                                        <label>Content:</label>
                                        <textarea rows = '5' name = 'content' className = "form-control" 
                                        value = {this.state.theNote.content} onChange = {this.changeContentHandler}></textarea>
                                    </div>
                                    <button className = 'btn btn-success' onClick = {this.addNoteButton}>Save</button>
                                    <button className = 'btn btn-danger' onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}}>Back</button>
                                    <button className = 'btn btn-warning' onClick = {this.deleteButton} style = {{marginLeft : "10px"}}>Delete</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default GetNoteComponent;