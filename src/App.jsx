import { BrowserRouter, Route, Routes } from "react-router";
import "./App.css";
import MyHomePage from "./components/MyHomePage";
import MyFavourites from "./components/MyFavourites";
import MyUovoDiPasqua from "./components/MyUovoDiPasqua";
import { Container } from "react-bootstrap";
function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={
              <Container fluid>
                <MyHomePage />
              </Container>
            }
          />
          <Route
            path="/favourites"
            element={
              <Container fluid>
                <MyFavourites />
              </Container>
            }
          />
          <Route
            path="*"
            element={
              <Container fluid>
                <MyUovoDiPasqua />
              </Container>
            }
          />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
