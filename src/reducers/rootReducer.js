import { combineReducers } from "redux";
import { columns } from "./columns";
import { columnOrder } from "./column-order";
import { tasks } from "./tasks";
import { auth } from "./auth";

export const rootReducer = combineReducers({
	columns: columns,
	tasks: tasks,
	columnOrder: columnOrder,
	auth: auth,
});
