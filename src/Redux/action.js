import axios from "axios"
import * as types from "./actionType"


const addScenario = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_SCENARIO_REQUEST });
    try {
        const response = await axios.post(`http://localhost:8080/scenarios`, payload)
        dispatch({ type: types.ADD_SCENARIO_SUCCESS, payload: response.data })
        return response.status
    } catch (error) {
        dispatch({ type: types.ADD_SCENARIO_FAILURE, payload: error })
    }
}


const getScenario = () => async (dispatch) => {
    dispatch({ type: types.GET_SCENARIO_FAILURE });
    try {
        const response = await axios.get(`http://localhost:8080/scenarios`);
        dispatch({ type: types.GET_SCENARIO_SUCCESS, payload: response.data });
        return response.status
    } catch (error) {
        dispatch({ type: types.GET_SCENARIO_FAILURE, payload: error })
    }
}

const updateScenario = (id, payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_SCENARIO_REQUEST });
    try {
        const response = await axios.patch(`http://localhost:8080/scenarios/${id}`, payload);
        dispatch({ type: types.UPDATE_SCENARIO_SUCCESS, payload: response.data })
        return response.status
    } catch (error) {
        dispatch({ type: types.UPDATE_SCENARIO_FAILURE, payload: error })
    }
}

const deleteScenario = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_SCENARIO_REQUEST });
    try {
        const response = await axios.delete(`http://localhost:8080/scenarios/${id}`)
        dispatch({ type: types.DELETE_SCENARIO_SUCCESS, payload: id })
        return response.status
    } catch (error) {
        dispatch({ type: types.DELETE_SCENARIO_FAILURE, payload: error })
    }
}



export { addScenario, getScenario, updateScenario, deleteScenario }