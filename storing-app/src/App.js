import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './App.css';
import NavBar from './Components/Navbar';
import SearchResults from './Components/SearchResults';
import SearchMainPage from './Components/SearchMainPage';
import { React } from 'react';
import Geocode from "react-geocode";
import Reservation from './Components/Reservation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";

function App() {
  const newdata = data.map(data => {
    return (
      <SearchResults
        key = {data.id}
        address={data.Address}
        price={data.Rate}
        storageSize={data.size}
        imageURL={data.image_url}
        owner={data.Owner}
        name={data.name}
        contact={data.contact}
      />
    )
  })
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route exact path="/"
            element={
              (
                <>
                  <SearchMainPage />
                  <div className="listings">
                    <div className="results">
                      {newdata}
                    </div>
                  </div>
                </>
              )} />

          <Route path="/login" element={<Login />} />
          <Route path="/sign-up" element={<SignUp />} />
          <Route path="/reservation/:owner/:price/:name/:size" element={<Reservation />} exact />
        </Routes>
      </BrowserRouter>

    </div>
  );
}

export default App;