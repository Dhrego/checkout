import "./App.scss";

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
          <div className="container-md ms-md-5 row">
            <div className="col-md me-5">
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
                <div className="col-md d-flex gap-3">
                  <label
                    class="btn border-secondary-subtle py-2 col form-check-label"
                    for="flexRadioDefault1"
                  >
                    <span>Card</span>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault1"
                    />
                  </label>
                  <label
                    class="btn border-secondary-subtle py-2 col form-check-label"
                    for="flexRadioDefault2"
                  >
                    <span>Paypal</span>
                    <input
                      class="form-check-input float-end"
                      type="radio"
                      name="flexRadioDefault"
                      id="flexRadioDefault2"
                    />
                  </label>
                </div>
              </div>

              <form className="row mt-3 g-3">
                <p className="fs-6 m-0">Card details</p>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputEmail4"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputPassword4"
                    placeholder="Surname"
                  />
                </div>
                <div className="col-12">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputAddress"
                    placeholder="Card Number"
                  />
                </div>
                <div className="col-12">
                  <label for="inputAddress2" className="form-label">
                    Billing address{" "}
                    <span className="text-secondary">(optional)</span>
                  </label>
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputAddress2"
                    placeholder="Address"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputCity"
                    placeholder="City"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputState"
                    placeholder="State"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputZip"
                    placeholder="ZIP"
                  />
                </div>
                <div className="col-md-6">
                  <select
                    class="form-select py-2"
                    aria-label="Default select example"
                  >
                    <option selected>Ghana</option>
                    <option value="1">United States</option>
                    <option value="2">Italy</option>
                    <option value="3">Japan</option>
                  </select>
                </div>

                <p className="mb-0">
                  Compay details{" "}
                  <span className="text-secondary">(optional)</span>
                </p>
                <div className="col-md-6">
                  <input
                    type="text"
                    className="form-control py-2"
                    id="inputEmail4"
                    placeholder="Name"
                  />
                </div>
                <div className="col-md-6">
                  <input
                    type="text"
                    maxLength={20}
                    className="form-control py-2"
                    id="inputNumber"
                    placeholder="Address"
                  />
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
