import axios from "axios"
import * as types from "./actionTypes.vehicle"


const addVehicle = (payload) => async (dispatch) => {
    dispatch({ type: types.ADD_VEHICLE_REQUEST });
    try {
        const response = await axios.post(`http://localhost:8080/vehicles`, payload)
        dispatch({ type: types.ADD_VEHICLE_SUCCESS, payload: response.data })
        return response.status
    } catch (error) {
        dispatch({ type: types.ADD_VEHICLE_FAILURE, payload: error })
    }
}


const getVehicle = () => async (dispatch) => {
    dispatch({ type: types.GET_VEHICLE_FAILURE });
    try {
        const response = await axios.get(`http://localhost:8080/vehicles`);
        dispatch({ type: types.GET_VEHICLE_SUCCESS, payload: response.data });
        return response.status
    } catch (error) {
        dispatch({ type: types.GET_VEHICLE_FAILURE, payload: error })
    }
}

const updateVehicle = (id, payload) => async (dispatch) => {
    dispatch({ type: types.UPDATE_VEHICLE_REQUEST });
    try {
        const response = await axios.patch(`http://localhost:8080/vehicles/${id}`, payload);
        dispatch({ type: types.UPDATE_VEHICLE_SUCCESS, payload: response.data })
        return response.status
    } catch (error) {
        dispatch({ type: types.UPDATE_VEHICLE_FAILURE, payload: error })
    }
}

const deleteVehicle = (id) => async (dispatch) => {
    dispatch({ type: types.DELETE_VEHICLE_REQUEST });
    try {
        const response = await axios.delete(`http://localhost:8080/vehicles/${id}`)
        dispatch({ type: types.DELETE_VEHICLE_SUCCESS, payload: id })
        return response.status
    } catch (error) {
        dispatch({ type: types.DELETE_VEHICLE_FAILURE, payload: error })
    }
}



export { addVehicle, getVehicle, updateVehicle, deleteVehicle }