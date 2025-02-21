import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<h1>HOME</h1>} />
          <Route path="/favourites" />
          <Route path="*" />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
