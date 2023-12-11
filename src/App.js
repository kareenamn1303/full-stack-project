import './App.css';
import DisplayRecords from './components/DisplayRecords';
import Form from './components/Form';
import axios from 'axios';

axios.defaults.withCredentials = true;
axios.defaults.baseURL = 'http://localhost:8000';

function App() {
  return (
    <div className="App">
      <Form/>
      <DisplayRecords/>
    </div>
  );
}

export default App;
