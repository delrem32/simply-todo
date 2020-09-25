const GET_TASKS = "GET_TASKS";
const ADD_TASK = "ADD_TASK";

const initialState = [];

export const tasks = (state = initialState, action) => {
	switch (action.type) {
		case ADD_TASK:
			return [
				...state,
				{
					id: action.response._id,
					content: action.response.content,
				},
			];
		case GET_TASKS:
			return action.response.map((task) => {
				return {id: task._id, content: task.content}
			},[]);
		default:
			return state;
	}
};
