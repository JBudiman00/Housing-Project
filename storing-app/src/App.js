import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './App.css';
import NavBar from './Components/Navbar';
import SearchResults from './Components/SearchResults';
import SearchMainPage from './Components/SearchMainPage';
import { React} from 'react';
import Geocode from "react-geocode";
import Reservation from './Components/Reservation';
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
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
                      <SearchResults
                        changeLocation={() => this.changeLocation("1301 3rd Street, West Lafayette, IN 47906")}
                        address={"1301 3rd Street, West Lafayette, IN 47906"}
                        price={""}
                        storageSize={""}
                      />
                      <SearchResults
                        changeLocation={() => this.changeLocation("1301 3rd Street, West Lafayette, IN 47906")}
                        price={""}
                        storageSize={""}
                        address={"1275 3rd Street, West Lafayette, IN 47906"}
                      />
                      <SearchResults
                        address={"1301 3rd Street, West Lafayette, IN 47906"}
                        price={""}
                        storageSize={""}
                      />
                      <SearchResults
                        price={""}
                        storageSize={""}
                        address={"1275 3rd Street, West Lafayette, IN 47906"}
                      />
                      <SearchResults
                        price={""}
                        storageSize={""}
                        address={"1275 3rd Street, West Lafayette, IN 47906"}
                      />
                    </div>
                  </div>
                </>
              )} />

            <Route path="/login" element ={<Login />} />
            <Route path="/sign-up" element ={<SignUp />} />
            <Route path="/reservation/:address"  element={<Reservation />} exact/>
        </Routes>
      </BrowserRouter>
      
    </div>
  );
}

export default App;