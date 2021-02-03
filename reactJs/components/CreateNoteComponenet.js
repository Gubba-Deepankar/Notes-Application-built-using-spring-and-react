import React, { Component } from 'react';
import NoteService from '../services/NoteService';

class CreateNoteComponenet extends Component {
    constructor(props) {
        super(props);

        this.state = {
            title : '',
            content : '',
        }

        this.changeTitleHandler = this.changeTitleHandler.bind(this);
        this.changeContentHandler = this.changeContentHandler.bind(this);
        this.addNoteButton = this.addNoteButton.bind(this);
    }

    addNoteButton = (e) =>
    {
        e.preventDefault();   
        let note = {title : this.state.title, content : this.state.content, date : new Date().toISOString().slice(0, 19).replace('T', ' '),};
        console.log('note => '+ JSON.stringify(note));
        console.log(new Date().toISOString().slice(0, 19).replace('T', ' '));



        NoteService.createnotes(note).then(res => {
            this.props.history.push('/notes');
        });
    }

    cancel = (event) =>
    {
       this.props.history.push('/notes');
    }

    changeTitleHandler= (event) =>{
        this.setState({title : event.target.value});
    }

    changeContentHandler = (event) =>{
        this.setState({content : event.target.value});
    }
    
    render() {
        return (
            <div>
                <div className = 'container'>
                    <div className = 'row'>
                        <div className = 'card col-sm-6 offset-md-3 offset-md-3'>
                            <h3>Add Notes</h3>
                            <div className = 'card-body'>
                                <form >
                                    <div className = 'form-group'>
                                        <label>Title:</label>
                                        <input name = 'title' className = "form-control" 
                                        value = {this.state.title} onChange = {this.changeTitleHandler}></input>
                                    </div>
                                    <div className = 'form-group'>
                                        <label>Content:</label>
                                        <textarea rows = '5' name = 'content' className = "form-control" 
                                        value = {this.state.content} onChange = {this.changeContentHandler}></textarea>
                                    </div>
                                    <button className = 'btn btn-success' onClick = {this.addNoteButton}>Add</button>
                                    <button className = 'btn btn-danger' onClick = {this.cancel.bind(this)} style = {{marginLeft : "10px"}}>Cancel</button>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

CreateNoteComponenet.propTypes = {

};

export default CreateNoteComponenet;