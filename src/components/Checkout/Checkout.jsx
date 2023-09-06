const Checkout = () => {
  return (
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
          . You'll be charged $45.00 USD every month until you cancel your
          subscription.
        </p>
      </div>
    </div>
  );
};
export default Checkout;
