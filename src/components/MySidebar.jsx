import { Button, Container, FormControl, FormGroup, Navbar } from "react-bootstrap";
import logoBig from "../assets/logoBig.png";
import { BookFill, HouseDoorFill } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAction, setSearchedResultsAction } from "../redux/actions";

const MySidebar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.content);
  const handleSubmit = () => {
    async () => {
      try {
        let response = await fetch("https://striveschool-api.herokuapp.com/api/deezer/search?q=" + search);
        if (response.ok) {
          let { data } = await response.json();
          dispatch(setSearchedResultsAction(data));
        } else {
          throw new Error("Error in fetching songs");
        }
      } catch (err) {
        console.log("error", err);
      }
    };
  };
  return (
    <>
      <aside>
        <Navbar className="navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <a className="navbar-brand" href="index.html">
              <img src={logoBig} alt="Spotify Logo" width="131" height="40" />
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-toggle="collapse"
              data-target="#navbarNavAltMarkup"
              aria-controls="navbarNavAltMarkup"
              aria-expanded="false"
              aria-label="Toggle navigation"
            >
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
              <div className="navbar-nav">
                <ul>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <HouseDoorFill />
                      &nbsp; Home
                    </a>
                  </li>
                  <li>
                    <a className="nav-item nav-link d-flex align-items-center" href="#">
                      <BookFill />
                      &nbsp; Your Library
                    </a>
                  </li>
                  <li>
                    <Form>
                      <FormGroup className="input-group mt-3" onSubmit={handleSubmit(search)}>
                        <FormControl
                          type="text"
                          placeholder="Search"
                          aria-label="Search"
                          onChange={(e) => dispatch(setSearchAction(e.target.value))}
                          value={search}
                        />
                        <div className="input-group-append">
                          <Button type="submit" className="btn-outline-secondary btn-sm h-100">
                            GO
                          </Button>
                        </div>
                      </FormGroup>
                    </Form>
                  </li>
                </ul>
              </div>
            </div>
          </Container>
          <div className="nav-btn">
            <button className="btn signup-btn" type="button">
              Sign Up
            </button>
            <button className="btn login-btn" type="button">
              Login
            </button>
            <div>
              <a href="#">Cookie Policy</a> |<a href="#"> Privacy</a>
            </div>
          </div>
        </Navbar>
      </aside>
    </>
  );
};
export default MySidebar;
