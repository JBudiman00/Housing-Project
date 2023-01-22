import Login from './Components/Login';
import SignUp from './Components/SignUp';
import './App.css';
import NavBar from './Components/Navbar';
import SearchResults from './Components/SearchResults';
import SearchMainPage from './Components/SearchMainPage';
import { React, useState } from 'react';
import Reservation from './Components/Reservation';
import { BrowserRouter, Routes, Route } from "react-router-dom";
import data from "./data.json";

function App() {
  const [price, setPrice1] = useState({price1: 0, price2: 0});
  const [start_date, setStartDate] = useState(new Date());
  const [end_date, setEndDate] = useState(new Date());
  const [address, setAddress] = useState('');

  const [newdata, setNewData] = useState(data.map(data => {
    return (
      <SearchResults
        key={data.id}
        address={data.Address}
        price={data.Rate}
        storageSize={data.size}
        imageURL={data.image_url}
        owner={data.Owner}
        name={data.name}
        contact={data.contact}
      />
    )
  }))

  function handlePrice1(event) {
    setPrice1(prevFormData => {
      console.log(event.target.value)
      return {
        ...prevFormData,
        [event.target.name]: event.target.value
      }
    })
  }

  const handleChange = (event) => {
    console.log(price.price2)
    setNewData(data.filter(dat => (dat.Rate >= price.price1 && dat.Rate <= price.price2)).map(
      data => {
        return (
          <SearchResults
            key={data.id}
            address={data.Address}
            price={data.Rate}
            storageSize={data.size}
            imageURL={data.image_url}
            owner={data.Owner}
            name={data.name}
            contact={data.contact}
          />
        )
      }
    ))
  }


  return (
    <div className="App">
      <BrowserRouter>
        <NavBar handleChange={handleChange} />
        <Routes>
          <Route exact path="/"
            element={
              (
                <>
                  <SearchMainPage
                    price1={price.price1}
                    price2={price.price2}
                    startDate={start_date}
                    endDate={end_date}
                    address={address}
                    setStartDate={setStartDate}
                    setEndDate={setEndDate}
                    setPrice1={handlePrice1}
                    setAddress={setAddress}
                  />
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
