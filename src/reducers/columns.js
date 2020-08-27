import { UPDATE_COLUMNS } from "../actions/actions";

const GET_COLUMNS = "GET_COLUMNS";
const ADD_COLUMN = "ADD_COLUMN";
const ADD_TASK = "ADD_TASK";

const initialState = [
	{
		id: "column-1",
		title: "To Do",
		taskIds: ["task-1", "task-2", "task-3", "task-4"],
	},
	{
		id: "column-2",
		title: "Progress",
		taskIds: [],
	},
	{
		id: "column-3",
		title: "Done",
		taskIds: [],
	},
];

export const columns = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COLUMN:
			return [...state, action.response];
		case UPDATE_COLUMNS:
			return action.response;
		case GET_COLUMNS:
			return action.response;
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
