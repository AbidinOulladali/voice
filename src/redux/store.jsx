import { applyMiddleware, legacy_createStore as createStore } from "redux";
import { patientReducer } from "./reducer";
import { composeWithDevTools } from "redux-devtools-extension";
import { thunk } from "redux-thunk";

const store = createStore(patientReducer,composeWithDevTools(applyMiddleware(thunk)))
export default  store;