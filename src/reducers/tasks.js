const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";

const initialState = [
	{ id: "task-1", content: "Do something right" },
	{ id: "task-2", content: "Dont something right" },
	{ id: "task-3", content: "Should something right" },
	{ id: "task-4", content: "Would something right" },
];

export const tasks = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return [
				...state,
				{
					id: action.response.id,
					content: action.response.content,
				},
			];
		case GET_TASKS:
			return action.response;
		default:
			return state;
	}
};
