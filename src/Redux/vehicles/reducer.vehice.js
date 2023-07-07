import * as types from "./actionTypes.vehicle"


const initialState = {
    vehicle: [],
    isLoading: false,
    isError: false,
}

const vehicleReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        // getting VEHICLE
        case types.GET_VEHICLE_REQUEST: {
            return { ...state, isLoading: true, isError: false, payload }
        }
        case types.GET_VEHICLE_SUCCESS: {
            return { ...state, isLoading: false, isError: false, vehicle: payload }
        }
        case types.GET_VEHICLE_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // add scenario 
        case types.ADD_VEHICLE_REQUEST: {
            return { ...state, isLoading: true, isError: false };
        }
        case types.ADD_VEHICLE_SUCCESS: {
            return { ...state, isLoading: false, isError: false, vehicle: [...state.vehicle, payload] };
        }
        case types.ADD_VEHICLE_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // update Scenario
        case types.UPDATE_VEHICLE_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case types.UPDATE_VEHICLE_SUCCESS: {
            let newVehicle = state.vehicle.map((item) => {
                return item.id === payload.id ? payload : item;
            })
            return { ...state, isLoading: false, isError: false, vehicle: newVehicle }
        }
        case types.UPDATE_VEHICLE_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // delete scenario
        case types.DELETE_VEHICLE_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case types.DELETE_VEHICLE_SUCCESS: {
            const filteredData = state.vehicle.filter((item) => item.id !== payload)
            return { ...state, isLoading: false, isError: false, vehicle: filteredData }
        }
        case types.DELETE_VEHICLE_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }


        default: {
            return state
        }
    }
}

export default vehicleReducer;