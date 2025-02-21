import { Button, Container, FormControl, FormGroup, Navbar } from "react-bootstrap";
import logoBig from "../assets/logoBig.png";
import { BookFill, EggFill, HeartFill, HouseDoorFill } from "react-bootstrap-icons";
import { Form } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { setSearchAction, setSearchedResultsAction } from "../redux/actions";
import { Link } from "react-router";

const MySidebar = () => {
  const dispatch = useDispatch();
  const search = useSelector((state) => state.search.content);
  const handleSubmit = async (e) => {
    e.preventDefault();
    dispatch(setSearchedResultsAction(search));
  };

  return (
    <>
      <aside>
        <Navbar className="navbar-expand-md fixed-left justify-content-between" id="sidebar">
          <Container className="flex-column align-items-start">
            <Link className="navbar-brand" to="/">
              <img src={logoBig} alt="Spotify Logo" width="131" height="40" />
            </Link>
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
                    <Link className="nav-item nav-link d-flex align-items-center" to="/">
                      <HouseDoorFill />
                      &nbsp; Home
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/">
                      <BookFill />
                      &nbsp; Your Library
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/favourites">
                      <HeartFill />
                      &nbsp; Favourites
                    </Link>
                  </li>
                  <li>
                    <Link className="nav-item nav-link d-flex align-items-center" to="/percorsochenonesiste">
                      <EggFill />
                      &nbsp; Click here
                    </Link>
                  </li>
                  <li>
                    <Form onSubmit={handleSubmit}>
                      <FormGroup className="input-group mt-3">
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
            <Button className="signup-btn" type="button">
              Sign Up
            </Button>
            <Button className="btn login-btn" type="button">
              Login
            </Button>
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
