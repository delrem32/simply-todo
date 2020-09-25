import { UPDATE_COLUMNS } from "../actions/actions";

const GET_COLUMNS = "GET_COLUMNS";
const ADD_COLUMN = "ADD_COLUMN";
const ADD_TASK = "ADD_TASK";

const initialState = [];

export const columns = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COLUMN:
			return [...state, action.response];
		case UPDATE_COLUMNS:
			return action.response.map((column) => {
				return {title: column.title, id: column._id, taskIds: column.taskIds}
			}, []);
		case GET_COLUMNS:
			return action.response.map((column) => {
				return {title: column.title, id: column._id, taskIds: column.taskIds}
			}, []);
		case ADD_TASK: {
			return [...state].map((column) => {
				if (column.id === action.response.columnId) {
					column.taskIds.push(action.response.id);
					return column;
				}
				return column;
			});
		}
		default:
			return state;
	}
};
