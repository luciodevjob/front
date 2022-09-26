import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom";
import './App.css';
import Header from './components/Header'
import NotePage from "./pages/NotePage";
import NotesListPages from './pages/NotesListPages';

function App() {
  return (
    <Router>
      <div className="App">

        <Header/>
        <Route path="/" exact component={NotesListPages}/>
        <Route path="/note/:id" component={NotePage}/>
    
      </div>
    </Router>
  );
}

export default App;
