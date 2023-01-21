import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './App.css';
import NavBar from './Components/Navbar';
import SearchResults from './Components/SearchResults';
import SearchMainPage from './Components/SearchMainPage';
import {React, useState, useEffect} from 'react';
import MapResults from './Components/MapAndResults';

function App() {
  const [login, setLogin] = useState(false)
  const [signup, setSignUp] = useState(false)
  

    function handleLogin() {
        if (!login) {
          setLogin(login => !login)
          setSignUp(false)
        }
    }

    function handleSignUp() {
      if (!signup) {
        setSignUp(signup => !signup)
        setLogin(false)
      }
    }

  return (
    <div className="App">
      <NavBar login = {handleLogin} signup = {handleSignUp} />
      {false && <SearchResults />}
      <SearchMainPage />
      <MapResults />
      {login && <Login />}
      {signup && <SignUp />}
    </div>
  );
}

export default App;