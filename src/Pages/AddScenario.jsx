import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const AddScenario = () => {
  const navigate = useNavigate();
  const [values, setValues] = useState({
    scenario: "",
    time: "",
  });
  const handleFormSubmit = (event) => {
    event.preventDefault();
    console.log(values);
    setValues({
      scenario: "",
      time: "",
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
            <label htmlFor="">Scenario Name</label>
            <input
              type="text"
              placeholder="Test Scenario"
              name="scenario"
              value={values.scenario}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="">Scenario Time (seconds)</label>
            <input
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
