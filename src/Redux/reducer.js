import * as types from "./actionType"


const initialState = {
    scenario: [],
    isLoading: false,
    isError: false,
}

const scenarioReducer = (state = initialState, action) => {
    const { type, payload } = action;

    switch (type) {

        // getting scenario
        case types.GET_SCENARIO_REQUEST: {
            return { ...state, isLoading: true, isError: false, payload }
        }
        case types.GET_SCENARIO_SUCCESS: {
            return { ...state, isLoading: false, isError: false, scenario: payload }
        }
        case types.GET_SCENARIO_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // add scenario 
        case types.ADD_SCENARIO_REQUEST: {
            return { ...state, isLoading: true, isError: false };
        }
        case types.ADD_SCENARIO_SUCCESS: {
            return { ...state, isLoading: false, isError: false, scenario: [...state.scenario, payload] };
        }
        case types.ADD_SCENARIO_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // update Scenario
        case types.UPDATE_SCENARIO_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case types.UPDATE_SCENARIO_SUCCESS: {
            let newScenario = state.scenario.map((item) => {
                return item.id === payload.id ? payload : item;
            })
            return { ...state, isLoading: false, isError: false, scenario: newScenario }
        }
        case types.UPDATE_SCENARIO_FAILURE: {
            return { ...state, isLoading: false, isError: true }
        }

        // delete scenario
        case types.DELETE_SCENARIO_REQUEST: {
            return { ...state, isLoading: true, isError: false }
        }
        case types.DELETE_SCENARIO_SUCCESS: {
            const filteredData = state.scenario.filter((item) => item.id !== payload)
            return { ...state, isLoading: false, isError: false, scenario: filteredData }
        }

        default: {
            return state
        }
    }
}

export default scenarioReducer;