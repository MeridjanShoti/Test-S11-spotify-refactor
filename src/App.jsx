import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyHomePage from "./components/MyHomePage";
import MyFavourites from "./components/MyFavourites";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MyHomePage />} />
          <Route path="/favourites" element={<MyFavourites />} />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
