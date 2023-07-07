import React, { useEffect, useState } from "react";
import "../App.css";
import { RiAddBoxFill } from "react-icons/ri";
import { AiFillEdit, AiTwotoneDelete } from "react-icons/ai";

import { useDispatch, useSelector } from "react-redux";
import {
  deleteVehicle,
  getVehicle,
  updateVehicle,
} from "../Redux/vehicles/action.Vehicle";

const Home = () => {
  const dispatch = useDispatch();
  const [editingId, setEditingId] = useState(null);
  const [newScenario, setNewScenario] = useState("");
  const [newTime, setNewTime] = useState("");

  const { vehicle } = useSelector((state) => state.vehicleReducer);

  const handleEdit = (id) => {
    const data = vehicle?.find((item) => item.sID === id);
    setEditingId(id);
    setNewScenario(data.scenario);
    setNewTime(data.time);
  };

  const handleUpdate = (id) => {
    const newdata = { scenario: newScenario, time: newTime };
    dispatch(updateVehicle(id, newdata));
    setEditingId(null);
    setNewScenario("");
    setNewTime("");
  };

  const handleDelete = (id) => {
    dispatch(deleteVehicle(id));
  };

  useEffect(() => {
    dispatch(getVehicle());
  }, [dispatch]);

  return (
    <section className="home__section">
      <h1>this is Home page</h1>
      <div className="view_scenario_data">
        <table>
          <thead>
            <tr>
              <th>Vehicle Id</th>
              <th>Vehicle Name</th>
              <th>Positiion X</th>
              <th>Position Y</th>
              <th>Speed</th>
              <th>Direction</th>
              <th>Edit</th>
              <th>Delete</th>
            </tr>
          </thead>
          <tbody>
            {vehicle &&
              vehicle?.map((item) => (
                <tr key={`${item?.id}+a`} className="_data_tr_">
                  <td>{item?.id}</td>
                  <td>
                    {editingId === item?.id ? (
                      <input
                        type="text"
                        value={newScenario}
                        onChange={(e) => setNewScenario(e.target.value)}
                        className="_edit_input_"
                      />
                    ) : (
                      `${item?.name}`
                    )}
                  </td>
                  <td>
                    {editingId === item?.id ? (
                      <input
                        type="text"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        className="_edit_input_"
                      />
                    ) : (
                      `${item?.initialPositionX}`
                    )}
                  </td>
                  <td>
                    {editingId === item?.id ? (
                      <input
                        type="text"
                        value={newTime}
                        onChange={(e) => setNewTime(e.target.value)}
                        className="_edit_input_"
                      />
                    ) : (
                      `${item?.initialPositionY}`
                    )}
                  </td>
                  <td>{item?.vehicles}</td>
                  <td>
                    <button className="_actions_sc_button_">
                      <RiAddBoxFill className="_sc_action_icon_" />
                    </button>
                  </td>
                  <td>
                    {editingId === item?.id ? (
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

export default Home;
