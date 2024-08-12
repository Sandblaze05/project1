import logo from './logo.svg';
import './App.css';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import LoginForm from './Components/LoginForm/LoginForm';
import SignUpForm  from './Components/LoginForm/SignUpForm';

function App() {
  return (
    <div>
      <Router>
        <Routes>
          <Route path="/project1/" element={<LoginForm/>}/>
          <Route path="/project1/SignUpForm" element={<SignUpForm/>}/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
