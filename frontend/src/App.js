import './App.css';
import { createBrowserRouter } from 'react-router-dom';
import ROUTES from './Routes/Router';
import MainContext from "./Context/Context"
import { RouterProvider } from 'react-router';
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const router = createBrowserRouter(ROUTES)

  const [data, setData] = useState([])
  const [basket, setBasket] = useState( [])
  const [inpVal, setInpVal] = useState("");
  useEffect(() => {
    axios.get("http://localhost:8080/api/examenthree")
      .then((res) => {
        if (inpVal.trim() !== "") {
          const result = res.data.filter((item) => {
            return item.title
              .split("")
              .join("")
              .toLowerCase()
              .includes(inpVal.trim().toLowerCase());
          });
          setData([...result]);
        } else {
          setData([...res.data]);
        }
      })
  },[inpVal] )

  const contextData = {
    data, setData, basket, setBasket, inpVal, setInpVal
  }


  return (
    <MainContext.Provider value={contextData}>
      <RouterProvider router={router} />
    </MainContext.Provider>
  )
}

export default App;
