import React, { useRef, useState } from "react";

import SimpleReactValidator from "simple-react-validator";

const App = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const validator = useRef(
    new SimpleReactValidator({
      element: (message) => <div className="text-danger">{message}</div>
    })
  );

  return (
    <div className="d-flex justify-content-center ">
      <form className="mt-5">
        <div className="input-group d-flex flex-column">
          <span className="input-group-addon" id="email-address"></span>
          <input
            type="text"
            name="email"
            className="form-control mt-5"
            placeholder="email"
            aria-describedby="email-address"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
              validator.current.showMessageFor("email");
            }}
          />
          {validator.current.message("email", email, "required|email")}
        </div>
        <div className="input-group d-flex flex-column mt-4">
          <span className="input-group-addon" id="password"></span>
          <input
            type="password"
            name="password"
            className="form-control mb-3"
            placeholder="password"
            aria-describedby="password"
            value={password}
            onChange={(e) => {
              setPassword(e.target.value);
              validator.current.showMessageFor("password");
            }}
          />
          {validator.current.message("password", password, "required|min:5")}
        </div>
      </form>
    </div>
  );
};

export default App;
