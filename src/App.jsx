import "./App.css";

function App() {
  return (
    <>
      <body className="container-fluid vh-100 d-flex jusfify-content-center align-items-center">
        <div className="container col-10 p-5 bg-white">
          <nav className="navbar mb-5">
            <div className="container">
              <a className="navbar-brand" href="#">
                <i className="bi bi-arrow-left text-secondary"></i>
              </a>
              <h3>Subscribe to Creator</h3>
              <a className="navbar-brand" href="#">
                <i className="bi bi-x-lg text-secondary"></i>
              </a>
            </div>
          </nav>
          <div className="container mx-5 row">
            <div className="col me-5">
              <p className="fs-5">Add your payment information</p>

              {/* <div className="form-check row p-2">
                <label
                  class="btn border-secondary-subtle  col-6"
                  for="flexCheckDefault"
                >
                  <input
                    class="form-check-input ms-5"
                    type="radio"
                    value=""
                    id="flexCheckDefault"
                  />
                  <span className="text-dark">Default checkbox</span>
                </label>
              </div> */}
              <div className="">
                <div className="d-flex justify-content-between">
                  <label
                    class="btn border-secondary-subtle py-2 col-5 form-check-label"
                    for="flexRadioDefault1"
                  >
                    <span>Default radio</span>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </label>
                  <label
                    class="btn border-secondary-subtle py-2 col-5 form-check-label"
                    for="flexRadioDefault1"
                  >
                    <span>Default radio</span>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                  </label>
                </div>
              </div>

              <form className="row g-3">
                <div className="col-md-6">
                  <label for="inputEmail4" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="inputEmail4"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputPassword4" className="form-label">
                    Password
                  </label>
                  <input
                    type="password"
                    className="form-control"
                    id="inputPassword4"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress" className="form-label">
                    Address
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress"
                    placeholder="1234 Main St"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Address 2
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="inputAddress2"
                    placeholder="Apartment, studio, or floor"
                  />
                </div>
                <div className="col-md-6">
                  <label for="inputCity" className="form-label">
                    City
                  </label>
                  <input type="text" className="form-control" id="inputCity" />
                </div>
                <div className="col-md-4">
                  <label for="inputState" className="form-label">
                    State
                  </label>
                  <select id="inputState" className="form-select">
                    <option selected>Choose...</option>
                    <option>...</option>
                  </select>
                </div>
                <div className="col-md-2">
                  <label for="inputZip" className="form-label">
                    Zip
                  </label>
                  <input type="text" className="form-control" id="inputZip" />
                </div>
                <div className="col-12">
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      id="gridCheck"
                    />
                    <label className="form-check-label" for="gridCheck">
                      Check me out
                    </label>
                  </div>
                </div>
                <div className="col-12">
                  <button type="submit" className="btn btn-primary">
                    Sign in
                  </button>
                </div>
              </form>
            </div>
            <div className="col-4">
              <p className="fs-5">Review your team's subscription</p>
            </div>
          </div>
        </div>
      </body>
    </>
  );
}

export default App;
