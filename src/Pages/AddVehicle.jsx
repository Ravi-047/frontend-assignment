import React, { useEffect, useState } from "react";
import "../App.css";

import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { getScenario } from "../Redux/scenario/action";
import { addVehicle } from "../Redux/vehicles/action.Vehicle";

const AddVehicle = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const [selectScenario, setSelectScenario] = useState("");
  const [values, setValues] = useState({
    name: "",
    speed: "",
    initialPositionX: "",
    initialPositionY: "",
    direction: "",
  });

  const { scenario } = useSelector((state) => state.scenarioReducer);

  const handleFormSubmit = (event) => {
    event.preventDefault();
    let selectedUser = scenario.find(
      (item) => item.scenario === selectScenario
    );
    const sID = selectedUser.sID;
    const vehicleData = {
      ...values,
      sID,
    };
    dispatch(addVehicle(vehicleData)).then((res) => {
      if (res === 201) {
        alert("Vehicle added successfully");
      } else {
        alert("Something went wrong");
      }
    });
    setValues({
      name: "",
      speed: "",
      initialPositionX: "",
      initialPositionY: "",
      direction: "",
    });
    setSelectScenario("");
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setValues({ ...values, [name]: value });
  };

  const handleReset = () => {
    setValues({
      name: "",
      speed: "",
      initialPositionX: "",
      initialPositionY: "",
      direction: "",
    });
    setSelectScenario("");
  };

  const handeBack = () => {
    navigate(-1);
  };

  useEffect(() => {
    dispatch(getScenario());
  }, [dispatch]);

  return (
    <section>
      <p className="__add_scenario_navigation__">Vehicle / add</p>

      <form className="__add_sc_form__" action="" onSubmit={handleFormSubmit}>
        <h1 className="__add_sc_title__">Add Vehicle</h1>
        <div className="__add_sc_main_form__vehicle">
          <div className="__sc_add_input__">
            <label htmlFor="slist">Scenario List</label>
            <select
              name="list"
              id="slist"
              value={selectScenario}
              onChange={(event) => setSelectScenario(event.target.value)}
            >
              <option value="">Select Scenario</option>
              {scenario?.map((item) => (
                <option key={item.sID}>{item.scenario}</option>
              ))}
            </select>
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="vname">Vehicle Name</label>
            <input
              id="vname"
              type="text"
              placeholder="Vehicle Name"
              name="name"
              value={values.name}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="vspeed">Speed</label>
            <input
              id="vspeed"
              type="text"
              placeholder="2"
              name="speed"
              value={values.speed}
              required
              onChange={handleInputChange}
            />
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="vpx">Position X</label>
            <input
              id="vpx"
              type="text"
              placeholder="200"
              name="initialPositionX"
              value={values.initialPositionX}
              required
              onChange={handleInputChange}
            />
            <p className="information_postion">
              should not be &gt; 800 and &lt; 0
            </p>
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="vpy">Position Y</label>
            <input
              id="vpy"
              type="text"
              placeholder="20"
              name="initialPositionY"
              value={values.initialPositionY}
              required
              onChange={handleInputChange}
            />
            <p className="information_postion">
              should not be &gt; 800 and &lt; 0
            </p>
          </div>

          <div className="__sc_add_input__">
            <label htmlFor="dir">Direction</label>
            <select
              name="direction"
              id="dir"
              value={values.direction}
              onChange={handleInputChange}
            >
              <option value="">Select Direction</option>
              <option value="Towards">Towards</option>
              <option value="Backwards">Backwards</option>
              <option value="Upwards">Upwards</option>
              <option value="Downwards">Downwards</option>
            </select>
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

export default AddVehicle;
