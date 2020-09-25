import { combineReducers } from "redux";
import { columns } from "./columns";
import { columnOrder } from "./column-order";
import { tasks } from "./tasks";
import { auth } from "./auth";
const LOG_OUT = "LOG_OUT";
export const appReducer = combineReducers({
	columns: columns,
	tasks: tasks,
	columnOrder: columnOrder,
	auth: auth,
});

export const rootReducer = (state, action) => {
	if (action.type === LOG_OUT) {
		state = undefined;
	}

	return appReducer(state, action);
};
