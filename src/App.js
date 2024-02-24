import logo from './logo.svg';
import './App.css';
import AddPatient from './redux/addPatient';
import ListPatient from './redux/ListPayient';  // Corrected import statement
import { BrowserRouter ,  Route, Routes } from 'react-router-dom';  // Updated import

function App() {
  return (
    <div>
      <ListPatient />
    </div>
  );
}

export default App;
