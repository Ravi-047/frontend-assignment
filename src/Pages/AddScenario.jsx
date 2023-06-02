import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addScenario } from "../Redux/action";

const AddScenario = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [values, setValues] = useState({
    scenario: "",
    time: "",
    vehicles: [],
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    const sID = Date.now().toString() + values.scenario;
    dispatch(addScenario({ ...values, sID })).then((res) => {
      if (res === 201) {
        alert("Scenario added successfully");
      } else {
        alert("Something went wrong");
      }
    });
    setValues({
      scenario: "",
      time: "",
      vehicles: [],
    });
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleReset = () => {
    setValues({
      scenario: "",
      time: "",
    });
  };

  const handeBack = () => {
    navigate(-1);
  };

  return (
    <section>
      <p className="__add_scenario_navigation__">Scenario / add</p>

      <form className="__add_sc_form__" action="" onSubmit={handleFormSubmit}>
        <h1 className="__add_sc_title__">Add Scenario</h1>
        <div className="__add_sc_main_form__">
          <div className="__sc_add_input__">
            <label htmlFor="sname">Scenario Name</label>
            <input
              id="sname"
              type="text"
              placeholder="Test Scenario"
              name="scenario"
              value={values.scenario}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="stime">Scenario Time (seconds)</label>
            <input
              id="stime"
              type="text"
              placeholder="10"
              name="time"
              value={values.time}
              required
              onChange={handleInputChange}
            />
          </div>
        </div>
        <div>
          <button type="submit">Add</button>
          <button type="button" onClick={handleReset}>
            Reset
          </button>
          <button type="button" onClick={handeBack}>
            Go Back
          </button>
        </div>
      </form>
    </section>
  );
};

export default AddScenario;
