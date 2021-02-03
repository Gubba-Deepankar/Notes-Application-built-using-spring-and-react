const React = require('react');
const ReactDOM = require('react-dom');
const client = require('./client'); 

class App extends React.Component {

	constructor(props) {
		super(props);
		this.state = {notes: []};
	}

	componentDidMount() {
		client({method: 'GET', path: '/notesHomePage'}).done(response => {
			this.setState({notes: response.entity._embedded.notes});
		});
	}

	render() {
		return (
			<NoteList notes = {this.state.notes}/>
		)
	}
}

class NoteList extends React.Component{
	render() {
		const notes = this.props.notes.map(note =>
			<Note key={note.title} note = {note}/>
		);
		return (
			<table>
				<tbody>
					<tr>
						<th>First Name</th>
						<th>Last Name</th>
						<th>Description</th>
					</tr>
					{notes}
				</tbody>
			</table>
		)
	}
}

class Note extends React.Component{
	render() {
		return (
			<tr>
				<td>{this.props.note.title}</td>
				<td>{this.props.note.content}</td>
				<td>{this.props.note.dateCreated}</td>
			</tr>
		)
	}
}

ReactDOM.render(
	<App />,
	document.getElementById('react')
)