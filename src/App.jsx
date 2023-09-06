import { useState } from "react";
import "./App.scss";
import Checkout from "./components/Checkout/Checkout";
import UserInput from "./components/UserInput/UserInput";
import Navbar from "./components/Navbar/Navbar";

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
            <Navbar onClose={toggleHandler} />
            <div className="container-md-fluid ms-md-5 row pb-5">
              <UserInput />
              <Checkout />
            </div>
          </div>
        )}
      </main>
    </>
  );
};

export default App;
