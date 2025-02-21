import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyHomePage from "./components/MyHomePage";
import MyFavourites from "./components/MyFavourites";
import MyUovoDiPasqua from "./components/MyUovoDiPasqua";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/favourites" element={<MyFavourites />} />
          <Route path="*" element={<MyUovoDiPasqua />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
