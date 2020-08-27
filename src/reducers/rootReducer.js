import { combineReducers } from "redux";
import { columns } from "./columns";
import { columnOrder } from "./column-order";
import { tasks } from "./tasks";

export const rootReducer = combineReducers({
	columns: columns,
	tasks: tasks,
	columnOrder: columnOrder,
});
