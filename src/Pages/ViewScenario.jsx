import React, { useEffect, useState } from "react";
import "../App.css";
import { useDispatch, useSelector } from "react-redux";

import { RiAddBoxFill } from "react-icons/ri";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";
import { Link } from "react-router-dom";
import {
  deleteScenario,
  getScenario,
  updateScenario,
} from "../Redux/scenario/action";

const ViewScenario = () => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newScenario, setNewScenario] = useState("");
  const [newTime, setNewTime] = useState("");

  const { scenario } = useSelector((state) => state.scenarioReducer);

  const handleEdit = (id) => {
    const data = scenario?.find((item) => item.sID === id);
    setEditingId(id);
    setNewScenario(data.scenario);
    setNewTime(data.time);
  };

  const handleUpdate = (id) => {
    const newdata = { scenario: newScenario, time: newTime };
    dispatch(updateScenario(id, newdata));
    setEditingId(null);
    setNewScenario("");
    setNewTime("");
  };

  const handleDelete = (id) => {
    dispatch(deleteScenario(id));
  };

  const handleDeleteAll = () => {
    scenario?.forEach((item) => dispatch(deleteScenario(item?.id)));
  };

  useEffect(() => {
    dispatch(getScenario());
  }, [dispatch]);

  return (
    <section>
      <div className="view_scenario_nav">
        <p className="__add_scenario_navigation__">All Scenario</p>
        <div className="_view_sc_buttons">
          <Link to="/add-scenario">
            <button type="button">New Scenario</button>
          </Link>

          <Link to="/add-vehicle">
            <button type="button">Add Vehicle</button>
          </Link>
          <button type="button" onClick={handleDeleteAll}>
            Delete All
          </button>
        </div>
      </div>

      <div className="view_scenario_data">
        <table>
          <thead>
            <tr>
              <th>Scenario Id</th>
              <th>Scenario Name</th>
              <th>Scenario Time</th>
              <th>Number of Vehicles</th>
              <th>Add Vehicle</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {scenario &&
              scenario?.map((item) => (
                <tr key={item?.sID} className="_data_tr_">
                  <td>{item?.id}</td>
                  <td className="_data_sc_view_name_">
                    {editingId === item?.sID ? (
                      <input
                        type="text"
                        value={newScenario}
                        onChange={(e) => setNewScenario(e.target.value)}
                        className="_edit_input_"
                      />
                    ) : (
                      `${item?.scenario}`
                    )}
                  </td>
                  <td>
                    {editingId === item?.sID ? (
                      <input
                        type="text"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        className="_edit_input_"
                      />
                    ) : (
                      `${item?.time}s`
                    )}
                  </td>
                  <td>{item?.vehicles}</td>
                  <td>
                    <button className="_actions_sc_button_">
                      <RiAddBoxFill className="_sc_action_icon_" />
                    </button>
                  </td>
                  <td>
                    {editingId === item?.sID ? (
                      <button
                        onClick={() => handleUpdate(item?.id)}
                        className="__save__veiw_sn__"
                      >
                        save
                      </button>
                    ) : (
                      <button
                        className="_actions_sc_button_"
                        onClick={() => handleEdit(item?.sID)}
                      >
                        <AiFillEdit className="_sc_action_icon_" />
                      </button>
                    )}
                  </td>
                  <td>
                    <button
                      className="_actions_sc_button_"
                      onClick={() => handleDelete(item?.id)}
                    >
                      <AiTwotoneDelete className="_sc_action_icon_" />
                    </button>
                  </td>
                </tr>
              ))}
          </tbody>
        </table>
      </div>
    </section>
  );
};

export default ViewScenario;
