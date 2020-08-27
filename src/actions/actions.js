import { v4 as uuidv4 } from "uuid";

export const ADD_NEW_CARD = "ADD_NEW_CARD";
export const ADD_NEW_LIST = "ADD_NEW_LIST";
export const GET_COLUMNS = "GET_COLUMNS";
export const ADD_COLUMN = "ADD_COLUMN";
export const ADD_TASK = "ADD_TASK";
export const UPDATE_COLUMNORDER = "UPDATE_COLUMNORDER";
export const UPDATE_COLUMNS = "UPDATE_COLUMNS";

export const addColumn = (title) => {
	return {
		type: ADD_COLUMN,
		response: {
			id: uuidv4(),
			title: title,
			taskIds: [],
		},
	};
};

export const addTask = (content, columnId) => {
	return {
		type: ADD_TASK,
		response: {
			id: uuidv4(),
			content: content,
			columnId: columnId,
		},
	};
};

export const updateColumnOrder = (response) => {
	return {
		type: UPDATE_COLUMNORDER,
		response,
	};
};

export const updateColumns = (response) => {
	return {
		type: UPDATE_COLUMNS,
		response,
	};
};
