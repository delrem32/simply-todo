const UPDATE_COLUMNORDER = "UPDATE_COLUMNORDER";
const GET_COLUMNORDER = "GET_COLUMNORDER";
const ADD_COLUMN = "ADD_COLUMN";

const initialState = ["column-1", "column-2", "column-3"];

export const columnOrder = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COLUMN:
			return [...state, action.response.id];
		case UPDATE_COLUMNORDER:
			return action.response;
		case GET_COLUMNORDER:
			return action.response;
		default:
			return state;
	}
};
