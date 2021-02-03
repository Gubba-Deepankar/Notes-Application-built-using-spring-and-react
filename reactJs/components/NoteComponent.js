import React, { Component } from 'react';
import NoteService from '../services/NoteService';

class NoteComponent extends Component {

    constructor(props)
    {
        super(props);
        this.state = {
            notes : [],
            selectValue : 'Created',
        }
        this.addNote = this.addNote.bind(this);
        this.handleClick = this.handleClick.bind(this);
        this.filterButton = this.filterButton.bind(this);
        this.handleChange = this.handleChange.bind(this);
    }

    componentDidMount(){
           NoteService.getNotes().then((response) => {
               this.setState({notes : response.data});
           });
    }

    handleChange(event)
    {
        this.setState({selectValue : event.target.value});
    }

    filterButton(event)
    {
        event.preventDefault();
        let value = this.state.selectValue;
        if(value === 'Recent')
        {
            NoteService.getNotesByRecent().then((response) => {
                this.setState({notes : response.data});
            });
        }
        else if(value === 'Created'){
            NoteService.getNotes().then((response) => {
                this.setState({notes : response.data});
            });
        }
        else if(value === 'Alphabetical')
        {
            NoteService.getNotesByAlphaOrder().then((response) => {
                this.setState({notes : response.data});
            });
        }
    }

    handleClick(event)
    {
        let c = event.target.childNodes[3].value;
        console.log(c);
        this.props.history.push(
            {
                pathname : '/getnotes/'+c,
                //search : c,
            }
        );
    }

    addNote(){
        this.props.history.push('/addnotes');
    }

    render() {
        let count = 1;
        return (
            <div className = 'bg-dark text-white' style = {{margin : '25px'}}>
                
                {/* For filtering choices */}
                <div className = "container" >
                    <br></br>
                    <button className = "btn btn-primary" onClick = {this.addNote}>Add Notes</button>
                    <select className = "badge badge-info text-right" style = {{marginLeft : '550px'}}  value = {this.state.selectValue} onChange = {this.handleChange}>
                        <option value = 'Created'>Created</option>
                        <option value = 'Alphabetical'>Alphabetical</option>
                        <option value = 'Recent'>Recent</option>
                    </select>
                    <button className = "text-right btn btn-info" onClick = {this.filterButton}>Filter</button>
                </div>

                <h3>Notes:</h3>
                <div className = "row text-center" style = {{marginLeft : '25px'}}>
                    {
                        this.state.notes.map(
                            note => 
                            (
                            <div key = {note.id} className = "card bg-dark  text-center text-white col-5" style = {{margin : '20px'}}>
                            <div  className = "card-body" onMouseOver = 
                            {
                                function (e) 
                                {
                                    e.target.classList.remove('bg-dark');
                                    e.target.classList.remove('text-white');
                                    e.target.classList.add('bg-white');
                                    e.target.classList.add('text-dark');
                                }
                            } 
                                onMouseOut = {function (e) 
                                    {
                                        e.target.classList.remove('bg-white');
                                        e.target.classList.remove('text-dark');
                                        e.target.classList.add('bg-dark');
                                        e.target.classList.add('text-white');
                                    }
                                    }
                                onClick = {this.handleClick                                
                                }    
                                >

                                {count++})  {note.title}

                                <input type = "hidden" value={note.id}></input>
                            </div>
                            </div>
                            )
                        )
                    }
                </div>
            </div>
        );
    }
}

export default NoteComponent;