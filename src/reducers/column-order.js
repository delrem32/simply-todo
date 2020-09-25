const UPDATE_COLUMNORDER = "UPDATE_COLUMNORDER";
const GET_COLUMNORDER = "GET_COLUMNORDER";
const ADD_COLUMN = "ADD_COLUMN";

const initialState = [];

export const columnOrder = (state = initialState, action) => {
	switch (action.type) {
		case ADD_COLUMN:
			return [...state, action.response.id];
		case UPDATE_COLUMNORDER:
			return action.response.columnOrder;
		case GET_COLUMNORDER:
			return action.response.columnOrder;
		default:
			return state;
	}
};
