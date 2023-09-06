const UserInput = () => {
  return (
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
            Billing address <span className="text-secondary">(optional)</span>
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
          Compay details <span className="text-secondary">(optional)</span>
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
  );
};
export default UserInput;
