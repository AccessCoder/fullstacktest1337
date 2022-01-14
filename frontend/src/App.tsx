import React, {useState} from 'react';
import './App.css';
import {BrowserRouter, Route, Router, Routes} from "react-router-dom";
import MainPage from "./Pages/MainPage";
import Einkaufsliste from "./Pages/Einkaufsliste";
import ImageSite from "./Pages/ImageSite";
import ShoppingListItem from "./Model/ShoppingListItem";

function App() {
/*
* [Anzahl Elemente Anzeigen und verändern] 1,5h
* [Farbgebung harmonisieren, Layout anpassen] 2h
* [Funktion Items auf der Einkaufsliste durchstreichen zu können.] 1h
*/
  const STORAGE_KEY = 'myValueKey';
  const [items, setItems] = useState<ShoppingListItem[]>(JSON.parse(localStorage.getItem(STORAGE_KEY) || "[]"));
  React.useEffect(() => {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(items));
  }, [items]);

  return (
      <div className={"App-header"}>
    <BrowserRouter>
      <Routes>
        <Route path={"/"} element={<MainPage />} />
        <Route path={"/einkaufsliste"} element={<Einkaufsliste items={items} setItems={setItems}/>} />
        <Route path={"/heatitup"} element={<ImageSite />} />
      </Routes>
    </BrowserRouter>
      </div>
  );
}

export default App;
