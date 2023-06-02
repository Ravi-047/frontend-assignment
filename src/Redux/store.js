import { legacy_createStore, compose, combineReducers, applyMiddleware } from "redux";
import thunk from "redux-thunk";
import scenarioReducer from "./reducer";


const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
    scenarioReducer
})


const store = legacy_createStore(
    rootReducer,
    composeEnhancers(applyMiddleware(thunk))
)


export { store }