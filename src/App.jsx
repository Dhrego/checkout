import { useState } from "react";
import "./App.scss";

const App = () => {
  const [toggle, setToggle] = useState(false);

  const toggleHandler = () => {
    setToggle((toggle) => !toggle);
  };
  return (
    <>
      <main className="container-fluid d-flex justify-content-center align-items-center">
        {!toggle && (
          <div className="text-center col-10">
            <button
              className="btn sub py-3 px-5"
              type="button"
              onClick={toggleHandler}
            >
              Subscribe
            </button>{" "}
          </div>
        )}

        {toggle && (
          <div className="container p-md-5 p-5 m-2 bg-white">
            <nav className="navbar mb-5">
              <div className="container">
                <a className="navbar-brand" href="#" onClick={toggleHandler}>
                  <i className="bi bi-arrow-left text-secondary"></i>
                </a>
                <h3>Subscribe to Creator</h3>
                <a className="navbar-brand" onClick={toggleHandler} href="#">
                  <i className="bi bi-x-lg text-secondary"></i>
                </a>
              </div>
            </nav>
            <div className="container-md-fluid ms-md-5 row pb-5">
              <div className="col-md me-5">
                <p className="fs-5">Add your payment information</p>

                <div className="">
                  <div className="col-md d-flex gap-3">
                    <label
                      className="btn border-secondary-subtle py-2 col form-check-label"
                      htmlFor="flexRadioDefault1"
                    >
                      <span>Card</span>{" "}
                      <img className="img-fluid w-25" src="card.png" alt="" />
                      <input
                        className="form-check-input float-end"
                        type="radio"
                        name="flexRadioDefault"
                        id="flexRadioDefault1"
                      />
                    </label>
                    <label
                      className="btn border-secondary-subtle py-2 col form-check-label"
                      htmlFor="flexRadioDefault2"
                    >
                      <img className="img-fluid w-25" src="paypal.png" alt="" />
                      <input
                        className="form-check-input float-end"
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
                    <div className="input-group">
                      <input
                        type="tel"
                        inputMode="numeric"
                        className="form-control py-2"
                        pattern="(?:0[1-9]|1[0-2])/[0-9]{2}"
                        maxLength="19"
                        placeholder="Card Number"
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="mm/yy"
                        maxLength={5}
                      />
                      <input
                        type="text"
                        className="form-control"
                        placeholder="ccv/cvv"
                        maxLength={3}
                      />
                    </div>
                  </div>
                  <div className="col-12">
                    <label htmlFor="inputAddress2" className="form-label">
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
                      className="form-select py-2"
                      aria-label="Default select example"
                    >
                      <option value="0">Ghana</option>
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
              <div className="col-md-5 mt-md-0 mt-2">
                <p className="fs-5">Review your team's subscription</p>
                <div className="d-flex gap-5">
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio1"
                      value="option1"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      Pay monthly
                    </label>
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="inlineRadioOptions"
                      id="inlineRadio2"
                      value="option2"
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      Pay yearly
                    </label>
                  </div>
                </div>
                <div className="container-md row mt-4 mb-3">
                  <div className="col text-white mx-1 text-center rounded-3 bg-primary fs-2">
                    R
                  </div>
                  <div className="col-6">
                    <p className="m-0 text-secondary">Creator</p>
                    <p className="m-0 text-body-tertiary">5 editors x $9/mo</p>
                  </div>
                  <div className="col-md-4 text-secondary">$45.00 USD</div>
                </div>
                <div className="add">
                  <p className="">
                    <a href="#" className="text-decoration-none">
                      <i className="bi bi-plus-lg me-2"></i>Add a coupon
                    </a>
                  </p>
                </div>
                <div className="my-4 col-md-11">
                  <hr />
                </div>
                <div className="col-11 fs-4 d-flex justify-content-between">
                  <p>To pay now</p>
                  <p>$45.00 USD</p>
                </div>
                <div className="d-grid my-2 col-md-11">
                  <button className="btn sub p-3">Subscribe</button>
                  <p className="text-body-tertiary my-2 fs-6">
                    By continuing, you agree to Clipchamp's{" "}
                    <a href="#" className="text-body-tertiary">
                      terms
                    </a>{" "}
                    and{" "}
                    <a href="#" className="text-body-tertiary">
                      privacy policy
                    </a>
                    . You'll be charged $45.00 USD every month until you cancel
                    your subscription.
                  </p>
                </div>
              </div>
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
