import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Einkaufsliste from "./Pages/Einkaufsliste";
import ImageSite from "./Pages/ImageSite";
import ShoppingListItem from "./Model/IShoppingListItem";
import LoginPage from "./Pages/LoginPage";



function App() {
/*
* [Anzahl Elemente Anzeigen und verändern] 1,5h
* [Farbgebung harmonisieren, Layout anpassen] 2h
* [Funktion Items auf der Einkaufsliste durchstreichen zu können.] 1h
*/

  const [items, setItems] = useState<ShoppingListItem[]>([]);

  return (
      <div className={"App-header"}>
    <BrowserRouter>
      <Routes>
        <Route path={"/login"} element={<LoginPage />} />
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/einkaufsliste"} element={<Einkaufsliste items={items} setItems={setItems} />} />
        <Route path={"/heatitup"} element={<ImageSite />} />
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
