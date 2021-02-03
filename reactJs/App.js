import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import NoteComponent from './components/NoteComponent';
import HeaderComponent from './components/HeaderComponent';
import CreateNoteComponenet from './components/CreateNoteComponenet';
import GetNoteComponent from './components/GetNoteComponent';

function App() {
  return (
    <div>
      <Router>
        <HeaderComponent />
          <Switch>
            <Route path = "/" exact component = {NoteComponent}></Route>
            <Route path = "/notes" component = {NoteComponent}></Route>
            <Route path = "/addnotes" component = {CreateNoteComponenet}></Route>
            <Route path = "/getnotes/:id" component = {GetNoteComponent}></Route>
          </Switch>
        </Router>
    </div>
  );
}

export default App;
